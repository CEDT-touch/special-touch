//实例化目录
getCatagoryAndChartDataOfReport2();
// show_catagories('123');
//getChartDataOfReport2();

function updateAllChartDataOfReport2(catagoryList, chartDataList) {
	//更新每一个部分的大标题
    updateTitleOfEachPartOfReport2(catagoryList);
    //更新图表数据
	lastCatagoryNum = 0;
	lastChartNum = 0;
	dataOfEachChart = [];
	for(var i = 0;i < 63; i++){
		//console.log(i);
		if(i == 0){
			lastCatagoryNum = chartDataList[i][1];
			dataOfEachChart.push(chartDataList[i]);
			lastChartNum = chartDataList[i][2];
		}else{
			//上一个数与这一个数不在同一catagory部份
			if(chartDataList[i][1] != lastCatagoryNum){
				lastCatagoryNum = chartDataList[i][1];
				//更新图表数据
			    //console.log(dataOfEachChart);
			    //console.log(i);
				updateDataOfEachChartOfReport2(dataOfEachChart);
			    //更新dataOfEachChart数组，即，将新一个图表的数据存到dataOfEachChart中
			    dataOfEachChart = [];
			    dataOfEachChart.push(chartDataList[i]);
			    lastChartNum = chartDataList[i][2];
			}else{
				//上一个数与这一个数不是同一个图表的
			    if(lastChartNum != chartDataList[i][2]){
			    	lastChartNum = chartDataList[i][2];
				    //更新具体的图表数据
				    //console.log(dataOfEachChart);
				    //console.log(i);
					updateDataOfEachChartOfReport2(dataOfEachChart);
				    //更新dataOfEachChart数组，即，将新一个图表的数据存到dataOfEachChart中
				    dataOfEachChart = [];
				    dataOfEachChart.push(chartDataList[i]);
				//上一个数与这一个数是同一个图表的
			    }else{
			    	dataOfEachChart.push(chartDataList[i]);
			    }
			}
		}
	}
}

//更新报告2每个图表的数据
function updateDataOfEachChartOfReport2(data) {
	//判断是哪个catagory的
	switch (data[0][1]) {
		case 1:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart1', data);
					reLocationOfEachChart('chart1', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart2', data);
					reLocationOfEachChart('chart2', data[0][9], data[0][10]);
					break;
				default:
					break;
			}
			break;
        case 2:
            switch (data[0][2]) {
                case 'e1':
                    refreshReport2ChartData('chart3', data);
                    reLocationOfEachChart('chart3', data[0][9], data[0][10]);
                    break;
                case 'e2':
					refreshReport2ChartData('chart4', data);
					reLocationOfEachChart('chart4', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart5', data);
					reLocationOfEachChart('chart5', data[0][9], data[0][10]);
					break;
				case 'e4':
					refreshReport2ChartData('chart6', data);
					reLocationOfEachChart('chart6', data[0][9], data[0][10]);
					break;
				//重点工业指标
				case 't1':
					refreshReport2ChartData('chart6', data);
					break;
				default:
					break;
            }
            break;
        case 3:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart7', data);
					reLocationOfEachChart('chart7', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart8', data);
					reLocationOfEachChart('chart8', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart9', data);
					reLocationOfEachChart('chart9', data[0][9], data[0][10]);
					break;
				//全国固定资产投资
				case 't1':
					refreshReport2ChartData('t1', data);
					break;
				default:
					break;
			}
			break;
		case 4:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart10', data);
					reLocationOfEachChart('chart10', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart11', data);
					reLocationOfEachChart('chart11', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart13', data);
					reLocationOfEachChart('chart13', data[0][9], data[0][10]);
					break;
				case 't1':
					refreshReport2ChartData('chart12', data);
					reLocationOfEachChart('chart12', data[0][9], data[0][10]);
					break;
				//重点价格指数
				case 't2':
					refreshReport2ChartData('chart12', data);
					break;
				case 'e4':
					refreshReport2ChartData('chart15', data);
					reLocationOfEachChart('chart15', data[0][9], data[0][10]);
					break;
				case 'e5':
					refreshReport2ChartData('chart14', data);
					reLocationOfEachChart('chart14', data[0][9], data[0][10]);
					break;
				//重新在refreshReport2ChartData函数中写
				case 'e6':
					refreshReport2ChartData('chart16', data);
					reLocationOfEachChart('chart16', data[0][9], data[0][10]);
					break;
				//城镇居民可支配收入
				case 't3':
					refreshReport2ChartData('chart16', data);
					break;
				default:
					break;
			}
			break;
		case 5:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart17', data);
					reLocationOfEachChart('chart17', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart18', data);
					reLocationOfEachChart('chart18', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart19', data);
					reLocationOfEachChart('chart19', data[0][9], data[0][10]);
					break;
				case 'e4':
					refreshReport2ChartData('chart20', data);
					reLocationOfEachChart('chart20', data[0][9], data[0][10]);
					break;
				case 'e5':
					refreshReport2ChartData('chart21', data);
					reLocationOfEachChart('chart21', data[0][9], data[0][10]);
					break;
				case 'e6':
					refreshReport2ChartData('chart22', data);
					reLocationOfEachChart('chart22', data[0][9], data[0][10]);
					break;
				case 'e7':
					refreshReport2ChartData('chart23', data);
					reLocationOfEachChart('chart23', data[0][9], data[0][10]);
					break;
				case 'e8':
					refreshReport2ChartData('chart24', data);
					reLocationOfEachChart('chart24', data[0][9], data[0][10]);
					break;
				case 'e9':
					refreshReport2ChartData('chart25', data);
					reLocationOfEachChart('chart25', data[0][9], data[0][10]);
					break;
				case 'e10':
					refreshReport2ChartData('chart26', data);
					reLocationOfEachChart('chart26', data[0][9], data[0][10]);
					break;
				case 'e11':
					refreshReport2ChartData('chart27', data);
					reLocationOfEachChart('chart27', data[0][9], data[0][10]);
					break;
				case 'e12':
					refreshReport2ChartData('chart28', data);
					reLocationOfEachChart('chart28', data[0][9], data[0][10]);
					break;
				case 'e13':
					refreshReport2ChartData('chart29', data);
					reLocationOfEachChart('chart29', data[0][9], data[0][10]);
					break;
				case 'e14':
					refreshReport2ChartData('chart30', data);
					reLocationOfEachChart('chart30', data[0][9], data[0][10]);
					break;
				case 'e15':
					refreshReport2ChartData('chart31', data);
					reLocationOfEachChart('chart31', data[0][9], data[0][10]);
					break;
				case 'e16':
					refreshReport2ChartData('chart32', data);
					reLocationOfEachChart('chart32', data[0][9], data[0][10]);
					break;
				case 'e17':
					refreshReport2ChartData('chart33', data);
					reLocationOfEachChart('chart33', data[0][9], data[0][10]);
					break;
				case 'e18':
					refreshReport2ChartData('chart34', data);
					reLocationOfEachChart('chart34', data[0][9], data[0][10]);
					break;
				case 'e19':
					refreshReport2ChartData('chart35', data);
					reLocationOfEachChart('chart35', data[0][9], data[0][10]);
					break;
				case 'e20':
					refreshReport2ChartData('chart36', data);
					reLocationOfEachChart('chart36', data[0][9], data[0][10]);
					break;
				case 'e21':
					refreshReport2ChartData('chart37', data);
					reLocationOfEachChart('chart37', data[0][9], data[0][10]);
					break;
				case 'e22':
					refreshReport2ChartData('chart38', data);
					reLocationOfEachChart('chart38', data[0][9], data[0][10]);
					break;
				//进出口顺差增速
				case 't1':
					refreshReport2ChartData('chart34', data);
					break;
				//进口商品方面，消费品。。。。
				case 't2':
					refreshReport2ChartData('chart34', data);
					break;
				//2019年一季度，一般贸易进出口。。。
				case 't3':
					refreshReport2ChartData('chart34', data);
					break;
				default:
					break;
			}
			break;
		case 6:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart40', data);
					reLocationOfEachChart('chart40', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart39', data);
					reLocationOfEachChart('chart39', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart41', data);
					reLocationOfEachChart('chart41', data[0][9], data[0][10]);
					break;
				default:
					break;
			}
			break;
		case 7:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart43', data);
					reLocationOfEachChart('chart43', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart44', data);
					reLocationOfEachChart('chart44', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart45', data);
					reLocationOfEachChart('chart45', data[0][9], data[0][10]);
					break;
				case 'e4':
					refreshReport2ChartData('chart46', data);
					reLocationOfEachChart('chart46', data[0][9], data[0][10]);
					break;
				case 'e5':
					refreshReport2ChartData('chart42', data);
					reLocationOfEachChart('chart42', data[0][9], data[0][10]);
					break;
				//一季度，第三产业发展稳中有进。。。
				case 't1':
					refreshReport2ChartData('chart42', data);
					break;
				//2019一季度通信业运行情况
				case 't2':
					refreshReport2ChartData('chart42', data);
					break;
				default:
					break;
			}
			break;
		case 8:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart47', data);
					reLocationOfEachChart('chart47', data[0][9], data[0][10]);
					break;
				//全国商品房消费面积。。。。
				case 't1':
					refreshReport2ChartData('chart42', data);
					break;
				default:
					break;
			}
			break;
		case 9:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart48', data);
					reLocationOfEachChart('chart48', data[0][9], data[0][10]);
					break;
				//城镇新增就业人数。。。
				case 't1':
					refreshReport2ChartData('chart42', data);
					break;
				//全国城镇登记失业率。。。
				case 't2':
					refreshReport2ChartData('chart42', data);
					break;
				default:
					break;
			}
			break;
		case 10:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart49', data);
					reLocationOfEachChart('chart49', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart50', data);
					reLocationOfEachChart('chart50', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart51', data);
					reLocationOfEachChart('chart51', data[0][9], data[0][10]);
					break;
				case 'e4':
					refreshReport2ChartData('chart53', data);
					reLocationOfEachChart('chart53', data[0][9], data[0][10]);
					break;
				case 'e5':
					refreshReport2ChartData('chart52', data);
					reLocationOfEachChart('chart52', data[0][9], data[0][10]);
					break;
				case 'e6':
					refreshReport2ChartData('chart54', data);
					reLocationOfEachChart('chart54', data[0][9], data[0][10]);
					break;
				//城镇新增就业人数。。。
				case 't1':
					refreshReport2ChartData('chart42', data);
					break;
				//全国城镇登记失业率。。。
				case 't2':
					refreshReport2ChartData('chart42', data);
					break;
				//第三产业和居民生活用电。。。
				case 't3':
					refreshReport2ChartData('chart42', data);
					break;
				//全国市场化交易电量。。。
				case 't4':
					refreshReport2ChartData('chart42', data);
					break;
				default:
					break;
			}
			break;
		case 11:
			switch (data[0][2]) {
				case 'e1':
					refreshReport2ChartData('chart55', data);
					reLocationOfEachChart('chart55', data[0][9], data[0][10]);
					break;
				case 'e2':
					refreshReport2ChartData('chart57', data);
					reLocationOfEachChart('chart57', data[0][9], data[0][10]);
					break;
				case 'e3':
					refreshReport2ChartData('chart56', data);
					reLocationOfEachChart('chart56', data[0][9], data[0][10]);
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}
}


//每次生成新报告时，更新每一个部分的大标题
function updateTitleOfEachPartOfReport2(catagoryList) {
	tcount = ""
	for (i = 0; i < catagoryList.length; i++){
    	//更新每一个部分的大标题
    	var titleOfEachCatagory;
    	if (i == 0){
    		tcount = "一、";
    		titleOfEachCatagory = document.getElementById('title1');
		}
    	else if (i == 1){
    		tcount = "二、";
    		titleOfEachCatagory = document.getElementById('title3');
		}else if (i == 2){
    		tcount = "三、";
    		titleOfEachCatagory = document.getElementById('title6');
		}else if (i == 3){
    		tcount = "四、";
    		titleOfEachCatagory = document.getElementById('title8');
		}else if (i == 4){
    		tcount = "五、";
    		titleOfEachCatagory = document.getElementById('title16');
		}else if (i == 5){
    		tcount = "六、";
    		titleOfEachCatagory = document.getElementById('title27');
		}else if (i == 6){
    		tcount = "七、";
    		titleOfEachCatagory = document.getElementById('title29');
		}else if (i == 7){
    		tcount = "八、";
    		titleOfEachCatagory = document.getElementById('title32');
		}else if (i == 8){
    		tcount = "九、";
    		titleOfEachCatagory = document.getElementById('title33');
		}else if (i == 9){
    		tcount = "十、";
    		titleOfEachCatagory = document.getElementById('title37');
		}else if (i == 10){
    		tcount = "十一、";
    		titleOfEachCatagory = document.getElementById('title43');
		}
    	titleOfEachCatagory.innerText = tcount + catagoryList[i][3];
	}
}


function reLocationOfEachChart(chartType, top, left){
    if(top != null && left != null){
        ////设置图表的位置
        var tempChart = document.getElementById(chartType);
        tempChart.setAttribute('style','top:'+ top + 'px;' + 'left:' + left + 'px');
        console.log(chartType+'top:'+top+' left:'+left);
    }
}


function refreshReport2ChartData(chartType, data) {
    switch(chartType){
        case 'chart1':
        case 'chart9':
        case 'chart10':
        case 'chart11':
        case 'chart12':
        case 'chart17':
        case 'chart21':
        case 'chart24':
        case 'chart27':
        case 'chart30':
        case 'chart36':
        case 'chart37':
        case 'chart39':
        case 'chart43':
        case 'chart44':
        case 'chart45':
        case 'chart46':
        case 'chart53':
        case 'chart54':
        case 'chart57':
            //封装数据
			//alert(data);
            var dataChange = [];
            for (var i = 0; i < data.length; i++) {
                var tempValue = data[i][6];
                var tempName = data[i][4];
                dataChange[i] = {value:tempValue, name:tempName};
            }
            var titleChange = data[0][12];
            if(titleChange == null){
                titleChange = "";
            }
            switch (chartType) {
                case 'chart1':
                    option1['title']['text'] = titleChange;
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option1['series'][0]['radius'] = radius;
                    }
                    //数据
                    option1['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[0].setOption(option1);
                    break;
                case 'chart9':
                    option9['title']['text'] = titleChange;
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option9['series'][0]['radius'] = radius;
                    }
                    //数据
                    option9['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[8].setOption(option9);
                    break;
                case 'chart10':
                    option10['title']['text'] = titleChange;
                    //半径
					if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option10['series'][0]['radius'] = radius;
                    }
                    //数据
                    option10['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[9].setOption(option10);
                    break;
                case 'chart11':
                    option11['title']['text'] = titleChange;
                    //半径
					if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option11['series'][0]['radius'] = radius;
                    }
                    //数据
                    option11['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[10].setOption(option11);
                    break;
                case 'chart12':
                    option12['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option12['series'][0]['radius'] = radius;
                    }
                    //数据
                    option12['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[11].setOption(option12);
                    break;
                case 'chart17':
                    option17['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option17['series'][0]['radius'] = radius;
                    }
                    //数据
                    option17['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[16].setOption(option17);
                    break;
                case 'chart21':
                    option21['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option21['series'][0]['radius'] = radius;
                    }
                    //数据
                    option21['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[20].setOption(option21);
                    break;
                case 'chart24':
                    option24['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option24['series'][0]['radius'] = radius;
                    }
                    //数据
                    option24['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[23].setOption(option24);
                    break;
                case 'chart27':
                    option27['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option27['series'][0]['radius'] = radius;
                    }
                    //数据
                    option27['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[26].setOption(option27);
                    break;
                case 'chart30':
                    option30['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option30['series'][0]['radius'] = radius;
                    }
                    //数据
                    option30['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[29].setOption(option30);
                    break;
                case 'chart36':
                    option36['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option36['series'][0]['radius'] = radius;
                    }
                    //数据
                    option36['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[35].setOption(option36);
                    break;
                case 'chart37':
                    option37['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option37['series'][0]['radius'] = radius;
                    }
                    //数据
                    option37['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[36].setOption(option37);
                    break;
                case 'chart39':
                    option39['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option39['series'][0]['radius'] = radius;
                    }
                    //数据
                    option39['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[38].setOption(option39);
                    break;
                case 'chart43':
                    option43['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option43['series'][0]['radius'] = radius;
                    }
                    //数据
                    option43['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[42].setOption(option43);
                    break;
				case 'chart44':
                    option44['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option44['series'][0]['radius'] = radius;
                    }
                    //数据
                    option44['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[43].setOption(option44);
                    break;
                case 'chart45':
                    option45['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option45['series'][0]['radius'] = radius;
                    }
                    //数据
                    option45['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[44].setOption(option45);
                    break;
                case 'chart46':
                    option46['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option46['series'][0]['radius'] = radius;
                    }
                    //数据
                    option46['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[45].setOption(option46);
                    break;
                case 'chart53':
                    option53['title']['text'] = titleChange;
                    //半径
                   if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option53['series'][0]['radius'] = radius;
                    }
                    //数据
                    option53['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[52].setOption(option53);
                    break;
                case 'chart54':
                    option54['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option54['series'][0]['radius'] = radius;
                    }
                    //数据
                    option54['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[53].setOption(option54);
                    break;
                case 'chart57':
                    option57['title']['text'] = titleChange;
                    //半径
                    if(data[0][11] != null){
                    	var radius = data[0][11]+'%';
                    	//半径
                        option57['series'][0]['radius'] = radius;
                    }
                    //数据
                    option57['series'][0]['data'] = dataChange;
                    //console.log(option1);
                    //重新渲染图表
                    chartsArray[56].setOption(option57);
                    break;
            }
            break;
        case 'chart2':
        case 'chart3':
		case 'chart4':
		case 'chart5':
		case 'chart6':
		case 'chart7':
		case 'chart8':
		case 'chart13':
		case 'chart14':
		case 'chart15':
		case 'chart16':
		case 'chart18':
		case 'chart19':
		case 'chart20':
		case 'chart22':
		case 'chart23':
		case 'chart25':
		case 'chart26':
		case 'chart28':
		case 'chart29':
		case 'chart31':
		case 'chart32':
		case 'chart33':
		case 'chart34':
		case 'chart35':
		case 'chart38':
		case 'chart40':
		case 'chart41':
		case 'chart42':
		case 'chart47':
		case 'chart48':
		case 'chart49':
		case 'chart50':
		case 'chart51':
		case 'chart52':
		case 'chart55':
		case 'chart56':
            //封装数据
            var titleChange = data[0][12];
            if(titleChange == null){
                titleChange = "";
            }
            var seriesData = [];
            var numData = []
            for (var i = 0; i < data.length; i++) {
                var tempValue = data[i][6];
                var tempName = data[i][4];
                seriesData[i] = tempName;
                numData[i] = tempValue;
            }
            switch (chartType) {
                case 'chart2':
                    option2['title']['text'] = titleChange;
                    option2['series'][0]['data'] = numData;
                    option2['xAxis']['data'] = seriesData;
                    chartsArray[1].setOption(option2);
                    break;
                case 'chart3':
                    option3['title']['text'] = titleChange;
                    option3['series'][0]['data'] = numData;
                    option3['yAxis']['data'] = seriesData;
                    chartsArray[2].setOption(option3);
                    break;
                case 'chart4':
                    option4['title']['text'] = titleChange;
                    option4['series'][0]['data'] = numData;
                    option4['yAxis']['data'] = seriesData;
                    chartsArray[3].setOption(option4);
                    break;
                case 'chart5':
                    option5['title']['text'] = titleChange;
                    option5['series'][0]['data'] = numData;
                    option5['xAxis']['data'] = seriesData;
                    chartsArray[4].setOption(option5);
                    break;
                case 'chart6':
                    option6['title']['text'] = titleChange;
                    option6['series'][0]['data'] = numData;
                    option6['xAxis']['data'] = seriesData;
                    chartsArray[5].setOption(option6);
                    break;
                case 'chart7':
                    option7['title']['text'] = titleChange;
                    option7['series'][0]['data'] = numData;
                    option7['yAxis']['data'] = seriesData;
                    chartsArray[6].setOption(option7);
                    break;
                case 'chart8':
                    option8['title']['text'] = titleChange;
                    option8['series'][0]['data'] = numData;
                    option8['yAxis']['data'] = seriesData;
                    chartsArray[7].setOption(option8);
                    break;
                case 'chart13':
                    option13['title']['text'] = titleChange;
                    option13['series'][0]['data'] = numData;
                    option13['yAxis']['data'] = seriesData;
                    chartsArray[12].setOption(option13);
                    break;
                case 'chart14':
                    option14['title']['text'] = titleChange;
                    option14['series'][0]['data'] = numData;
                    option14['xAxis']['data'] = seriesData;
                    chartsArray[13].setOption(option14);
                    break;
                case 'chart15':
                    option15['title']['text'] = titleChange;
                    option15['series'][0]['data'] = numData;
                    option15['xAxis']['data'] = seriesData;
                    chartsArray[14].setOption(option15);
                    break;
                case 'chart16':
                    option16['title']['text'] = titleChange;
                    option16['series'][0]['data'] = numData;
                    option16['xAxis']['data'] = seriesData;
                    chartsArray[15].setOption(option16);
                    break;
                case 'chart18':
                    option18['title']['text'] = titleChange;
                    option18['series'][0]['data'] = numData;
                    option18['xAxis']['data'] = seriesData;
                    chartsArray[17].setOption(option18);
                    break;
                case 'chart19':
                    option19['title']['text'] = titleChange;
                    option19['series'][0]['data'] = numData;
                    option19['xAxis']['data'] = seriesData;
                    chartsArray[18].setOption(option19);
                    break;
                case 'chart20':
                    option20['title']['text'] = titleChange;
                    option20['series'][0]['data'] = numData;
                    option20['xAxis']['data'] = seriesData;
                    chartsArray[19].setOption(option20);
                    break;
                case 'chart22':
                    option22['title']['text'] = titleChange;
                    option22['series'][0]['data'] = numData;
                    option22['xAxis']['data'] = seriesData;
                    chartsArray[21].setOption(option22);
                    break;
                case 'chart23':
                    option23['title']['text'] = titleChange;
                    option23['series'][0]['data'] = numData;
                    option23['xAxis']['data'] = seriesData;
                    chartsArray[22].setOption(option23);
                    break;
                case 'chart25':
                    option25['title']['text'] = titleChange;
                    option25['series'][0]['data'] = numData;
                    option26['xAxis']['data'] = seriesData;
                    chartsArray[24].setOption(option25);
                    break;
                case 'chart26':
                    option26['title']['text'] = titleChange;
                    option26['series'][0]['data'] = numData;
                    option26['xAxis']['data'] = seriesData;
                    chartsArray[25].setOption(option26);
                    break;
                case 'chart28':
                    option28['title']['text'] = titleChange;
                    option28['series'][0]['data'] = numData;
                    option28['xAxis']['data'] = seriesData;
                    chartsArray[27].setOption(option28);
                    break;
                case 'chart29':
                    option29['title']['text'] = titleChange;
                    option29['series'][0]['data'] = numData;
                    option29['yAxis']['data'] = seriesData;
                    chartsArray[28].setOption(option29);
                    break;
                case 'chart31':
                    option31['title']['text'] = titleChange;
                    option31['series'][0]['data'] = numData;
                    option31['xAxis']['data'] = seriesData;
                    chartsArray[30].setOption(option31);
                    break;
                case 'chart32':
                    option32['title']['text'] = titleChange;
                    option32['series'][0]['data'] = numData;
                    option32['xAxis']['data'] = seriesData;
                    chartsArray[31].setOption(option32);
                    break;
                case 'chart33':
                    option33['title']['text'] = titleChange;
                    option33['series'][0]['data'] = numData;
                    option33['xAxis']['data'] = seriesData;
                    chartsArray[32].setOption(option33);
                    break;
                case 'chart34':
                    option34['title']['text'] = titleChange;
                    option34['series'][0]['data'] = numData;
                    option34['yAxis']['data'] = seriesData;
                    chartsArray[33].setOption(option34);
                    break;
                case 'chart35':
                    option35['title']['text'] = titleChange;
                    option35['series'][0]['data'] = numData;
                    option35['xAxis']['data'] = seriesData;
                    chartsArray[34].setOption(option35);
                    break;
                case 'chart38':
                    option38['title']['text'] = titleChange;
                    option38['series'][0]['data'] = numData;
                    option38['xAxis']['data'] = seriesData;
                    chartsArray[37].setOption(option38);
                    break;
                case 'chart40':
                    option40['title']['text'] = titleChange;
                    option40['series'][0]['data'] = numData;
                    option40['xAxis']['data'] = seriesData;
                    chartsArray[39].setOption(option40);
                    break;
                case 'chart41':
                    option41['title']['text'] = titleChange;
                    option41['series'][0]['data'] = numData;
                    option41['xAxis']['data'] = seriesData;
                    chartsArray[40].setOption(option41);
                    break;
                case 'chart42':
                    option42['title']['text'] = titleChange;
                    option42['series'][0]['data'] = numData;
                    option42['xAxis']['data'] = seriesData;
                    chartsArray[41].setOption(option42);
                    break;
                case 'chart47':
                    option47['title']['text'] = titleChange;
                    option47['series'][0]['data'] = numData;
                    option47['xAxis']['data'] = seriesData;
                    chartsArray[46].setOption(option47);
                    break;
                case 'chart48':
                    option48['title']['text'] = titleChange;
                    option48['series'][0]['data'] = numData;
                    option48['xAxis']['data'] = seriesData;
                    chartsArray[47].setOption(option48);
                    break;
                case 'chart49':
                    option49['title']['text'] = titleChange;
                    option49['series'][0]['data'] = numData;
                    option49['xAxis']['data'] = seriesData;
                    chartsArray[48].setOption(option49);
                    break;
                case 'chart50':
                    option50['title']['text'] = titleChange;
                    option50['series'][0]['data'] = numData;
                    option50['xAxis']['data'] = seriesData;
                    chartsArray[49].setOption(option50);
                    break;
                case 'chart51':
                    option51['title']['text'] = titleChange;
                    option51['series'][0]['data'] = numData;
                    option51['xAxis']['data'] = seriesData;
                    chartsArray[50].setOption(option51);
                    break;
                case 'chart52':
                    option52['title']['text'] = titleChange;
                    option52['series'][0]['data'] = numData;
                    option52['xAxis']['data'] = seriesData;
                    chartsArray[51].setOption(option52);
                    break;
                case 'chart55':
                    option55['title']['text'] = titleChange;
                    option55['series'][0]['data'] = numData;
                    option55['xAxis']['data'] = seriesData;
                    chartsArray[54].setOption(option55);
                    break;
                case 'chart56':
                    option56['title']['text'] = titleChange;
                    option56['series'][0]['data'] = numData;
                    option56['xAxis']['data'] = seriesData;
                    chartsArray[55].setOption(option56);
                    break;
            }
            break;
    }
}




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
		close.setAttribute('href','javascript:hide(0,"'+chartType+'")');
		close.setAttribute('style','float: right;padding-right: 1%;')
		close.innerHTML = '取消';
		login.appendChild(close);
		//console.log('ok');
		//识别图表类型并显示
		switch (chartType){
			case 'chart1':
			case 'chart9':
			case 'chart10':
			case 'chart11':
			case 'chart12':
			case 'chart17':
			case 'chart21':
			case 'chart24':
			case 'chart27':
			case 'chart30':
			case 'chart36':
			case 'chart37':
			case 'chart39':
			case 'chart43':
			case 'chart44':
			case 'chart45':
			case 'chart46':
			case 'chart53':
			case 'chart54':
			case 'chart57':
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
				var data;
				switch (chartType) {
					case 'chart1':
						data = option1['series'][0]['data'];
						break;
					case 'chart9':
						data = option9['series'][0]['data'];
						break;
					case 'chart10':
						data = option10['series'][0]['data'];
						break;
					case 'chart11':
						data = option11['series'][0]['data'];
						break;
					case 'chart12':
						data = option12['series'][0]['data'];
						break;
					case 'chart17':
						data = option17['series'][0]['data'];
						break;
					case 'chart21':
						data = option21['series'][0]['data'];
						break;
					case 'chart24':
						data = option24['series'][0]['data'];
						break;
					case 'chart27':
						data = option27['series'][0]['data'];
						break;
					case 'chart30':
						data = option30['series'][0]['data'];
						break;
					case 'chart36':
						data = option36['series'][0]['data'];
						break;
					case 'chart37':
						data = option37['series'][0]['data'];
						break;
					case 'chart39':
						data = option39['series'][0]['data'];
						break;
					case 'chart43':
						data = option43['series'][0]['data'];
						break;
					case 'chart44':
						data = option44['series'][0]['data'];
						break;
					case 'chart45':
						data = option45['series'][0]['data'];
						break;
					case 'chart46':
						data = option46['series'][0]['data'];
						break;
					case 'chart53':
						data = option53['series'][0]['data'];
						break;
					case 'chart54':
						data = option54['series'][0]['data'];
						break;
					case 'chart57':
						data = option57['series'][0]['data'];
						break;
				}

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

				//var editData = document.createElement('button');
				//editData.innerHTML = '编辑数据';
				//editData.setAttribute('id','refreshData');
				//editData.setAttribute('style','margin-left: 10%;')

				table.appendChild(tr1);
				table.appendChild(tr2);
				daDiv.appendChild(p3);
				daDiv.appendChild(table);
				//daDiv.appendChild(editData);
				login.appendChild(daDiv);
				//用户编辑单个图表的数据
				//editData.setAttribute('onclick','getTableData()');
				//向控件传参
				switch (chartType) {
					case 'chart1':
						document.getElementById('title').value=option1['title']['text'];
				        document.getElementById('radius').value=option1['series'][0]['radius'];
						break;
					case 'chart9':
						document.getElementById('title').value=option9['title']['text'];
				        document.getElementById('radius').value=option9['series'][0]['radius'];
						break;
					case 'chart10':
						document.getElementById('title').value=option10['title']['text'];
				        document.getElementById('radius').value=option10['series'][0]['radius'];
						break;
					case 'chart11':
						document.getElementById('title').value=option11['title']['text'];
				        document.getElementById('radius').value=option11['series'][0]['radius'];
						break;
					case 'chart12':
						document.getElementById('title').value=option12['title']['text'];
				        document.getElementById('radius').value=option12['series'][0]['radius'];
						break;
					case 'chart17':
						document.getElementById('title').value=option17['title']['text'];
				        document.getElementById('radius').value=option17['series'][0]['radius'];
						break;
					case 'chart21':
						document.getElementById('title').value=option21['title']['text'];
				        document.getElementById('radius').value=option21['series'][0]['radius'];
						break;
					case 'chart24':
						document.getElementById('title').value=option24['title']['text'];
				        document.getElementById('radius').value=option24['series'][0]['radius'];
						break;
					case 'chart27':
						document.getElementById('title').value=option27['title']['text'];
				        document.getElementById('radius').value=option27['series'][0]['radius'];
						break;
					case 'chart30':
						document.getElementById('title').value=option30['title']['text'];
				        document.getElementById('radius').value=option30['series'][0]['radius'];
						break;
					case 'chart36':
						document.getElementById('title').value=option36['title']['text'];
				        document.getElementById('radius').value=option36['series'][0]['radius'];
						break;
					case 'chart37':
						document.getElementById('title').value=option37['title']['text'];
				        document.getElementById('radius').value=option37['series'][0]['radius'];
						break;
					case 'chart39':
						document.getElementById('title').value=option39['title']['text'];
				        document.getElementById('radius').value=option39['series'][0]['radius'];
						break;
					case 'chart43':
						document.getElementById('title').value=option43['title']['text'];
				        document.getElementById('radius').value=option43['series'][0]['radius'];
						break;
					case 'chart44':
						document.getElementById('title').value=option44['title']['text'];
				        document.getElementById('radius').value=option44['series'][0]['radius'];
						break;
					case 'chart45':
						document.getElementById('title').value=option45['title']['text'];
				        document.getElementById('radius').value=option45['series'][0]['radius'];
						break;
					case 'chart46':
						document.getElementById('title').value=option46['title']['text'];
				        document.getElementById('radius').value=option46['series'][0]['radius'];
						break;
					case 'chart53':
						document.getElementById('title').value=option53['title']['text'];
				        document.getElementById('radius').value=option53['series'][0]['radius'];
						break;
					case 'chart54':
						document.getElementById('title').value=option54['title']['text'];
				        document.getElementById('radius').value=option54['series'][0]['radius'];
						break;
					case 'chart57':
						document.getElementById('title').value=option57['title']['text'];
				        document.getElementById('radius').value=option57['series'][0]['radius'];
						break;
				}
				//确定按钮
				var mybutton = document.createElement('button');
				mybutton.setAttribute('type','button');
				mybutton.setAttribute('style','margin-left: 5%;')
				mybutton.setAttribute('onclick','hide(1,"'+chartType+'")');
				mybutton.innerHTML = '保存';
				login.appendChild(mybutton);

				break;

			case 'chart2':
			case 'chart3':
			case 'chart4':
			case 'chart5':
			case 'chart6':
			case 'chart7':
			case 'chart8':
			case 'chart13':
			case 'chart14':
			case 'chart15':
			case 'chart16':
			case 'chart18':
			case 'chart19':
			case 'chart20':
			case 'chart22':
			case 'chart23':
			case 'chart25':
			case 'chart26':
			case 'chart28':
			case 'chart29':
			case 'chart31':
			case 'chart32':
			case 'chart33':
			case 'chart34':
			case 'chart35':
			case 'chart38':
			case 'chart40':
			case 'chart41':
			case 'chart42':
			case 'chart47':
			case 'chart48':
			case 'chart49':
			case 'chart50':
			case 'chart51':
			case 'chart52':
			case 'chart55':
			case 'chart56':
				//第一个div节点
				var div1 = document.createElement('div');
				div1.setAttribute('class','attributeOfChart');
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


                //数据设置
				//localStorage.setItem('data1',);
				var data;
				switch (chartType) {
					case 'chart2':
						data = option2['xAxis']['data'];
						break;
					case 'chart3':
						data = option3['yAxis']['data'];
						break;
					case 'chart4':
						data = option4['yAxis']['data'];
						break;
					case 'chart5':
						data = option5['xAxis']['data'];
						break;
					case 'chart6':
						data = option6['xAxis']['data'];
						break;
					case 'chart7':
						data = option7['yAxis']['data'];
						break;
					case 'chart8':
						data = option8['yAxis']['data'];
						break;
					case 'chart13':
						data = option13['yAxis']['data'];
						break;
					case 'chart14':
						data = option14['xAxis']['data'];
						break;
					case 'chart15':
						data = option15['xAxis']['data'];
						break;
					case 'chart16':
						data = option16['xAxis']['data'];
						break;
					case 'chart18':
						data = option18['xAxis']['data'];
						break;
					case 'chart19':
						data = option19['xAxis']['data'];
						break;
					case 'chart20':
						data = option20['xAxis']['data'];
						break;
					case 'chart22':
						data = option22['xAxis']['data'];
						break;
					case 'chart23':
						data = option23['xAxis']['data'];
						break;
					case 'chart25':
						data = option25['xAxis']['data'];
						break;
					case 'chart26':
						data = option26['xAxis']['data'];
						break;
					case 'chart28':
						data = option28['xAxis']['data'];
						break;
					case 'chart29':
						data = option29['yAxis']['data'];
						break;
					case 'chart31':
						data = option31['xAxis']['data'];
						break;
					case 'chart32':
						data = option32['xAxis']['data'];
						break;
					case 'chart33':
						data = option33['xAxis']['data'];
						break;
					case 'chart34':
						data = option34['yAxis']['data'];
						break;
					case 'chart35':
						data = option35['xAxis']['data'];
						break;
					case 'chart38':
						data = option38['xAxis']['data'];
						break;
					case 'chart40':
						data = option40['xAxis']['data'];
						break;
					case 'chart41':
						data = option41['xAxis']['data'];
						break;
					case 'chart42':
						data = option42['xAxis']['data'];
						break;
					case 'chart47':
						data = option47['xAxis']['data'];
						break;
					case 'chart48':
						data = option48['xAxis']['data'];
						break;
					case 'chart49':
						data = option49['xAxis']['data'];
						break;
					case 'chart50':
						data = option50['xAxis']['data'];
						break;
					case 'chart51':
						data = option51['xAxis']['data'];
						break;
					case 'chart52':
						data = option52['xAxis']['data'];
						break;
					case 'chart55':
						data = option55['xAxis']['data'];
						break;
					case 'chart56':
						data = option56['xAxis']['data'];
						break;
				}
				//console.log(data);//数据
				//console.log(data[0]['value']);
				//创建表格
				var daDiv = document.createElement('div');
				daDiv.setAttribute('class','attributeOfChart');

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
					tempIn.value = data[dataNumber];
					tempTd.appendChild(tempIn);
					tr1.appendChild(tempTd);
				}

				var data1;
				switch (chartType) {
					case 'chart2':
						data1 = option2['series'][0]['data'];
						break;
					case 'chart3':
						data1 = option3['series'][0]['data'];
						break;
					case 'chart4':
						data1 = option4['series'][0]['data'];
						break;
					case 'chart5':
						data1 = option5['series'][0]['data'];
						break;
					case 'chart6':
						data1 = option6['series'][0]['data'];
						break;
					case 'chart7':
						data1 = option7['series'][0]['data'];
						break;
					case 'chart8':
						data1 = option8['series'][0]['data'];
						break;
					case 'chart14':
						data1 = option14['series'][0]['data'];
						break;
					case 'chart13':
						data1 = option13['series'][0]['data'];
						break;
					case 'chart15':
						data1 = option15['series'][0]['data'];
						break;
					case 'chart16':
						data1 = option16['series'][0]['data'];
						break;
					case 'chart18':
						data1 = option18['series'][0]['data'];
						break;
					case 'chart19':
						data1 = option19['series'][0]['data'];
						break;
					case 'chart20':
						data1 = option20['series'][0]['data'];
						break;
					case 'chart22':
						data1 = option22['series'][0]['data'];
						break;
					case 'chart23':
						data1 = option23['series'][0]['data'];
						break;
					case 'chart25':
						data1 = option25['series'][0]['data'];
						break;
					case 'chart26':
						data1 = option26['series'][0]['data'];
						break;
					case 'chart28':
						data1 = option28['series'][0]['data'];
						break;
					case 'chart29':
						data1 = option29['series'][0]['data'];
						break;
					case 'chart31':
						data1 = option31['series'][0]['data'];
						break;
					case 'chart32':
						data1 = option32['series'][0]['data'];
						break;
					case 'chart33':
						data1 = option33['series'][0]['data'];
						break;
					case 'chart34':
						data1 = option34['series'][0]['data'];
						break;
					case 'chart35':
						data1 = option35['series'][0]['data'];
						break;
					case 'chart38':
						data1 = option38['series'][0]['data'];
						break;
					case 'chart40':
						data1 = option40['series'][0]['data'];
						break;
					case 'chart41':
						data1 = option41['series'][0]['data'];
						break;
					case 'chart42':
						data1 = option42['series'][0]['data'];
						break;
					case 'chart47':
						data1 = option47['series'][0]['data'];
						break;
					case 'chart48':
						data1 = option48['series'][0]['data'];
						break;
					case 'chart49':
						data1 = option49['series'][0]['data'];
						break;
					case 'chart50':
						data1 = option50['series'][0]['data'];
						break;
					case 'chart51':
						data1 = option51['series'][0]['data'];
						break;
					case 'chart52':
						data1 = option52['series'][0]['data'];
						break;
					case 'chart55':
						data1 = option55['series'][0]['data'];
						break;
					case 'chart56':
						data1 = option56['series'][0]['data'];
						break;
				}
				tr2 = tr1.cloneNode();
				for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempTd = td.cloneNode();
					var tempIn = myInput.cloneNode();
					tempIn.id = 'inputTwo'+dataNumber;
					tempIn.value = data1[dataNumber];
					tempTd.appendChild(tempIn);
					tr2.appendChild(tempTd);
				}

				//var editData = document.createElement('button');
				//editData.innerHTML = '刷新数据';
				//editData.setAttribute('id','refreshData');
				//editData.setAttribute('style','margin-left: 10%;')

				table.appendChild(tr1);
				table.appendChild(tr2);
				daDiv.appendChild(p3);
				daDiv.appendChild(table);
				//daDiv.appendChild(editData);
				login.appendChild(daDiv);
				//用户编辑单个图表的数据
				//editData.setAttribute('onclick','getTableData()');
				//向控件传参
				//向控件传参
				switch (chartType) {
					case 'chart2':
						document.getElementById('title').value=option2['title']['text'];
						break;
					case 'chart3':
						document.getElementById('title').value=option3['title']['text'];
						break;
					case 'chart4':
						document.getElementById('title').value=option4['title']['text'];
						break;
					case 'chart5':
						document.getElementById('title').value=option5['title']['text'];
						break;
					case 'chart6':
						document.getElementById('title').value=option6['title']['text'];
						break;
					case 'chart7':
						document.getElementById('title').value=option7['title']['text'];
						break;
					case 'chart8':
						document.getElementById('title').value=option8['title']['text'];
						break;
					case 'chart13':
						document.getElementById('title').value=option13['title']['text'];
						break;
					case 'chart14':
						document.getElementById('title').value=option14['title']['text'];
						break;
					case 'chart15':
						document.getElementById('title').value=option15['title']['text'];
						break;
					case 'chart16':
						document.getElementById('title').value=option16['title']['text'];
						break;
					case 'chart18':
						document.getElementById('title').value=option18['title']['text'];
						break;
					case 'chart19':
						document.getElementById('title').value=option19['title']['text'];
						break;
					case 'chart20':
						document.getElementById('title').value=option20['title']['text'];
						break;
					case 'chart22':
						document.getElementById('title').value=option22['title']['text'];
						break;
					case 'chart23':
						document.getElementById('title').value=option23['title']['text'];
						break;
					case 'chart25':
						document.getElementById('title').value=option25['title']['text'];
						break;
					case 'chart26':
						document.getElementById('title').value=option26['title']['text'];
						break;
					case 'chart28':
						document.getElementById('title').value=option28['title']['text'];
						break;
					case 'chart29':
						document.getElementById('title').value=option29['title']['text'];
						break;
					case 'chart31':
						document.getElementById('title').value=option31['title']['text'];
						break;
					case 'chart32':
						document.getElementById('title').value=option32['title']['text'];
						break;
					case 'chart33':
						document.getElementById('title').value=option33['title']['text'];
						break;
					case 'chart34':
						document.getElementById('title').value=option34['title']['text'];
						break;
					case 'chart35':
						document.getElementById('title').value=option35['title']['text'];
						break;
					case 'chart38':
						document.getElementById('title').value=option38['title']['text'];
						break;
					case 'chart40':
						document.getElementById('title').value=option40['title']['text'];
						break;
					case 'chart41':
						document.getElementById('title').value=option41['title']['text'];
						break;
					case 'chart42':
						document.getElementById('title').value=option42['title']['text'];
						break;
					case 'chart47':
						document.getElementById('title').value=option47['title']['text'];
						break;
					case 'chart48':
						document.getElementById('title').value=option48['title']['text'];
						break;
					case 'chart49':
						document.getElementById('title').value=option49['title']['text'];
						break;
					case 'chart50':
						document.getElementById('title').value=option50['title']['text'];
						break;
					case 'chart51':
						document.getElementById('title').value=option51['title']['text'];
						break;
					case 'chart52':
						document.getElementById('title').value=option52['title']['text'];
						break;
					case 'chart55':
						document.getElementById('title').value=option55['title']['text'];
						break;
					case 'chart56':
						document.getElementById('title').value=option56['title']['text'];
						break;
				}
				//document.getElementById('radius').value=option2['series'][0]['radius'];

				//确定按钮
				var mybutton = document.createElement('button');
				mybutton.setAttribute('type','button');
				mybutton.setAttribute('style','margin-left: 5%;')
				mybutton.setAttribute('onclick','hide(1,"'+chartType+'")');
				mybutton.innerHTML = '保存';
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
				mybutton.setAttribute('onclick','hide(1,"'+chartType+'")');
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
		//console.log(t);
		login.style.top = t+'px';		
		//设置灰色背景长度
		over.style.height = t+900+'px';
        login.style.display = "block";
        over.style.display = "block";
    }


    function hide(code,chartType)
    {
        var login = document.getElementById('login');
        var over = document.getElementById('over');
		switch (code){
			case 0:
				////取消设置
				//清除从数据库中渲染到图表的位置参数
                //var tempChart = document.getElementById(chartType);
                //tempChart.setAttribute('style','');
				//清空弹窗内容
				login.innerHTML = '';
				//隐藏弹出层
				login.style.display = "none";
				over.style.display = "none";
				break;
			case 1:
			    switch(chartType){
                    case 'chart1':
                    case 'chart9':
			        case 'chart10':
			        case 'chart11':
			        case 'chart12':
			        case 'chart17':
			        case 'chart21':
			        case 'chart24':
			        case 'chart27':
			        case 'chart30':
			        case 'chart36':
			        case 'chart37':
			        case 'chart39':
			        case 'chart43':
			        case 'chart44':
			        case 'chart45':
			        case 'chart46':
			        case 'chart53':
			        case 'chart54':
			        case 'chart57':
                    //图表的数据项个数
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
                    ////重写组件参数
                    //标题
                    var titleChange = document.getElementById('title').value;
                    switch (chartType) {
                    	case 'chart1':
                    		option1['title']['text'] = titleChange;
                            //半径
							option1['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option1['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[0].setOption(option1);
                            //console.log('图表1属性更改成功！');
                            break;
                        case 'chart9':
                        	option9['title']['text'] = titleChange;
                            //半径
							option9['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option9['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[8].setOption(option9);
                            //console.log('图表9属性更改成功！');
                            break;
			            case 'chart10':
			            	option10['title']['text'] = titleChange;
                            //半径
							option10['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option10['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[9].setOption(option10);
                            //console.log('图表10属性更改成功！');
                            break;
			            case 'chart11':
			            	option11['title']['text'] = titleChange;
                            //半径
							option11['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option11['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[10].setOption(option11);
                            console.log('图表11属性更改成功！');
                            break;
			            case 'chart12':
			            	option12['title']['text'] = titleChange;
                            //半径
							option12['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option12['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[11].setOption(option12);
                            //console.log('图表12属性更改成功！');
                            break;
			            case 'chart17':
			            	option17['title']['text'] = titleChange;
                            //半径
							option17['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option17['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[16].setOption(option17);
                            //console.log('图表17属性更改成功！');
                            break;
			            case 'chart21':
			            	option21['title']['text'] = titleChange;
                            //半径
							option21['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option21['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[20].setOption(option21);
                            console.log('图表21属性更改成功！');
                            break;
			            case 'chart24':
			            	option24['title']['text'] = titleChange;
                            //半径
							option24['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option24['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[23].setOption(option24);
                            //console.log('图表24属性更改成功！');
                            break;
			            case 'chart27':
			            	option27['title']['text'] = titleChange;
                            //半径
							option27['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option27['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[26].setOption(option27);
                            //console.log('图表27属性更改成功！');
                            break;
			            case 'chart30':
			            	option30['title']['text'] = titleChange;
                            //半径
							option30['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option30['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[29].setOption(option30);
                            //console.log('图表30属性更改成功！');
                            break;
			            case 'chart36':
			            	option36['title']['text'] = titleChange;
                            //半径
							option36['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option36['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[35].setOption(option36);
                            ///console.log('图表36属性更改成功！');
                            break;
			            case 'chart37':
			            	option37['title']['text'] = titleChange;
                            //半径
							option37['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option37['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[36].setOption(option37);
                            //console.log('图表37属性更改成功！');
                            break;
			            case 'chart39':
			            	option39['title']['text'] = titleChange;
                            //半径
							option39['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option39['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[38].setOption(option39);
                            //console.log('图表39属性更改成功！');
                            break;
			            case 'chart43':
			            	option43['title']['text'] = titleChange;
                            //半径
							option43['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option43['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[42].setOption(option43);
                            //console.log('图表43属性更改成功！');
                            break;
			            case 'chart44':
			            	option44['title']['text'] = titleChange;
                            //半径
							option44['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option44['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[43].setOption(option44);
                            //console.log('图表44属性更改成功！');
                            break;
			            case 'chart45':
			            	option45['title']['text'] = titleChange;
                            //半径
							option45['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option45['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[44].setOption(option45);
                            //console.log('图表45属性更改成功！');
                            break;
			            case 'chart46':
			            	option46['title']['text'] = titleChange;
                            //半径
							option46['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option46['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[45].setOption(option46);
                            //console.log('图表46属性更改成功！');
                            break;
			            case 'chart53':
			            	option53['title']['text'] = titleChange;
                            //半径
							option53['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option53['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[52].setOption(option53);
                            //console.log('图表53属性更改成功！');
                            break;
			            case 'chart54':
			            	option54['title']['text'] = titleChange;
                            //半径
							option54['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option54['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[53].setOption(option54);
                            //console.log('图表54属性更改成功！');
                            break;
			            case 'chart57':
			            	option57['title']['text'] = titleChange;
                            //半径
							option57['series'][0]['radius'] = document.getElementById('radius').value;
                            //数据
                            option57['series'][0]['data'] = dataChange;
                            //console.log(option1);
                            //重新渲染图表
                            chartsArray[56].setOption(option57);
                            //console.log('图表57属性更改成功！');
                            break;
					}
                    break;
                case 'chart2':
			    case 'chart3':
			    case 'chart4':
			    case 'chart5':
			    case 'chart6':
			    case 'chart7':
			    case 'chart8':
			    case 'chart13':
			    case 'chart14':
			    case 'chart15':
			    case 'chart16':
			    case 'chart18':
			    case 'chart19':
			    case 'chart20':
			    case 'chart22':
		    	case 'chart23':
			    case 'chart25':
			    case 'chart26':
			    case 'chart28':
			    case 'chart29':
			    case 'chart31':
			    case 'chart32':
			    case 'chart33':
			    case 'chart34':
			    case 'chart35':
			    case 'chart38':
			    case 'chart40':
			    case 'chart41':
			    case 'chart42':
			    case 'chart47':
			    case 'chart48':
			    case 'chart49':
			    case 'chart50':
			    case 'chart51':
			    case 'chart52':
			    case 'chart55':
			    case 'chart56':
				console.log(code);

                     //图表的数据项个数
                    var num = document.getElementById('table1');
                    var num = num.rows.item(0).cells.length;
                    //封装数据
                    var seriesData = [];
                    var numData = []
                    for (i=0;i<num;i++) {
                        var tempValue = document.getElementById('inputTwo'+i).value;
                        var tempName = document.getElementById('inputOne'+i).value;
                        seriesData[i] = tempName;
                        numData[i] = tempValue;
                    }
                    //console.log(dataChange);
                    ////重写组件参数
                    //标题
                    var titleChange = document.getElementById('title').value;
                    switch (chartType) {
                    	case 'chart2':
                    		option2['title']['text'] = titleChange;
                  		    option2['series'][0]['data'] = numData;
                    		option2['xAxis']['data'] = seriesData;
                    		//console.log(option2);
                    		chartsArray[1].setOption(option2);
                    		//console.log('图表2属性更改成功！');
                    		break;
			            case 'chart3':
			            	option3['title']['text'] = titleChange;
                  		    option3['series'][0]['data'] = numData;
                    		option3['yAxis']['data'] = seriesData;
                    		//console.log(option3);
                    		chartsArray[2].setOption(option3);
                    		//console.log('图表3属性更改成功！');
                    		break;
			            case 'chart4':
			            	option4['title']['text'] = titleChange;
                  		    option4['series'][0]['data'] = numData;
                    		option4['yAxis']['data'] = seriesData;
                    		//console.log(option4);
                    		chartsArray[3].setOption(option4);
                    		//console.log('图表4属性更改成功！');
                    		break;
			            case 'chart5':
			            	option5['title']['text'] = titleChange;
                  		    option5['series'][0]['data'] = numData;
                    		option5['xAxis']['data'] = seriesData;
                    		//console.log(option5);
                    		chartsArray[4].setOption(option5);
                    		//console.log('图表5属性更改成功！');
                    		break;
			            case 'chart6':
			            	option6['title']['text'] = titleChange;
                  		    option6['series'][0]['data'] = numData;
                    		option6['xAxis']['data'] = seriesData;
                    		//console.log(option6);
                    		chartsArray[5].setOption(option6);
                    		//console.log('图表6属性更改成功！');
                    		break;
			            case 'chart7':
			            	option7['title']['text'] = titleChange;
                  		    option7['series'][0]['data'] = numData;
                    		option7['yAxis']['data'] = seriesData;
                    		//console.log(option7);
                    		chartsArray[6].setOption(option7);
                    		//console.log('图表7属性更改成功！');
                    		break;
			            case 'chart8':
			            	option8['title']['text'] = titleChange;
                  		    option8['series'][0]['data'] = numData;
                    		option8['yAxis']['data'] = seriesData;
                    		//console.log(option8);
                    		chartsArray[7].setOption(option8);
                    		//console.log('图表8属性更改成功！');
                    		break;
			            case 'chart13':
			            	option13['title']['text'] = titleChange;
                  		    option13['series'][0]['data'] = numData;
                    		option13['yAxis']['data'] = seriesData;
                    		//console.log(option13);
                    		chartsArray[12].setOption(option13);
                    		//console.log('图表13属性更改成功！');
                    		break;
			            case 'chart14':
			            	option14['title']['text'] = titleChange;
                  		    option14['series'][0]['data'] = numData;
                    		option14['xAxis']['data'] = seriesData;
                    		//console.log(option14);
                    		chartsArray[13].setOption(option14);
                    		//console.log('图表14属性更改成功！');
                    		break;
			            case 'chart15':
			            	option15['title']['text'] = titleChange;
                  		    option15['series'][0]['data'] = numData;
                    		option15['xAxis']['data'] = seriesData;
                    		//console.log(option15);
                    		chartsArray[14].setOption(option15);
                    		//console.log('图表15属性更改成功！');
                    		break;
			            case 'chart16':
			            	option16['title']['text'] = titleChange;
                  		    option16['series'][0]['data'] = numData;
                    		option16['xAxis']['data'] = seriesData;
                    		//console.log(option16);
                    		chartsArray[15].setOption(option16);
                    		//console.log('图表16属性更改成功！');
                    		break;
			            case 'chart18':
			            	option18['title']['text'] = titleChange;
                  		    option18['series'][0]['data'] = numData;
                    		option18['xAxis']['data'] = seriesData;
                    		//console.log(option18);
                    		chartsArray[17].setOption(option18);
                    		//console.log('图表18属性更改成功！');
                    		break;
			            case 'chart19':
			            	option19['title']['text'] = titleChange;
                  		    option19['series'][0]['data'] = numData;
                    		option19['xAxis']['data'] = seriesData;
                    		//console.log(option19);
                    		chartsArray[18].setOption(option19);
                    		//console.log('图表19属性更改成功！');
                    		break;
			            case 'chart20':
			            	option20['title']['text'] = titleChange;
                  		    option20['series'][0]['data'] = numData;
                    		option20['xAxis']['data'] = seriesData;
                    		//console.log(option20);
                    		chartsArray[19].setOption(option20);
                    		//console.log('图表20属性更改成功！');
                    		break;
			            case 'chart22':
			            	option22['title']['text'] = titleChange;
                  		    option22['series'][0]['data'] = numData;
                    		option22['xAxis']['data'] = seriesData;
                    		//console.log(option22);
                    		chartsArray[21].setOption(option22);
                    		//console.log('图表22属性更改成功！');
                    		break;
		    	        case 'chart23':
		    	        	option23['title']['text'] = titleChange;
                  		    option23['series'][0]['data'] = numData;
                    		option23['xAxis']['data'] = seriesData;
                    		//console.log(option23);
                    		chartsArray[22].setOption(option23);
                    		//console.log('图表23属性更改成功！');
                    		break;
			            case 'chart25':
			            	option25['title']['text'] = titleChange;
                  		    option25['series'][0]['data'] = numData;
                    		option25['xAxis']['data'] = seriesData;
                    		//console.log(option25);
                    		chartsArray[24].setOption(option25);
                    		//console.log('图表25属性更改成功！');
                    		break;
			            case 'chart26':
			            	option26['title']['text'] = titleChange;
                  		    option26['series'][0]['data'] = numData;
                    		option26['xAxis']['data'] = seriesData;
                    		//console.log(option26);
                    		chartsArray[25].setOption(option26);
                    		//console.log('图表26属性更改成功！');
                    		break;
			            case 'chart28':
			            	option28['title']['text'] = titleChange;
                  		    option28['series'][0]['data'] = numData;
                    		option28['xAxis']['data'] = seriesData;
                    		//console.log(option28);
                    		chartsArray[27].setOption(option28);
                    		//console.log('图表28属性更改成功！');
                    		break;
			            case 'chart29':
			            	option29['title']['text'] = titleChange;
                  		    option29['series'][0]['data'] = numData;
                    		option29['yAxis']['data'] = seriesData;
                    		//console.log(option29);
                    		chartsArray[28].setOption(option29);
                    		//console.log('图表29属性更改成功！');
                    		break;
			            case 'chart31':
			            	option31['title']['text'] = titleChange;
                  		    option31['series'][0]['data'] = numData;
                    		option31['xAxis']['data'] = seriesData;
                    		//console.log(option31);
                    		chartsArray[30].setOption(option31);
                    		//console.log('图表31属性更改成功！');
                    		break;
			            case 'chart32':
			            	option32['title']['text'] = titleChange;
                  		    option32['series'][0]['data'] = numData;
                    		option32['xAxis']['data'] = seriesData;
                    		//console.log(option32);
                    		chartsArray[31].setOption(option32);
                    		//console.log('图表32属性更改成功！');
                    		break;
			            case 'chart33':
			            	option33['title']['text'] = titleChange;
                  		    option33['series'][0]['data'] = numData;
                    		option33['xAxis']['data'] = seriesData;
                    		//console.log(option33);
                    		chartsArray[32].setOption(option33);
                    		//console.log('图表33属性更改成功！');
                    		break;
			            case 'chart34':
			            	option34['title']['text'] = titleChange;
                  		    option34['series'][0]['data'] = numData;
                    		option34['yAxis']['data'] = seriesData;
                    		//console.log(option34);
                    		chartsArray[33].setOption(option34);
                    		//console.log('图表34属性更改成功！');
                    		break;
			            case 'chart35':
			            	option35['title']['text'] = titleChange;
                  		    option35['series'][0]['data'] = numData;
                    		option35['xAxis']['data'] = seriesData;
                    		//console.log(option35);
                    		chartsArray[34].setOption(option35);
                    		//console.log('图表35属性更改成功！');
                    		break;
			            case 'chart38':
			            	option38['title']['text'] = titleChange;
                  		    option38['series'][0]['data'] = numData;
                    		option38['xAxis']['data'] = seriesData;
                    		//console.log(option38);
                    		chartsArray[37].setOption(option38);
                    		//console.log('图表38属性更改成功！');
                    		break;
			            case 'chart40':
			            	option40['title']['text'] = titleChange;
                  		    option40['series'][0]['data'] = numData;
                    		option40['xAxis']['data'] = seriesData;
                    		//console.log(option40);
                    		chartsArray[39].setOption(option40);
                    		//console.log('图表40属性更改成功！');
                    		break;
			            case 'chart41':
			            	option41['title']['text'] = titleChange;
                  		    option41['series'][0]['data'] = numData;
                    		option41['xAxis']['data'] = seriesData;
                    		//console.log(option41);
                    		chartsArray[40].setOption(option41);
                    		//console.log('图表41属性更改成功！');
                    		break;
			            case 'chart42':
			            	option42['title']['text'] = titleChange;
                  		    option42['series'][0]['data'] = numData;
                    		option42['xAxis']['data'] = seriesData;
                    		//console.log(option42);
                    		chartsArray[41].setOption(option42);
                    		//console.log('图表42属性更改成功！');
                    		break;
			            case 'chart47':
			            	option47['title']['text'] = titleChange;
                  		    option47['series'][0]['data'] = numData;
                    		option47['xAxis']['data'] = seriesData;
                    		//console.log(option47);
                    		chartsArray[46].setOption(option47);
                    		//console.log('图表47属性更改成功！');
                    		break;
			            case 'chart48':
			            	option48['title']['text'] = titleChange;
                  		    option48['series'][0]['data'] = numData;
                    		option48['xAxis']['data'] = seriesData;
                    		//console.log(option48);
                    		chartsArray[47].setOption(option48);
                    		//console.log('图表48属性更改成功！');
                    		break;
			            case 'chart49':
			            	option49['title']['text'] = titleChange;
                  		    option49['series'][0]['data'] = numData;
                    		option49['xAxis']['data'] = seriesData;
                    		//console.log(option49);
                    		chartsArray[48].setOption(option49);
                    		//console.log('图表49属性更改成功！');
                    		break;
			            case 'chart50':
			            	option50['title']['text'] = titleChange;
                  		    option50['series'][0]['data'] = numData;
                    		option50['xAxis']['data'] = seriesData;
                    		//console.log(option50);
                    		chartsArray[49].setOption(option50);
                    		//console.log('图表50属性更改成功！');
                    		break;
			            case 'chart51':
			            	option51['title']['text'] = titleChange;
                  		    option51['series'][0]['data'] = numData;
                    		option51['xAxis']['data'] = seriesData;
                    		//console.log(option51);
                    		chartsArray[50].setOption(option51);
                    		//console.log('图表51属性更改成功！');
                    		break;
			            case 'chart52':
			            	option52['title']['text'] = titleChange;
                  		    option52['series'][0]['data'] = numData;
                    		option52['xAxis']['data'] = seriesData;
                    		//console.log(option52);
                    		chartsArray[51].setOption(option52);
                    		//console.log('图表52属性更改成功！');
                    		break;
			            case 'chart55':
			            	option55['title']['text'] = titleChange;
                  		    option55['series'][0]['data'] = numData;
                    		option55['xAxis']['data'] = seriesData;
                    		//console.log(option55);
                    		chartsArray[54].setOption(option55);
                    		//console.log('图表55属性更改成功！');
                    		break;
			            case 'chart56':
			            	option56['title']['text'] = titleChange;
                  		    option56['series'][0]['data'] = numData;
                    		option56['xAxis']['data'] = seriesData;
                    		//console.log(option56);
                    		chartsArray[55].setOption(option56);
                    		//console.log('图表56属性更改成功！');
                    		break;
					}
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
            "date": localStorage.getItem('data1'),//用于获取不同某一类型图表的不同时间的数据
            "chart": localStorage.getItem('chart'),
        },
        success: function (result) {
            //console.log(option1);
            //console.log('获取的数据id为'+localStorage.getItem('data1'));
            //重写表格配置项，这里需要进行配置项选择
            option1 = result['option'];
            //重写表格位置参数
            reLocation(result['chartLocation']);
            //更新弹出框参数
            reset(option1);

        },
    });
}

function reset(option){
    ////更新弹出框的内容
    //更新标题
    var tempTitle = document.getElementById('title');
    tempTitle.value = option['title']['text'];
    //更新半径
    var tempRadius = document.getElementById('radius');
    tempRadius.value = option['series'][0]['radius'];
    //更新表格参数
    var data = option['series'][0]['data'];
    for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempIn = document.getElementById('inputOne'+dataNumber);
					tempIn.value = data[dataNumber]['name'];
				    }
    for (dataNumber = 0; dataNumber<data.length; dataNumber++) {
					var tempIn = document.getElementById('inputTwo'+dataNumber);
					tempIn.value = data[dataNumber]['value'];
					}

}

function reLocation(location){
    ////设置图表的位置
    var tempChart = document.getElementById('chart1');
    tempChart.setAttribute('style','top:'+location['top']+'px;'+'left:'+location['left']+'px');
    //console.log('top:'+location['top']+'px');
}

function saveReport(){
    ////保存图表
    //要传递的数据包
    var reportChangeData = {};
    ////循环读取控件的相关参数
    //////!!!!!!!!这里说明需要重新对图表的id进行编号
    for(i=1;i<3;i++){
        var tempElement = document.getElementById('chart'+i);

        //#1读取位置参数
        var top = tempElement.style.top;
        var left = tempElement.style.left;
        //切片去掉“px”
        top = top.substring(0,top.length-2);
        left = left.substring(0,left.length-2);

        //##封装数据
        reportChangeData['chart'+i] = {'top':top,'left':left,
        'title':optionArray[i-1]['title']['text'],'radius':optionArray[i-1]['series'][0]['radius'],
        'option':optionArray[i-1]};
    }
    var jsonType = JSON.stringify(reportChangeData);
    console.log(jsonType);

    ////上传数据
    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/saveData/",
        data: {
            "changedData": jsonType,//用于获取不同某一类型图表的不同时间的数据
        },
        success: function (result) {
            //console.log(option1);
            console.log('ok');
        },
    });

}


