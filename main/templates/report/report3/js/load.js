
content = '数据获取中，请稍后';//内容
num = 0;//报道数量
someDefinition = '本监测报告内容覆盖智能制造装备总体产业，包括智能测控装置、关键基础零部件、智能化高端装备和重大集成智能装备等智能制造装备的细分产业；以关键制造环节的智能化为核心，以端到端数据流为基础，和以网通互联为支撑。包括智能产品、智能生产、智能工厂、智能物流、各类智能机器人等。';//相关定义
accumulateNumber = 0;//页码计数

function getReport3Data(){
    //联网获取数据库的数据

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/getReport3Data/",
        data: {
            //定义传递给服务端的数据
            "date": '6',//用于获取相应的月份
        },
        beforeSend:function(XMLHttpRequest){
            console.log('data is being load');
            var over = document.getElementById('over2');
            over.style.display = 'block';
            var login = document.getElementById('login2');
            login.style.display = 'block';
        },
        success: function (result) {
            var over = document.getElementById('over2');
            over.style.display = 'none';
            var login = document.getElementById('login2');
            login.style.display = 'none';

            console.log('data has been got');
            //console.log(result['content']);
            //内容
            content = result['content'];
            console.log(content);
            //记录数
            //itemN = result['itemNum'];
            //console.log(itemN);
            //条目数
            num = content.length;
            //console.log(num);
            //加载详情页
            loadDetail(content,num);
            //加载最后一页
            loadLast();
            //加载目录页面
            load(content,num);


        },
    });

}

function load(content,num){
	////加载页面
    //console.log('总记录数为'+num);
    //console.log(num);
    //console.log(content);
    //加载前的参数准备
    //1、总行数
    var linenum = 0;
    for(i=0;i<num;i++){
        if(content[i][2].length < 49){
            linenum++;
        }
        else{
            linenum=linenum+2;
        }
    }
    //console.log('总行数为'+linenum);
    //2、页面数量
    var page_num = Math.ceil(linenum/28);
    //console.log('页面数量'+page_num);

    //加载页面
	for (i=0;i<page_num;i++) {
	    var q = 0+i*28;
	    var h = 28+i*28
	    //装载每页的报道
	    if(i != page_num){
	        item = content.slice(q,h);
            //console.log(item.length);
	    }
	    else{
	        item = content.slice(q);
            //console.log(item.length);
	    }

        //生成页面
		var blankPage = creatCatalogPage(i%2,i+1,i,item);//偶数页有页尾
		//document.body.appendChild(blankPage);
		var categoryDiv = document.getElementById('category');
		categoryDiv.appendChild(blankPage);
	}
	
}

function creatCatalogPage(type,idNum,first,item){
	// 生成目录页面，（type:是否有页尾；idNum:新建页的id,first:是否为首页,item:报道）
	//console.log(item);
	var catalog = document.createElement('div');
	catalog.className = 'main';
	catalog.id = 'catalog_'+idNum;
	
	var background = document.createElement('div');
	background.className = 'background';
	
	var pageTop = document.createElement('div');
	pageTop.className = 'pageTop';
	pageTop.innerText = idNum;
	
	background.appendChild(pageTop);
	
	if (type == 0) {
		var pageBottom = document.createElement('div');
		pageBottom.className = 'pageBottom';
		background.appendChild(pageBottom);
	}
	
	if (first == 0) {
		var homeLogo = document.createElement('div');
		homeLogo.className = 'catalogImg';
		homeLogo.innerText = '目录';
		background.appendChild(homeLogo);
	}
	
	 
	var catalogContent = document.createElement('div');
	catalogContent.className = 'catalogContent';
		
	
	//加载具体的文字

	var catalogCategory = document.createElement('div');
	catalogCategory.className = 'catalogCategory';
		
		
	for (itemNum=0;itemNum<item.length;itemNum++) {
        //console.log(item[itemNum][2].length);
        //判断是类别还是标题
        if(item[itemNum][0]=='title'){
            //console.log(item[itemNum][2]+'is title');
            //判断标题长度以决定是否分行
            if(item[itemNum][2].length < 49){
                var catalogContentLine = document.createElement('div');
                catalogContentLine.className = 'catalogContent-line';

                var tempItem = document.createElement('div');
                tempItem.className = 'catalogContent-line-item';
                tempItem.innerText = item[itemNum][2];//标题
                catalogContentLine.appendChild(tempItem);

                var tempPageNum = document.createElement('div');
                tempPageNum.className = 'catalogContent-line-pagnum';
                tempPageNum.innerText = item[itemNum][6];//页码
                catalogContentLine.appendChild(tempPageNum);

                catalogCategory.appendChild(catalogContentLine);

            }
            else{
                var catalogContentLine1 = document.createElement('div');
                catalogContentLine1.className = 'catalogContent-line';

                var tempItem1 = document.createElement('div');
                tempItem1.className = 'catalogContent-line-item';
                tempItem1.innerText = item[itemNum][2].slice(0,49);//标题
                catalogContentLine1.appendChild(tempItem1);
                catalogCategory.appendChild(catalogContentLine1);


                var catalogContentLine2 = document.createElement('div');
                catalogContentLine2.className = 'catalogContent-line';

                var tempItem2 = document.createElement('div');
                tempItem2.className = 'catalogContent-line-item';
                tempItem2.innerText = item[itemNum][2].slice(49);//标题
                catalogContentLine2.appendChild(tempItem2);

                var tempPageNum = document.createElement('div');
                tempPageNum.className = 'catalogContent-line-pagnum';
                tempPageNum.innerText = item[itemNum][6];//页码
                catalogContentLine2.appendChild(tempPageNum);

                catalogCategory.appendChild(catalogContentLine2);

            }

        }
        else{
            //console.log(item[itemNum][2]+'is category');
            //类型
            if(item[itemNum][1]==1){
                var catalogContentLine = document.createElement('div');
                catalogContentLine.className = 'catalogContent-line';

                var tempTitle = document.createElement('div');
                tempTitle.className = 'catalogContent-line-title';
                tempTitle.innerText = '相关定义';//类别
                catalogContentLine.appendChild(tempTitle);

                var tempPageNum = document.createElement('div');
                tempPageNum.className = 'catalogContent-line-pagnum';
                tempPageNum.innerText = '1';//页码
                catalogContentLine.appendChild(tempPageNum);

                catalogCategory.appendChild(catalogContentLine);
            }

            var catalogContentLine = document.createElement('div');
            catalogContentLine.className = 'catalogContent-line';

            var tempTitle = document.createElement('div');
            tempTitle.className = 'catalogContent-line-title';
            tempTitle.innerText = NumberToChinese(item[itemNum][1])+"、"+item[itemNum][2];//类别
            catalogContentLine.appendChild(tempTitle);

            var tempPageNum = document.createElement('div');
            tempPageNum.className = 'catalogContent-line-pagnum';
            tempPageNum.innerText = item[itemNum][3];//页码
            catalogContentLine.appendChild(tempPageNum);

            catalogCategory.appendChild(catalogContentLine);
        }


	}
		
	catalogContent.appendChild(catalogCategory);
	
	background.appendChild(catalogContent);
	catalog.appendChild(background);
	return catalog;
}

function sleep(numberMillis) {
    //线程睡眠函数
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
	    }
}

function loadDetail(content,num){
    //加载说明页
    var blankPage = creatDetailPage(1%2,0,2,1)
    document.body.appendChild(blankPage);
    //加载详情页
    var cut_second = '';
    for (i=1;i<num;i++){
        //判断是否为新闻
        if(content[i][0]=='title'){
            //判断文字数
            var sumNum = content[i][4].length + cut_second.length;
            //console.log(sumNum);
            if(sumNum<1200){
                //console.log(i+'文字数量在范围内'+sumNum);
                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                document.body.appendChild(detailPage);
                cut_second = '';
            }
            else{
                if(cut_second.length<1200){
                    //cut_first = content[i][4].slice(0,1100);
                    //console.log(i+'文字数量bu在范围内，但剩余的不足一页'+sumNum);
                    //剩下的新闻，留给下一页
                    var llnum = 1200-cut_second.length;
                    //临时存储剩下的
                    cut_second_dump = content[i][4].slice(llnum);
                    //console.log(cut_second);
                    content[i][4] =  content[i][4].slice(0,llnum);

                    var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                    document.body.appendChild(detailPage);

                    cut_second = cut_second_dump;

                }
                else{
                    if(cut_second.length<2400){
                        //console.log(i+'剩下的超出了1200个字数不到2400个字，需新生成一页以装这个');
                        var newpagedata = cut_second.slice(0,1200);
                        var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                        document.body.appendChild(remainPage);
                        cut_second = cut_second.slice(1200);
                        //console.log(cut_second.length);

                        var sumNum = content[i][4].length + cut_second.length;
                        //console.log(sumNum);
                        if(sumNum<1200){
                            //console.log('文字数量在范围内'+content[i][4].length);
                            var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                            document.body.appendChild(detailPage);
                            cut_second = '';
                        }
                        else{
                            //剩下的新闻，留给下一页
                            var llnum = 1200-cut_second.length;
                            //临时存储剩下的
                            cut_second_dump = content[i][4].slice(llnum);
                            //console.log(cut_second);
                            content[i][4] =  content[i][4].slice(0,llnum);

                            var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                            document.body.appendChild(detailPage);

                            cut_second = cut_second_dump;
                        }


                    }
                    else{
                        //console.warn(i+'剩下的超出了2400个字数'+cut_second.length);
                        //cut_second = '';
                        if(cut_second.length<3600){
                            //console.warn(i+'剩下的超出了2400个字数'+cut_second.length);

                            for(p=0;p<2;p++){
                                var newpagedata = cut_second.slice(0+p*1200,1200+p*1200);
                                var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                                document.body.appendChild(remainPage);
                            }
                            cut_second = cut_second.slice(2400);

                            var sumNum = content[i][4].length + cut_second.length;
                            //console.log(sumNum);
                            if(sumNum<1200){
                                //console.log('文字数量在范围内'+content[i][4].length);
                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);
                                cut_second = '';
                            }
                            else{
                                //剩下的新闻，留给下一页
                                var llnum = 1200-cut_second.length;
                                //临时存储剩下的
                                cut_second_dump = content[i][4].slice(llnum);
                                //console.log(cut_second);
                                content[i][4] =  content[i][4].slice(0,llnum);

                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);

                                cut_second = cut_second_dump;
                            }
                        }
                        else if(cut_second.length<4800){
                            //console.warn(i+'剩下的超出了3600个字数'+cut_second.length);

                            for(p=0;p<3;p++){
                                var newpagedata = cut_second.slice(0+p*1200,1200+p*1200);
                                var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                                document.body.appendChild(remainPage);
                            }
                            cut_second = cut_second.slice(3600);

                            var sumNum = content[i][4].length + cut_second.length;
                            //console.log(sumNum);
                            if(sumNum<1200){
                                //console.log('文字数量在范围内'+content[i][4].length);
                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);
                                cut_second = '';
                            }
                            else{
                                //剩下的新闻，留给下一页
                                var llnum = 1200-cut_second.length;
                                //临时存储剩下的
                                cut_second_dump = content[i][4].slice(llnum);
                                //console.log(cut_second);
                                content[i][4] =  content[i][4].slice(0,llnum);

                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);

                                cut_second = cut_second_dump;
                            }
                        }
                        else if(cut_second.length<6000){
                            //console.warn(i+'剩下的超出了4800个字数'+cut_second.length);

                            for(p=0;p<4;p++){
                                var newpagedata = cut_second.slice(0+p*1200,1200+p*1200);
                                var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                                document.body.appendChild(remainPage);
                            }
                            cut_second = cut_second.slice(4800);

                            var sumNum = content[i][4].length + cut_second.length;
                            //console.log(sumNum);
                            if(sumNum<1200){
                                //console.log('文字数量在范围内'+content[i][4].length);
                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);
                                cut_second = '';
                            }
                            else{
                                //剩下的新闻，留给下一页
                                var llnum = 1200-cut_second.length;
                                //临时存储剩下的
                                cut_second_dump = content[i][4].slice(llnum);
                                //console.log(cut_second);
                                content[i][4] =  content[i][4].slice(0,llnum);

                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);

                                cut_second = cut_second_dump;
                            }
                        }
                        else if(cut_second.length<7200){
                            //console.warn(i+'剩下的超出了6000个字数'+cut_second.length);

                            for(p=0;p<5;p++){
                                var newpagedata = cut_second.slice(0+p*1200,1200+p*1200);
                                var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                                document.body.appendChild(remainPage);
                            }
                            cut_second = cut_second.slice(6000);

                            var sumNum = content[i][4].length + cut_second.length;
                            //console.log(sumNum);
                            if(sumNum<1200){
                                //console.log('文字数量在范围内'+content[i][4].length);
                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);
                                cut_second = '';
                            }
                            else{
                                //剩下的新闻，留给下一页
                                var llnum = 1200-cut_second.length;
                                //临时存储剩下的
                                cut_second_dump = content[i][4].slice(llnum);
                                //console.log(cut_second);
                                content[i][4] =  content[i][4].slice(0,llnum);

                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);

                                cut_second = cut_second_dump;
                            }
                        }
                        else if(cut_second.length<8400){
                            //console.warn(i+'剩下的超出了7200个字数'+cut_second.length);

                            for(p=0;p<6;p++){
                                var newpagedata = cut_second.slice(0+p*1200,1200+p*1200);
                                var remainPage = creatDetailPage_2(i%2,i,0,newpagedata);
                                document.body.appendChild(remainPage);
                            }
                            cut_second = cut_second.slice(7200);

                            var sumNum = content[i][4].length + cut_second.length;
                            //console.log(sumNum);
                            if(sumNum<1200){
                                //console.log('文字数量在范围内'+content[i][4].length);
                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);
                                cut_second = '';
                            }
                            else{
                                //剩下的新闻，留给下一页
                                var llnum = 1200-cut_second.length;
                                //临时存储剩下的
                                cut_second_dump = content[i][4].slice(llnum);
                                //console.log(cut_second);
                                content[i][4] =  content[i][4].slice(0,llnum);

                                var detailPage = creatDetailPage(i%2,i,content[i],0,cut_second);
                                document.body.appendChild(detailPage);

                                cut_second = cut_second_dump;
                            }
                        }
                        else{
                            console.warn(i+'文章字数过多，不予显示'+cut_second.length);
                        }
                    }

                }

            }
        }
    }
    //console.log(cut_second);
    //最后剩下的进行处理
    var lastPage = creatDetailPage_2(i%2,num-1,0,cut_second);
    document.body.appendChild(lastPage);


}

function creatDetailPage(type,idNum,item, definition, remain=''){
    //生成详情页面及定义页(type:奇数页还是偶数页，idNum:页面id，item:数据项, definition:是否为定义页, remain:上一个剩下的数据)
    var newscontent = 'newsContent';//内容容器的类名，用于更改以优化布局

    var main = document.createElement('div');
	main.className = 'main';
	//1##############
	//保存页码
	accumulateNumber++;
	item[6] = accumulateNumber;
	//console.log(item[6]);
	//console.log(content);
	if (definition == 1){
	    main.id = 'def';
	}
	else{
	    main.id = 'detail_'+(accumulateNumber-1);
	}


	var background = document.createElement('div');
	background.className = 'background';

	var pageTop = document.createElement('div');
	pageTop.className = 'pageTop';
	pageTop.innerText = accumulateNumber;
	background.appendChild(pageTop);

	if (type == 0) {
		var pageBottom = document.createElement('div');
		pageBottom.className = 'pageBottom';
		background.appendChild(pageBottom);

		newscontent = 'newsContent_2';
	}

    if (definition == 1){
        //定义页
        var defContent = document.createElement('div');
        defContent.className = 'defContent';
        var defTitle = document.createElement('div');
        defTitle.className = 'defContent-title';
        defTitle.innerText = '相关定义';
        var defDetail = document.createElement('p');
        defDetail.className = 'defContent-detile';
        defDetail.innerText = someDefinition;
        //装载控件
        defContent.appendChild(defTitle);
        defContent.appendChild(defDetail);

        background.appendChild(defContent);
    }
    else{
        //详情页
        var newsC = document.createElement('div');
        newsC.className = newscontent;

        var newsC_detail_remain = document.createElement('div');
        newsC_detail_remain.className = 'newsContent-detile';
        newsC_detail_remain.innerText = remain;
        newsC.appendChild(newsC_detail_remain);

        //判断是否为某一类的第一个
        if(item[1]==1){
            //给数据包里的类别向添加页码
            var this_item_category_index = content.indexOf(item)-1;
            content[this_item_category_index][3] = accumulateNumber;
            //console.log(NumberToChinese(content[this_item_category_index][1])+'、'+content[this_item_category_index][2]);
            //添加显示标题
            var newsC_title = document.createElement('div');
            newsC_title.className = 'newsContent-title';
            newsC_title.innerText = NumberToChinese(content[this_item_category_index][1])+'、'+content[this_item_category_index][2];
            //console.log(NumberToChinese(item[1])+"、"+item[2];//类别
            //console.log(item);
            newsC.appendChild(newsC_title);

        }

        var newsC_subTitle = document.createElement('div');
        newsC_subTitle.className = 'newsContent-subTitle';
        newsC_subTitle.innerText = item[2];

        var newsC_source = document.createElement('div');
        newsC_source.className = 'newsContent-source';
        newsC_source.innerText = '来源：'+item[3];

        var newsC_detail = document.createElement('div');
        newsC_detail.className = 'newsContent-detile';
        newsC_detail.innerText = item[4];

        newsC.appendChild(newsC_subTitle);
        newsC.appendChild(newsC_source);
        newsC.appendChild(newsC_detail);
        background.appendChild(newsC);
    }


	main.appendChild(background);

	return main;
}

function creatDetailPage_2(type,idNum,definition, remain=''){
    //生成详情页面（不带标题）及定义页(type:奇数页还是偶数页，idNum:页面id，item:数据项, definition:是否为定义页, remain:上一个剩下的数据)
    var newscontent = 'newsContent';//内容容器的类名，用于更改以优化布局

    var main = document.createElement('div');
	main.className = 'main';
	//2############################
	accumulateNumber++;
	//console.log(accumulateNumber);
	main.id = 'detail_'+(accumulateNumber-1);

	var background = document.createElement('div');
	background.className = 'background';

	var pageTop = document.createElement('div');
	pageTop.className = 'pageTop';
	pageTop.innerText = accumulateNumber;
	background.appendChild(pageTop);

	if (type == 0) {
		var pageBottom = document.createElement('div');
		pageBottom.className = 'pageBottom';
		background.appendChild(pageBottom);

		newscontent = 'newsContent_2';
	}

    if (definition == 1){
        //定义页
        var defContent = document.createElement('div');
        defContent.className = 'defContent';
        var defTitle = document.createElement('div');
        defTitle.className = 'defContent-title';
        defTitle.innerText = '相关定义';
        var defDetail = document.createElement('p');
        defDetail.className = 'defContent-detile';
        defDetail.innerText = someDefinition;
        //装载控件
        defContent.appendChild(defTitle);
        defContent.appendChild(defDetail);

        background.appendChild(defContent);
    }
    else{
        //详情页
        var newsC = document.createElement('div');
        newsC.className = newscontent;

        var newsC_detail_remain = document.createElement('div');
        newsC_detail_remain.className = 'newsContent-detile';
        newsC_detail_remain.innerText = remain;


        newsC.appendChild(newsC_detail_remain);
        background.appendChild(newsC);
    }


	main.appendChild(background);

	return main;
}


function loadLast(){
    //加载最后一页
    var last = creatLastPage();
    document.body.appendChild(last);
}
function creatLastPage(){
    //生成最后一页
    var main = document.createElement('div');
	main.className = 'main';
	main.id = 'last_1';

	var background = document.createElement('div');
	background.className = 'background';

	var pageTop = document.createElement('div');
	pageTop.className = 'pageTop';
	//pageTop.innerText = '123';
	background.appendChild(pageTop);

	var pageBottom = document.createElement('div');
	pageBottom.className = 'pageBottom';
	background.appendChild(pageBottom);

	var top = document.createElement('div');
	top.className = 'lastPage-RQTop';
	var RQ_1 = document.createElement('div');
	RQ_1.className = 'lastPage-RQ1';
	var lp = document.createElement('p');
	lp.innerText = '扫描下载更多报告';
	top.appendChild(RQ_1);
	top.appendChild(lp);

	var div1 = document.createElement('div');
	div1.className = 'lastPage-div1';
	var t1 = document.createElement('div');
	t1.className = 'lastPage-div1-title1';
	t1.innerText = '满天星·产业知识分享平台';
	var hr = document.createElement('hr');
	//title2 start
	var t2 = document.createElement('div');
	t2.className = 'lastPage-div1-title2';

	var p1 = document.createElement('p');
	p1.id = 'p1';
	var i1 = document.createElement('i');
	i1.className = 'fa fa-phone';
	var pp = document.createElement('p');
	pp.innerText = '010-88559043';
    p1.appendChild(i1);
	p1.appendChild(pp);


	var p2 = document.createElement('p');
	p2.id = 'p2';
	var i2 = document.createElement('i');
	i2.className = 'fa fa-internet-explorer';
	var ppp = document.createElement('p');
	ppp.innerText = 'www.mtx.cn';
	p2.appendChild(i2);
	p2.appendChild(ppp);

	t2.appendChild(p1);
	t2.appendChild(p2);
	//title2 end
	div1.appendChild(t1);
	div1.appendChild(hr);
	div1.appendChild(t2);


    var div2 = document.createElement('div');
    div2.className = 'lastPage-div2';

    var nei = ['覆盖行业 100+ 个','汇聚专家 1000+ 位','注册会员 100万+人','产业数据 1000万+ 条','研究报告 10000+ 本',''];
    for(var i=0;i<3;i++){
        var one = document.createElement('div');
        one.className = 'one';
        var dp1 = document.createElement('p');
        dp1.className = 'div2-p1';
        dp1.innerText = nei[i];
        var dp2 = document.createElement('p');
        dp2.className = 'div2-p2';
        dp2.innerText = nei[i+3];
        one.appendChild(dp1);
        one.appendChild(dp2);

        div2.appendChild(one);

    }

    var bottom = document.createElement('div');
    bottom.className = 'lastPage-RQBottom';
    var l = document.createElement('div');
    l.className = 'left';
    var RQ_2 = document.createElement('div');
    RQ_2.className = 'lastPage-RQ2';
    var the_p = document.createElement('p');
    the_p.innerText = '满天星 产业通';
    l.appendChild(RQ_2);
    l.appendChild(the_p);
    var r = document.createElement('div');
    r.className = 'right';
    var RQ_3 = document.createElement('div');
    RQ_3.className = 'lastPage-RQ3';
    var the_p = document.createElement('p');
    the_p.innerText = '赛迪顾问官方微信';
    r.appendChild(RQ_3);
    r.appendChild(the_p);

    bottom.appendChild(l);
    bottom.appendChild(r);



	background.appendChild(pageTop);
	background.appendChild(pageBottom);
	background.appendChild(top);
	background.appendChild(div1);
	background.appendChild(div2);
	background.appendChild(bottom);
	main.appendChild(background);

	return main;

}