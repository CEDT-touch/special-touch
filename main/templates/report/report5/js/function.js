function createnewtable(tableid,tabledata){
	//生成新表 tableid:表格id；tabledata:表格内容
	var tablecontent = document.createElement('div');
	tablecontent.className = 'tableContent';
	tablecontent.id = 'table'+tableid;

	var newtable = document.createElement('table');
	
	if (tabledata[0].length == 1) {
		//若含有标题
		var newcaption = document.createElement('caption');
		newcaption.innerText = tabledata[0];
		newtable.appendChild(newcaption);
		
		// 生成表格内容主体
		for (a=1;a<tabledata.length;a++) {
			//表头
			if (a==1) {
				var temptr = document.createElement('tr');
				temptr.className = 'trFirst';
				for (i=0;i<tabledata[a].length;i++) {
					var temptd = document.createElement('td');
					temptd.innerText = tabledata[a][i];
					temptr.appendChild(temptd);
				}
				newtable.appendChild(temptr);
			} else{
			//表体
				var temptr = document.createElement('tr');
				var oddeven = a%2;
				var trclass = 'tr'+oddeven;
				//console.log(trclass);
				temptr.className = trclass;
				for (i=0;i<tabledata[a].length;i++) {
					var temptd = document.createElement('td');
					temptd.innerText = tabledata[a][i];
					temptr.appendChild(temptd);
				}
				newtable.appendChild(temptr);
			}
		}
	}
	else{
		//不含标题，即该数据为剩余数据
		// 生成表格内容主体
		for (a=0;a<tabledata.length;a++) {
			//表体
				var temptr = document.createElement('tr');
				var oddeven = a%2;
				var trclass = 'tr'+oddeven;
				//console.log(trclass);
				temptr.className = trclass;
				for (i=0;i<tabledata[a].length;i++) {
					var temptd = document.createElement('td');
					temptd.innerText = tabledata[a][i];
					temptr.appendChild(temptd);
				}
				newtable.appendChild(temptr);
			}
	}
	
	tablecontent.appendChild(newtable);

	return tablecontent;
}
//function creartnewtable end

function calcuteLineNum(text){
	var fontnumber = text.length;
	//计算行数
	var linenumber = Math.ceil(fontnumber/46);
	// console.log(fontnumber);
	// console.log(linenumber);
	return linenumber;
}
//function calcuteLineNum end

function createnewpage(pageid){
	//生成新页面，pageid：该页面的id值
	var main = document.createElement('div');
	main.className = 'main';
	main.id = 'page'+pageid;
	var background = document.createElement('div');
	background.className = 'background';
	background.id = 'background'+pageid;
	
	var odd = pageid%2;
	//console.log(odd);
	
	if (odd==1) {
		var pagetop = document.createElement('div');
		pagetop.className = 'pagetop';
		var toptitle = document.createElement('p');
		toptitle.className = 'toptitle';
		toptitle.innerText = '国内半导体产业盈利情况';
		pagetop.appendChild(toptitle);
		background.appendChild(pagetop);
	} else{
		var pagetop = document.createElement('div');
		pagetop.className = 'pagetopright';
		var year = document.createElement('div');
		year.className = 'year';
		year.innerText = '2018';
		var toptitle = document.createElement('p');
		toptitle.className = 'toptitleright';
		toptitle.innerText = '国内半导体产业盈利情况';
		pagetop.appendChild(year);
		pagetop.appendChild(toptitle);
		background.appendChild(pagetop);
	}
	
	
	
	
	main.appendChild(background);
	return main;
}
//funciton creatnewpage end

function createtextarea(areaid,text){
	//生成textarea。  areaid:该段落的id；text:内容
	var newtextarea = document.createElement('div');
	newtextarea.className = 'textarea';
	newtextarea.id = 'textarea'+areaid;
	newtextarea.innerHTML = text;
	//sumheight -=newtextarea.offsetHeight;
	//console.log(sumheight);
	return newtextarea;
}
//function createtextarea end

function createtitle(titleid,text){
	//生成title。  title:标题id；text:内容
	var newtitle = document.createElement('div');
	newtitle.className = 'title';
	var mytitleid = 'title'+titleid;
	newtitle.id = 'title'+titleid;
	newtitle.innerHTML = text;
	//sumheight -= newtitle.offsetHeight;
	//console.log(sumheight);
	return newtitle;
}
//function creattitle end

function createchart(chartid){
	//生成chart。   chartid:标题id
	var newchart = document.createElement('div');
	newchart.className = 'chart';
	newchart.id = 'chart'+chartid;
	//sumheight -= newtitle.offsetHeight;
	//console.log(sumheight);
	return newchart;
}
//function createchart end

function show(elementid){
	var login = document.getElementById('login');
	var over = document.getElementById('over');
	let theelement = document.getElementById(elementid);
	//console.log(theelement.value);
	let elementv = theelement.value;
	var loginbutton = document.getElementById('loginbutton');
	//控件
	//富文本
	var E = window.wangEditor;
	var editor = new E('#editor');
	// 或者 var editor = new E( document.getElementById('editor') )
	// editor.customConfig.zIndex = 100
	editor.customConfig.menus = [
	        //'head',
	        'bold',
	        'italic',
			//'fontSize',  // 字号
			'foreColor',  // 文字颜色
			'backColor',  // 背景颜色
	        'underline',
			'justify',  // 对齐方式
			'link',  // 插入链接
			'list',  // 列表
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
			'undo',  // 撤销
			'redo',  // 重复
	    ];
	editor.create();
	editor.txt.html(theelement.innerHTML);//注入内容
	
	//确定按钮
	var bu1 = document.createElement('div');
	bu1.className = 'button-6';
	bu1.id = 'button1';
	bu1.innerText = '确定';
	loginbutton.appendChild(bu1);
	bu1.addEventListener('click',function(){
		// console.log(zipData[elementv]);
		// console.log(editor.txt.text());
		zipData[elementv][2] = editor.txt.html();
		console.log('数据包更新成功');
		theelement.innerHTML = editor.txt.html();
		//console.log(zipData[elementv]);
		//console.log(zipData);
		hide(elementid);
	},false);
	//取消按钮
	var bu2 = document.createElement('div');
	bu2.className = 'button-8';
	bu2.id = 'button2';
	bu2.innerText = '取消';
	loginbutton.appendChild(bu2);
	loginbutton.appendChild(bu1);
	bu2.addEventListener('click',function(){
		hide(elementid);
	},false);
	//设置弹窗位置		
	var obj = document.getElementById(elementid); //这个元素就是目标元素，你可以用任何方式将它传入。		
	// //从目标元素开始向外遍历，累加top值
	//console.log(elementid);
	for (var t = obj.offsetTop; obj = obj.offsetParent;) {
		    t += obj.offsetTop;
			//console.log(t);
	}
	//console.log(t);
	login.style.top = t+'px';		
	//设置灰色背景长度
	over.style.height = t+900+'px';
	//显示弹窗
	login.style.display = "block";
	over.style.display = "block";
}//function show end

function hide(elementid){
	//console.log(elementid);
	var login = document.getElementById('login');
	var over = document.getElementById('over');
	var editor = document.getElementById('editor');
	var loginbutton = document.getElementById('loginbutton');
	//清空弹窗内容
	editor.innerHTML = '';
	loginbutton.innerHTML = '';
	//隐藏弹出层
	login.style.display = "none";
	over.style.display = "none";
}
//function hide() end

function binddbclick(elementname,elementnum){
	//为控件绑定双击事件
	for (var i=0;i<elementnum;i++) {
		//声明let变量以解决js闭包问题
		let strid = elementname+i;
		var element = document.getElementById(strid);
		//console.log(element.value);//测试控件的索引值是否传递过来了
		element.ondblclick=function(){
			//console.log(strid);
			show(strid);
		};
	}
}
//function binddbclick end

function refreshData(){
	//alert('将进行页面更新');
	var mainbody = document.getElementById('mainbody');
	//清空
	mainbody.innerHTML = '';
	//重载
	//maincreat(zipData.concat());
	console.log(zipData);
}
//function refreshData end

function getReport4Data(report_id){
    //联网获取数据库的数据
    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/getReport4Data/",
        data: {
            "report_id": report_id,//用于获取指定的报告数据
            //"report_type":"4"
        },
        success: function (result) {
            //console.log(result['data']);
            maincreat(result['data']);

        },
    });
}