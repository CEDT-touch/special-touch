function ShowElement(element) {
    var oldhtml = element.innerHTML;
    //创建新的textarea元素
    var newobj = document.createElement('textarea');
    //为新增元素添加类型
    newobj.type = 'text';
    //为新增元素添加value值
    newobj.value = oldhtml;
    //为新增元素添加光标离开事件
    newobj.onblur = function() {
        //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
        element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
        //当触发时设置父节点的双击事件为ShowElement
        element.setAttribute("ondblclick", "ShowElement(this);");
    }
    //设置该标签的子节点为空
    element.innerHTML = '';
    //添加该标签的子节点，input对象
    element.appendChild(newobj);
    //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
    newobj.setSelectionRange(0, oldhtml.length);
    //设置获得光标
    newobj.focus();

    //设置父节点的双击事件为空
    newobj.parentNode.setAttribute("ondblclick", "");

}
////弹出层控制
    function show(chartType)
    {
        var login = document.getElementById('login');
        var over = document.getElementById('over');
		////动态生成子节点
		//取消按钮
		var close = document.createElement('a');
		close.setAttribute('href','javascript:hide(1)');
		close.setAttribute('style','float: right;padding-right: 1%;')
		close.innerHTML = '取消';
		login.appendChild(close);
		//识别图表类型并显示
		switch (chartType){
			case 'chart1':				
				//第一个div节点
				var div1 = document.createElement('div');
				div1.setAttribute('class','attribute');
				var p1 = document.createElement('p');
				p1.setAttribute('style','display: inline-block;');
				p1.innerHTML = '标题：';
				var input1 = document.createElement('input');
				input1.setAttribute('type','text');
				input1.setAttribute('style','display: inline-block;');
				input1.setAttribute('id','title');
				input1.setAttribute('value','title');
				div1.appendChild(p1);
				div1.appendChild(input1);		
				login.appendChild(div1);
				//复制第一个div节点并生成第二个div节点
				var clonDiv = div1.cloneNode(true);
				clonDiv.children[0].innerHTML = '大小：';
				clonDiv.children[1].setAttribute('value','55%');
				clonDiv.children[1].setAttribute('id','radius');
				login.appendChild(clonDiv);
				//数据设置
				//localStorage.setItem('data1',);
				var data = option1['series'][0]['data'];
				//console.log(data);//数据
				//console.log(data[0]['value']);
				//创建表格
				var daDiv = document.createElement('div');
				daDiv.setAttribute('class','attribute');
				
				var p3 = document.createElement('p');
				p3.setAttribute('style','display: inline-block;');
				p3.innerHTML = '数据内容：';
				
				var table = document.createElement('table');
				table.setAttribute('border','1');
				table.setAttribute('bordercolor','green');
				table.setAttribute('id','table1');
				
				var tr1 = document.createElement('tr');
				var td = document.createElement('td');
				var myInput = document.createElement('input');
				for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempTd = td.cloneNode();
					var tempIn = myInput.cloneNode();
					tempIn.id = 'inputOne'+dataNumber;
					tempIn.value = data[dataNumber]['name'];
					tempTd.appendChild(tempIn);
					tr1.appendChild(tempTd);
				}
				
				tr2 = tr1.cloneNode();
				for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempTd = td.cloneNode();
					var tempIn = myInput.cloneNode();
					tempIn.id = 'inputTwo'+dataNumber;
					tempIn.value = data[dataNumber]['value'];
					tempTd.appendChild(tempIn);
					tr2.appendChild(tempTd);
				}
				
				var fileUpload = document.createElement('button');
				fileUpload.innerHTML = '上传excel文件';
				
				var selectData = document.createElement('button');
				selectData.innerHTML = '从数据库选择';
				selectData.setAttribute('id','selectData');
				
				var refreshData = document.createElement('button');
				refreshData.innerHTML = '刷新数据';
				refreshData.setAttribute('id','refreshData');
				refreshData.setAttribute('style','margin-left: 10%;')
								
				table.appendChild(tr1);
				table.appendChild(tr2);
				daDiv.appendChild(p3);
				daDiv.appendChild(table);
				daDiv.appendChild(fileUpload);
				daDiv.appendChild(selectData);
				daDiv.appendChild(refreshData);
				login.appendChild(daDiv);
				// 页面跳转，选择数据库数据
				selectData.setAttribute('onclick','FselectData()');
				refreshData.setAttribute('onclick','getTableData()');
				//向控件传参
				document.getElementById('title').value=option1['title']['text'];
				document.getElementById('radius').value=option1['series'][0]['radius'];
				//确定按钮
				var mybutton = document.createElement('button');
				mybutton.setAttribute('type','button');
				mybutton.setAttribute('onclick','hide("'+chartType+'")');
				mybutton.innerHTML = '确定';
				login.appendChild(mybutton);
				
				break;
			
			case 'chart2':
				//第一个div节点
				var div1 = document.createElement('div');
				div1.setAttribute('class','attribute');
				var p1 = document.createElement('p');
				p1.setAttribute('style','display: inline-block;');
				p1.innerHTML = '标题：';
				var input1 = document.createElement('input');
				input1.setAttribute('type','text');
				input1.setAttribute('style','display: inline-block;');
				input1.setAttribute('id','title');
				input1.setAttribute('value','title');
				div1.appendChild(p1);
				div1.appendChild(input1);		
				login.appendChild(div1);
				//向控件传参
				document.getElementById('title').value=option2['title']['text'];
				//确定按钮
				var mybutton = document.createElement('button');
				mybutton.setAttribute('type','button');
				mybutton.setAttribute('onclick','hide("'+chartType+'")');
				mybutton.innerHTML = '确定';
				login.appendChild(mybutton);
				break;
			default:
				//文字
				var div1 = document.createElement('div');
				div1.setAttribute('class','attribute');
				var p1 = document.createElement('p');
				p1.setAttribute('style','display: inline-block;');
				p1.innerHTML = '文本框内容：';
				var myTextarea = document.createElement('textarea');
				//传值
				var a = document.getElementById(chartType).innerText;
				myTextarea.value = a;
				myTextarea.setAttribute('id','textarea1');
				div1.appendChild(myTextarea);
				login.appendChild(div1);
				//确定按钮
				var mybutton = document.createElement('button');
				mybutton.setAttribute('type','button');
				mybutton.setAttribute('onclick','hide("'+chartType+'")');
				mybutton.innerHTML = '确定';
				login.appendChild(mybutton);
				break;
		}
		////显示弹窗	
		//设置弹窗位置		
		var obj = document.getElementById(chartType); //这个元素就是目标元素，你可以用任何方式将它传入。
		// var w = obj.offsetWidth, h = obj.offsetHeight;		
		// //从目标元素开始向外遍历，累加top和left值
		for (var t = obj.offsetTop; obj = obj.offsetParent;) {
		    	t += obj.offsetTop;
				//console.log(t);
		}
		console.log(t);
		login.style.top = t+'px';		
		//设置灰色背景长度
		over.style.height = t+900+'px';
        login.style.display = "block";
        over.style.display = "block";
    }
    function hide(code)
    {
        var login = document.getElementById('login');
        var over = document.getElementById('over');
		switch (code){
			case 1:
				////取消设置
				//清空弹窗内容
				login.innerHTML = '';
				//隐藏弹出层
				login.style.display = "none";
				over.style.display = "none";
				break;
			case 'chart1':
				//数据项个数
				var num = document.getElementById('table1');
				var num = num.rows.item(0).cells.length;
				//封装数据
				var dataChange = [];
				for (i=0;i<num;i++) {
					var tempValue = document.getElementById('inputTwo'+i).value;
					var tempName = document.getElementById('inputOne'+i).value;
					dataChange[i] = {value:tempValue, name:tempName};
				}
								
				//console.log(dataChange);
				//重写组件参数
				var titleChange = document.getElementById('title').value;
				option1['title']['text'] = titleChange;
				option1['series'][0]['radius'] = document.getElementById('radius').value;
				option1['series'][0]['data'] = dataChange;
				//console.log(option1);
				chartsArray[0].setOption(option1);
				console.log('图表1属性更改成功！');
				break;
			case 'chart2':
				console.log(code);
				var titleChange = document.getElementById('title').value;
				option2['title']['text'] = titleChange;
				console.log(option2);
				chartsArray[1].setOption(option2);
				console.log('图表2属性更改成功！');
				break;
			default:
				//文字
				document.getElementById(code).innerHTML = document.getElementById('textarea1').value;
				//清空弹窗内容
				login.innerHTML = '';
				//隐藏弹出层
				login.style.display = "none";
				over.style.display = "none";				
				break;
		}
		
		//清空弹窗内容
		login.innerHTML = '';
		//隐藏弹出层
		login.style.display = "none";
		over.style.display = "none";
    }

function getTableData(){
    //联网获取数据库的数据
    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/getData/",
        data: {
            "date": localStorage.getItem('data1'),//用于获取不同时间的数据
        },
        success: function (result) {
            //console.log(option1);
            //console.log(result['hhh']);
            option1 = result['hhh'];
            //更新图表参数
            reset(option1);
        },
    });
}

function reset(option){
    //更新图表参数
    var data = option['series'][0]['data'];
    for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					//var tempTd = td.cloneNode();
					//var tempIn = myInput.cloneNode();
					//tempIn.id = 'inputOne'+dataNumber;
					var tempIn = document.getElementById('inputOne'+dataNumber);
					tempIn.value = data[dataNumber]['name'];
				    }
    for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempIn = document.getElementById('inputTwo'+dataNumber);
					tempIn.value = data[dataNumber]['value'];
					}
}				