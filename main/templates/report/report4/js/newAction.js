/*
//图表数据
option = {
			    //color: ['#19696d'],
			    title: {
			        text: '企业工业增加值同比增速',
					x:'center',
					textStyle:{
						fontSize:14,
						color:'black',
					},
			    },
			    tooltip: {},
			    xAxis: {
					show:false,
					type:'value',
			    },
			    yAxis: {
					type:'category',
					//show:false,
					data: ["规模以上民营企业","中小企业","股份制企业","国有经贸企业","外贸及港澳台商\n投资企业"],
					axisLabel:{
						interval:0,//横轴信息全部显示
					},
				},
			    series: [{
					barWidth:10,
			        name: '增速',
			        type: 'bar',
			        data: [30,20,36,66,12],
					markLine : {
						data : [
							{ name: '平均值', type:'average'},
						]
					},
					label: {
						normal: {
							show: true,
							position: 'right',
							formatter:'{c}%',
						}
					},
			    }],
				grid:{//控制图形大小
					top: 40,
					x:120,
					x2:30,
					y2:50,

				}
			};
//1.textarea测试数据
textareadate = [2,1,'受到2018年第四季度中国及全球半导体市场下滑影响，中国集成电路产业2018年全年增速比前三季度略有下降。中国半导体行业协会统计，2018年中国集成电路产业销售额6532亿元，同比增长20.7%。其中，设计业同比增长21.5%，销售额为2519.3亿元；制造业继续保持快速增',0];
//2.title测试数据[顺序码，类型代码，内容，数据库id, 章节编号, 章节名称]
titledata = [3,2,'（一）国内集成电路产业销售额与美国相比仍存较大差距',0];
//3.chart测试数据
chartdata = [4,3,option,0];
//4.table测试数据
tabledata = [6,4,[
	['表1 2018年全球销售额TOP20半导体厂商（单位：亿美元）'],
	['排名','公司名称','国家','2018销售额','市场份额'],
	['1','三星电子','韩国','736.5','15.5%'],
	['2','三星电子','韩国','736.5','15.5%'],
	['3','三星电子','韩国','736.5','15.5%'],
	['4','三星电子','韩国','736.5','15.5%'],
	['2','三星电子','韩国','736.5','15.5%'],
	['3','三星电子','韩国','736.5','15.5%'],
	['4','三星电子','韩国','736.5','15.5%'],
	['5','三星电子','韩国','736.5','15.5%'],
	['1','三星电子','韩国','736.5','15.5%'],
	['2','三星电子','韩国','736.5','15.5%'],
	['3','三星电子','韩国','736.5','15.5%'],
],0,2,'国内半导体产业盈利情况分析'];
////测试数据包（网络传输用）
zipData = [titledata,textareadate,textareadate,textareadate,textareadate,textareadate,textareadate,chartdata,textareadate,textareadate,textareadate,textareadate,chartdata,textareadate,textareadate,textareadate,titledata,titledata,titledata,titledata,titledata,titledata,tabledata];
*/



////后端传来的报告信息
//console.log(report_information[1]);

//联网获取数据并进行页面渲染
getReport4Data(report_information[1]);

//生成新页面
function maincreat(DATA){
	//#########################################
	//数据域 start
	//统计行数
	//var num = calcuteLineNum(zipData[1][2]);
	//textarea和table临时存储区
	textareaTemp = [0,1,'',0,0,0];//[顺序码，类型代码，内容，数据库id，章节编号，章节名称, 页码 ]
	tableTemp = [0,4,[[]],0,0,0];
	//页面总长度
	pageheight = 930;
	//剩余页面长度
	sumheight = 0;
	//累计页码
	pagenumber = 0;
	//累计textarea数量
	textareanumber = 0;
	//累计chart数量
	chartnumber = 0;
	//累计table数量
	tablenumber = 0;
	//累计title数量
	titlenumber = 0;
	//章节
	capter = 0;
	//是否为某章节的第一页
	singal = true;
	mainbody = document.getElementById('mainbody');
	//console.log(num);
	//数据域 end
	//#########################################
	//生成报告
	//1.渲染生成
	//console.log('总页面高度'+sumheight);
	//判断数据类型以进行元素生成
	for (var i = 0;i<DATA.length;i++) {
		//判断是否有生成新页面的必要
		if (sumheight==0) {
			newpage = createnewpage(pagenumber);
			newbackground = newpage.getElementsByClassName('background')[0];
			sumheight = pageheight;
			pagenumber++;
			if(singal){
                 var capterTitle = document.createElement('div');
                 capterTitle.className = 'capterTitle';
                 var capternum = document.createElement('div');
                 capternum.className = 'capternum';
                 capternum.innerText = DATA[i][4];
                 var capterdiv = document.createElement('div');
                 capterdiv.className = 'capterdiv';
                 capterdiv.innerText = DATA[i][5];

                 capterTitle.appendChild(capternum);
                 capterTitle.appendChild(capterdiv);
                 newbackground.appendChild(capterTitle);
                 singal = false;
                 sumheight -=50;
			}
			//console.log(newpage);
		}
		switch (DATA[i][1]){
			case 1:
			    //判断是否是第一项
			    if(DATA[i][4]!= capter){
			        capter = DATA[i][4];
                    //console.log('章节不同，需要加标题');
                    sumheight = 0;
                    singal = true;
                    i -=1;
			    }else{
                    //计算高度
                    var height = calcuteLineNum(DATA[i][2])*20+30;
                    //console.log(height);
                    if (height<sumheight) {
                        //剩余高度够用，直接生成
                        //console.log('textarea');
                        var a = createtextarea(textareanumber,DATA[i][2]);
                        //存储控件在DATA包中的索引值
                        a.value = i;
                        //更新DATA包中的索引值
                        DATA[i][0] = i;
                        //更新DATA包中该项的页码值
                        DATA[i][6] = pagenumber-1
                        //console.log(a.value);
                        newbackground.appendChild(a);
                        //更新计数
                        textareanumber++;
                        //更新剩余高度
                        sumheight -= height;
                        //console.log('剩余页面高度'+sumheight);
                        //渲染页面
                        mainbody.appendChild(newpage);
                        //document.body.appendChild(newpage);


                    } else{
                        //剩余高度不够
                        //console.log('textarea剩余数不足');
                        //计算剩余可存放数
                        var leftlinenum = Math.floor(sumheight/20);
                        //console.log('剩余行数'+leftlinenum);
                        //切割
                        //本页
                        var put = DATA[i][2].slice(0,leftlinenum*46);
                        //console.log(put);
                        //暂存区
                        textareaTemp[2] = DATA[i][2].slice(leftlinenum*46);
                        textareaTemp[4] = DATA[i][4];
                        textareaTemp[0] = i+1;
                        //console.log(textareaTemp);
                        //本页填充完毕并渲染
                        if (leftlinenum > 0) {
                            var a = createtextarea(textareanumber,put);
                            textareanumber++;
                            //存储控件在DATA包中的索引值
                            a.value = i;
                            //更新DATA包中的索引值
                            DATA[i][0] = i;
                            //更新DATA包中该项的页码值
                            DATA[i][6] = pagenumber-1
                            newbackground.appendChild(a);
                            mainbody.appendChild(newpage);
                            //document.body.appendChild(newpage);
                        }else{
                            console.log('本页无需填充');
                        }
                        sumheight = 0;
                        //console.log('剩余高度'+sumheight);
                        //剩余的存入数据包中
                        if (textareaTemp[2]=='') {
                            console.log('截取后无剩余');
                            //console.log(textareaTemp);
                        }
                        else{
                            DATA.splice(i+1,0,textareaTemp.concat());
                            textareaTemp = [0,1,'',0,'',0];//[顺序码，类型代码，内容，数据库id,章节码,章节名，页码]
                            //console.log(textareaTemp[2]);
                            //console.log(DATA);
                        }
                    }
                }
				break;
			case 2:
				//console.log('title');
				//判断是否是第一项
			    if(DATA[i][4]!= capter){
			        capter = DATA[i][4];
                    console.log('章节不同，需要加标题');
                    sumheight = 0;
                    singal = true;
                    i -=1;
			    }else{
                    //计算高度
                    var height = 35;//暂时默认所有的title均为一行
                    if (height<sumheight) {
                        var a = createtitle(titlenumber,DATA[i][2]);
                        titlenumber++;
                        //存储控件在DATA包中的索引值
                        a.value = i;
                        //更新DATA包中的索引值
                        DATA[i][0] = i;
                        //更新DATA包中该项的页码值
                        DATA[i][6] = pagenumber-1
                        newbackground.appendChild(a);

                        //更新剩余高度
                        sumheight -= height;
                        mainbody.appendChild(newpage);
                        //document.body.appendChild(newpage);
                    } else{
                        sumheight = 0;
                        //重来一次这个循环
                        i--;
                    }
                }
				break;
			case 3:
				//console.log('chart');
				//判断是否是第一项
			    if(DATA[i][4]!= capter){
			        capter = DATA[i][4];
                    console.log('章节不同，需要加标题');
                    sumheight = 0;
                    singal = true;
                    i -=1;
			    }else{
                    //计算高度
                    var height = 250;
                    if (height<sumheight) {
                        var a = createchart(chartnumber);
                        chartnumber++;
                        //存储控件在DATA包中的索引值
                        a.value = i;
                        //更新DATA包中的索引值
                        DATA[i][0] = i;
                        //更新DATA包中该项的页码值
                        DATA[i][6] = pagenumber-1
                        newbackground.appendChild(a);
                        //更新剩余高度
                        sumheight -= height;
                        mainbody.appendChild(newpage);
                        //document.body.appendChild(newpage);
                        //渲染图表（必须盒子渲染成功以后才可以渲染图表）
                        var chart = echarts.init(a);
                        //newchart.innerText = text;
                        chart.setOption(DATA[i][2]);
                    } else{
                        sumheight = 0;
                        //重来一次这个循环
                        i--;
                    }
                }

				break;
			case 4:
				//console.log('table');
				//判断是否是第一项
			    if(DATA[i][4]!= capter){
			        capter = DATA[i][4];
                    console.log('章节不同，需要加标题');
                    sumheight = 0;
                    singal = true;
                    i -=1;
			    }else{
                    //计算高度
                    var height =20+21+23*DATA[i][2].length;
                    //console.log(height);
                    if (height<sumheight) {
                        //剩余高度够用，直接生成
                        var a = createnewtable(tablenumber,DATA[i][2]);
                        //存储控件在DATA包中的索引值
                        a.value = i;
                        //更新DATA包中的索引值
                        DATA[i][0] = i;
                        //更新DATA包中该项的页码值
                        DATA[i][6] = pagenumber-1
                        newbackground.appendChild(a);
                        //更新计数
                        tablenumber++;
                        //更新剩余高度
                        sumheight -=height;
                        //渲染页面
                        mainbody.appendChild(newpage);
                        //document.body.appendChild(newpage);
                    } else{
                        //剩余高度不够
                        //计算剩余可存放数
                        var leftlinenum = Math.floor((sumheight-20-21)/23);
                        //console.log('剩余行数'+leftlinenum);
                        //切割
                        //本页
                        var put = DATA[i][2].slice(0,leftlinenum+1);
                        //console.log(put);
                        //暂存
                        tableTemp[2] = DATA[i][2].slice(leftlinenum+1);
                        tableTemp[0] = i+1;
                        tableTemp[4] = DATA[i][4];
                        //console.log(tableTemp);
                        //本页渲染
                        if (leftlinenum>0) {
                            var a = createnewtable(tablenumber,put);
                            //存储控件在DATA包中的索引值
                            a.value = i;
                            //更新DATA包中的索引值
                            DATA[i][0] = i;
                            //更新DATA包中该项的页码值
                             DATA[i][6] = pagenumber-1
                            newbackground.appendChild(a);
                            //更新计数
                            tablenumber++;
                            //渲染页面
                            mainbody.appendChild(newpage);
                            //document.body.appendChild(newpage);
                        }
                        sumheight = 0;
                        //剩余项加入数据包中
                        if (tabledata[2].length == 0) {
                            console.log('表格无剩余');
                        } else{
                            DATA.splice(i+1,0,tableTemp.concat());
                        }

                    }
                }
				break;
			default:
				console.log('无法识别数据');
				break;
		}
	}
	
	//2.重组数据包DATA
	// console.log(DATA);
	//console.log(zipData);
	zipData = DATA.concat();
	// console.log(zipData);
	//3.更新目录
	updateCatogory(zipData);
	//4.绑定双击事件
	binddbclick('title',titlenumber);
	binddbclick('textarea',textareanumber);
	
}

cnum = ["一","二","三","四","五","六","七","八","九","十"];
division_character = ["）",")","、","."];
character = ["（","(","）",")","、","."];

//zipData 0:顺序 1:类型代码  2:原文  3:数据库id  4:章节编号  5:章节名  6:页码
function updateCatogory(zipData) {
    var themeArray = new Array();
    var chapterOrParagraph = new Array();
    //将原数据按段切分
    var paragraphList = getParagraphsAndThemes(zipData);
    //获取一二级目录
    //themeArray[i][0]:内容  themeArray[i][1]:页码  themeArray[i][2]: 1：大标题 0：小标题
    themeArray = getCatagories(paragraphList);
    var catagoryTable = document.getElementById('catagoryOfReport4');
    var tbody = document.createElement('tbody');
    for(var i = 0;i < themeArray.length;i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.setAttribute('style','border-right: 1px solid #000000;');
        var div1 = document.createElement('div');
        div1.setAttribute('class','FTstyle1');
        div1.innerHTML = themeArray[i][1];
        td1.appendChild(div1);
        tr.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerHTML = themeArray[i][0];
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
    catagoryTable.appendChild(tbody);
    // console.log(themeArray);
}

//获取目录内容
//paragraphList 0:段落原文 1:章节编号 2:章节名 3:页码
//themeArray[i][0]:内容  themeArray[i][1]:页码  themeArray[i][2]: 1：大标题 0：小标题
function getCatagories(paragraphList) {
    var themeArray = new Array();
    var chapterNum = 0;
    var lastChapterNum = -1;

    for(var i = 0;i< paragraphList.length;i++){
        var aa = new Array();
        //根据章节号变化获取一级目录
        if(paragraphList[i][1] != lastChapterNum){
            aa = new Array();
            aa[0] = cnum[chapterNum]+"、"+paragraphList[i][2];
            aa[1] = paragraphList[i][3];
            aa[2] = 1;
            themeArray[themeArray.length] = aa;
            chapterNum = chapterNum + 1;
            lastChapterNum = paragraphList[i][1];
        }
        //判断是否存在某种格式的编号，是则返回二级目录，否则返回空
        var themeText = serialNum(paragraphList[i][0]);
        //记录二级标题
        if(themeText != ""){
            aa = new Array();
            aa[0] = themeText;
            aa[1] = paragraphList[i][3];
            aa[2] = 0;
            themeArray[themeArray.length] = aa;
        }
    }

    return themeArray;
}

//判断段落原文是否存在编号，存在编号则返回编号及主题
function serialNum(paragraphText) {
    var themeText = "";
    var serialNumber = "";
    //1：符号 2：汉字数字 3：其他
    var lastByteType = 0;
    for(var i = 0;i < paragraphText.length;i++){
        if(paragraphText[i] == "(" || paragraphText[i] == "（" || paragraphText[i] == "）" || paragraphText[i] == ")"){
            serialNumber = serialNumber + "0";
            lastByteType = 1;
        }
        for(var j = 0;j < cnum.length;j++){
            if(paragraphText[i] == cnum[j]){
                if(lastByteType != 2){
                    serialNumber = serialNumber + "1";
                    break;
                }
                lastByteType = 2;
            }
        }
        //得出（一）格式的标题
        if (serialNumber == "010"){
            themeText = paragraphText;
            break;
        }
    }

    return themeText;
}


//将原数据按段切分
//zipData 0:顺序 1:类型代码  2:原文  3:数据库id  4:章节编号  5:章节名  6:页码
function getParagraphsAndThemes(zipData) {
    var paragraphList = new Array();

    for(var i = 0;i < zipData.length;i++){
        //0:段落原文 1:章节编号 2:章节名 3:页码
        var paragraph = new Array();
        var paragraphText = ""
        for(var j = 0;j < zipData[i][2].length;j++){
            if(zipData[i][2][j] != "↵"){
                paragraphText = paragraphText + zipData[i][2][j];
            }else{
                paragraph[0] = zipData[i][2];
                paragraph[1] = zipData[i][4];
                paragraph[2] = zipData[i][5];
                paragraph[3] = zipData[i][6];
                paragraphList[paragraphList.length] = paragraph;
                paragraph = new Array();
                paragraphText = "";
            }
        }
        if(paragraphText != ""){
            paragraph[0] = zipData[i][2];
            paragraph[1] = zipData[i][4];
            paragraph[2] = zipData[i][5];
            paragraph[3] = zipData[i][6];
            paragraphList[paragraphList.length] = paragraph;
            paragraph = new Array();
            paragraphText = "";
        }
    }

    return paragraphList;
}