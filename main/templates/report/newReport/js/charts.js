////基于准备好的dom，初始化echarts实例
		// 测试数据传递情况
		localStorage.setItem('data1',1);
		var test = 66;
//		var ll = ;
//		console.log(ll);
		//图表数量
		var chartNum = 57;
		var chartsArray = new Array();
		for (i=0;i<chartNum;i++) {
			if (i==14) {
				chartsArray[i] = echarts.init(document.getElementById('chart'+(i+1)),'macarons');
			} else{
				chartsArray[i] = echarts.init(document.getElementById('chart'+(i+1)),'infographic');
			}
		}
		//console.log(chartsArray);
		// var myChart1 = echarts.init(document.getElementById('chart'+1),'macarons');
		// var myChart2 = echarts.init(document.getElementById('chart2'),'infographic');
		// var myChart3 = echarts.init(document.getElementById('chart3'),'infographic');
		// var myChart4 = echarts.init(document.getElementById('chart4'),'infographic');
		// var myChart5 = echarts.init(document.getElementById('chart5'),'infographic');
		// var myChart6 = echarts.init(document.getElementById('chart6'),'infographic');
		// var myChart7 = echarts.init(document.getElementById('chart7'),'infographic');
		// var myChart8 = echarts.init(document.getElementById('chart8'),'infographic');
		// var myChart9 = echarts.init(document.getElementById('chart9'),'infographic');
		// var myChart10 = echarts.init(document.getElementById('chart10'),'infographic');
		// var myChart11 = echarts.init(document.getElementById('chart11'),'infographic');

        //// 指定图表的配置项和数据
		//条形图1
        var option2 = {
            //color: ['#19696d'],
            title: {
                text: '国内生产总值及各产业同比增速',
				x:'center',
				textStyle:{
					fontSize:14,
					color:'black',
				},
            },
            tooltip: {},
            xAxis: {
                data: ["国内生产总值","第一产业","第二产业","第三产业"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					rotate:-15,//-15度角倾斜显示  
				},
            },
            yAxis: {
				show:false,
			},
            series: [{
				barWidth:30,
                name: '增速',
                type: 'bar',
                data: [30,20,36,test],
				markLine : {
					data : [
						{ name: '国内生产总值', xAxis: 0, yAxis: 30, symbol: 'circle'},
					]
				},
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
            }],
			grid:{//控制图形大小
				top: 60,
				x:80,
				x2:30,
				y2:50,
				
			}
        };
		//饼图1
		var option1 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '国内生产总值2246684亿元，其中：',
				x:'center',
				textStyle:{
					fontSize:14,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '各产业总值与占比',
					type: 'pie',
					radius : '35%',
					center: ['50%', '40%'],
					label:{
						normal:{
							formatter:'{b}:\n{c}亿元，\n{d}%',
							color:'black',
							//position:'outer',//'inner',
						}
					},
					data:[
						// {value:335, name:'第一产业', itemStyle:{color: '#19696d'}},
						// {value:310, name:'第二产业', itemStyle:{color: '#448588'}},
						// {value:234, name:'第三产业', itemStyle:{color: '#7aa8aa'}},
						{value:335, name:'第一产业'},
						{value:310, name:'第二产业'},
						{value:234, name:'第三产业'}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						}
					}
				}
			]
		};
		//条形图2
		var option3 = {
		    //color: ['#19696d'],
		    title: {
		        text: '重点产业工业增加值同比增速',
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
				data: ["采矿业","工业战略性新兴产业","高技术制造业","原材料工业","消费品工业","装备制造业","制造业","规模以上工业"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
				},
			},
		    series: [{
				barWidth:10,
		        name: '增速',
		        type: 'bar',
		        data: [30,20,36,test,12,65,98,78],
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
		//条形图3
		var option4 = {
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
		        data: [30,20,36,test,12],
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
		//条形图4
		var option5 = {
		    //color: ['#19696d'],
		    title: {
		        text: '重点产品产量同比增速',
				x:'center',
				textStyle:{
					fontSize:14,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
				type:'category',
				//show:false,
				data: ["新能源\n汽车","移动通信\n基站设备","城市轨道\n车辆","太阳能\n电池"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
				},
		    },
		    yAxis: {
				show:false,
				type:'value',
				
			},
		    series: [{
				barWidth:22,
		        name: '增速',
		        type: 'bar',
		        data: [30,20,36,test],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:50,
				
			}
		};
		//条形图5
		var option6 = {
		    //color: ['#19696d'],
		    title: {
		        text: '新能源汽车产销情况',
		    	x:'center',
		    	textStyle:{
		    		fontSize:14,
		    		color:'black',
		    	},
		    },
		    tooltip: {},
		    xAxis: {
		    	type:'category',
		    	//show:false,
		    	data: ["新能源汽车\n产量","新能源汽车\n销量"],
		    	axisLabel:{  
		    		interval:0,//横轴信息全部显示  
		    	},
		    },
		    yAxis: {
		    	show:false,
		    	type:'value',
				max:40,
				min:5,
				splitNumber:5,
				boundaryGap : [ 0.1, 0.2 ],
		    	
		    },
		    series: [{
		    	barWidth:55,
		        name: '数量',
		        type: 'bar',
		        data: [30.4,29.9],
		    	label: {
		    		normal: {
		    			show: true,
		    			position: 'inside',
		    			formatter:'{c}\n\n同比增速\n100.27%',
		    		}
		    	},
		    },
			],
		    grid:{//控制图形大小
		    	top: 40,
		    	x:30,
		    	x2:30,
		    	y2:50,
		    	
		    }
		};
		//条形图6
		var option7 = {
		    //color: ['#19696d'],
		    title: {
		        text: '三大产业投资同比增速',
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
				data: ["第三产业","第二产业","第一产业"],
			},
		    series: [{
				barWidth:25,
		        name: '增速',
		        type: 'bar',
		        data: [7.5,4.6,3.3],
				label: {
					normal: {
						show: true,
						position: 'inside',
						formatter:'{c}%',
					}
				},
		    },
			],
			grid:{//控制图形大小
				top: 40,
				x:120,
				x2:30,
				y2:50,
				
			}
		};
		//条形图7
		var option8 = {
		    //color: ['#19696d'],
		    title: {
		        text: '不同投资行业同比增速',
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
				data: ["全社会固定资产投资","制造业技术改造","高技术服务业","高技术制造业","铁路运输业","生态保护和环境治理业"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
				},
			},
		    series: [{
				barWidth:15,
		        name: '增速',
		        type: 'bar',
		        data: [30,20,36,test,12,43],
				markLine : {
					data : [
						{ name: '最小值', type:'min'},
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
				x:135,
				x2:30,
				y2:50,
				
			}
		};
		//饼图2
		var option9 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '',
				x:'center',
				textStyle:{
					fontSize:18,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '各产业总值与占比',
					type: 'pie',
					radius : '50%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}个',
							color:'black',
							position:'inner',
							fontSize:23,
							
						}
					},
					data:[
						// {value:290, name:'核准', itemStyle:{color: '#19696d'}},
						// {value:310, name:'审批', itemStyle:{color: '#448588'}},
						{value:290, name:'核准'},
						{value:310, name:'审批'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 1, 
						}
					}
				}
			]
		};
		//饼图3
		var option10 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '按经营单位所在地分',
				x:'center',
				textStyle:{
					fontSize:18,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '零售额',
					type: 'pie',
					radius : '53%',
					center: ['55%', '40%'],
					label:{
						normal:{
							formatter:'{b}\n{c}个',
							color:'black',
							//position:'inside',
							fontSize:15,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:14388, name:'乡村消费品零售额'},
						{value:83402, name:'城镇消费品零售额'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//饼图4
		var option11 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '按消费类型分',
				x:'center',
				textStyle:{
					fontSize:18,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '销售收入',
					type: 'pie',
					radius : '53%',
					center: ['55%', '40%'],
					label:{
						normal:{
							formatter:'{b}\n{c}个',
							color:'black',
							//position:'inside',
							fontSize:15,
							
						}
					},
					data:[
						// {value:14388, name:'餐饮收入', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'商品零售', itemStyle:{color: '#448588'}},
						{value:14388, name:'餐饮收入'},
						{value:83402, name:'商品零售'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3,
						}
					}
				}
			]
		};
		//饼图5
		var option12 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '全国网上零售额同比增速',
				x:'right',
				textStyle:{
					fontSize:18,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '零售额',
					type: 'pie',
					radius : '53%',
					center: ['55%', '40%'],
					label:{
						normal:{
							formatter:'',
							color:'black',
							position:'inside',
							fontSize:15,
							
						}
					},
					data:[
						// {value:14388, name:'餐饮收入', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'商品零售', itemStyle:{color: '#448588'}},
						{value:22379, name:''},
						{value:5340, name:''},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 6,
						}
					}
				}
			]
		};
		//条形图8
		var option13 = {
			//color: ['#19696d'],
			title: {
			    text: '限额以上单位化妆品类、通讯器材类商品同比增速',
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
				data: ["社会消费品\n零售总额","限额以上单位\n通讯器材类商品","限额以上单位\n化妆品类商品"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
				},
			},
			series: [{
				barWidth:28,
			    name: '增速',
			    type: 'bar',
			    data: [8.3,10,10.9],
				markLine : {
					data : [
						{ name: '最小值', type:'min'},
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
				x:135,
				x2:30,
				y2:50,
				
			}
		};
		//条形图9
		var option14 = {
		    //color: ['#19696d'],
		    title: {
		        text: '一季度价格指数同比增速',
				x:'left',
				textStyle:{
					fontSize:18,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["食品烟酒","衣着","居住","生活用品\n及服务","交通\n和通信","教育文化\n和娱乐","医疗保健","其他用品\n和服务"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:50,
		        name: '增速',
		        type: 'bar',
		        data: [2.2,1.8,2.1,1.3,-0.8,2.6,2.7,2.1],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:40,
				x2:30,
				y2:50,
				
			}
		};
		//条形图10
		var option15 = {
		    //color: ['#19696d'],
		    title: {
		        text: '',
				x:'left',
				textStyle:{
					fontSize:18,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["粮食","猪肉","鲜菜"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:480,
		        name: '增速',
		        type: 'bar',
		        data: [0.5,-1.2,6.9],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 20,
				x:10,
				x2:20,
				y2:20,
				
			}
		};
		//条形图11
		var option16 = {
		    //color: ['#19696d'],
		    title: {
		        text: '全国居民人均可支配收入情况',
				x:'center',
				textStyle:{
					fontSize:18,
					color:'black',
				},
		    },
		    tooltip: {},
			legend: {
				data:['平均数（元）','中位数（元）','平均数增长率（%）','中位数增长率（%）'],
				y:'bottom'
			},
		    xAxis: {
		        data: ["2018年第一季度","2019年第一季度"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: [
				{
					type : 'value',
					name : '',
					axisLabel : {
						formatter: '{value} 元'
					}
				},
				{
					type : 'value',
					name : '',
					axisLabel : {
					formatter: '{value} %'
					}
				}
			],
		    series: [{
				barWidth:40,
		        name: '平均数（元）',
		        type: 'bar',
		        data: [7815,8493],
				label: {
					normal: {
						show: true,
						position: 'inside',
						formatter:'{c}',
					}
				},
		    },
			{
				barWidth:40,
			    name: '中位数（元）',
			    type: 'bar',
			    data: [6580,7158],
				label: {
					normal: {
						show: true,
						position: 'inside',
						formatter:'{c}',
					}
				},
			},
			{
				name:'平均数增长率（%）',
				type:'line',
				yAxisIndex: 1,
				data:[8.8, 8.7],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}',
					}
				},
			},
			{
				name:'中位数增长率（%）',
				type:'line',
				yAxisIndex: 1,
				data:[8.5, 8.8],
				label: {
					normal: {
						show: true,
						position: 'bottom',
						formatter:'{c}',
					}
				},
			}
			],
			grid:{//控制图形大小
				top: 60,
				x:60,
				x2:60,
				y2:80,
				
			}
		};
		//饼图6
		var option17 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '货物进出口总额70051亿元',
				x:'center',
				textStyle:{
					fontSize:18,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '额度',
					type: 'pie',
					radius : '70%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}亿元',
							color:'black',
							//position:'inside',
							fontSize:17,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:32377, name:'货物进口总额'},
						{value:37674, name:'货物出口总额'},
						{value:5296.7, name:'进出口顺差'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图12
		var option18 = {
		    //color: ['#19696d'],
		    title: {
		        text: '（以人民币计）',
				x:'right',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["进出口总额","出口总额","进口总额"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:480,
		        name: '额度',
		        type: 'bar',
		        data: [3.7,6.7,0.3],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:20,
				
			}
		};
		//条形图13
		var option19 = {
		    //color: ['#19696d'],
		    title: {
		        text: '（以美元计）',
				x:'right',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["进出口总额","出口总额","进口总额"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:480,
		        name: '额度',
		        type: 'bar',
		        data: [-1.5,1.4,-4.8],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:20,
				
			}
		};
		//条形图14
		var option20 = {
		    //color: ['#19696d'],
		    title: {
		        text: '主要贸易伙伴进出口总值',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
			legend: {
				data:['单位：亿元'],
				y:'top',
				x:'right',
			},
		    tooltip: {},
		    xAxis: {
		        data: ["欧盟","东盟","美国","日本"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:480,
		        name: '单位：亿元',
		        type: 'bar',
		        data: [11085.8,9345.5,8158.6,5055.5],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//饼图7
		var option21 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '部分外贸伙伴对中国外贸总值占比',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '额度',
					type: 'pie',
					radius : '70%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:15.8, name:'欧盟'},
						{value:13.3, name:'东盟'},
						{value:11.6, name:'美国'},
						{value:7.2, name:'日本'},
						{value:40.5, name:'其他'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图15
		var option22 = {
		    //color: ['#19696d'],
		    title: {
		        text: '主要贸易伙伴进出口总值同比增速',
				x:'right',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["欧盟","东盟","美国","日本"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:480,
		        name: '额度',
		        type: 'bar',
		        data: [11.5,8.1,-11,3.2],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
        //条形图16
        var option23 = {
            //color: ['#19696d'],
            title: {
                text: '沿线国家进出口整体增速',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
        	// legend: {
        	// 	data:['单位：亿元'],
        	// 	y:'top',
        	// 	x:'right',
        	// },
            tooltip: {},
            xAxis: {
                data: ["全国进出口\n增速","“一带一路”\n沿线国家增速"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: {
        		show:false,
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '单位：亿元',
                type: 'bar',
                data: [3.1,7.8],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}%',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:10,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //饼图8
        var option24 = {
        	backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
        	title : {
        		text: '沿线国家对中国外贸总值占比',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
        	},
        	tooltip : {
        		trigger: 'item',
        		formatter: "{a} <br/>{b} : {c} ({d}%)"
        	},
        	series : [
        		{
        			name: '额度',
        			type: 'pie',
        			radius : '70%',
        			center: ['50%', '50%'],
        			label:{
        				normal:{
        					formatter:'{b}\n{c}%',
        					color:'black',
        					position:'inside',
        					fontSize:12,
        					
        				}
        			},
        			data:[
        				// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
        				// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
        				{value:28.6, name:'沿线国家'},
        				{value:71.4, name:'其他'},
        			],
        			itemStyle: {
        				emphasis: {
        					shadowBlur: 10,
        					shadowOffsetX: 0,
        					shadowColor: 'rgba(0, 0, 0, 0.5)',
        				},
        				normal: { 
        					borderColor: "#FFFFFF", borderWidth: 3, 
        				}
        			}
        		}
        	]
        };
        //条形图17
        var option25 = {
            //color: ['#19696d'],
            title: {
                text: '部分沿线国家进出口增速',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
            tooltip: {},
            xAxis: {
                data: ["俄罗斯","沙特阿拉伯","埃及","中东欧国家"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: {
        		show:false,
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '额度',
                type: 'bar',
                data: [9.8,33.8,18.3,13],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}%',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:10,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //条形图18
        var option26 = {
            //color: ['#19696d'],
            title: {
                text: '企业进出口总值',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
        	legend: {
        		data:['单位：万亿元'],
        		y:'top',
        		x:'right',
        	},
            tooltip: {},
            xAxis: {
                data: ["民营企业","外商投资企业","国有企业"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: {
        		show:false,
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '单位：万亿元',
                type: 'bar',
                data: [2.84,2.89,1.24],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}%',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:10,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //饼图9
        var option27 = {
        	backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
        	title : {
        		text: '全国企业进出口总值占比',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
        	},
        	tooltip : {
        		trigger: 'item',
        		formatter: "{a} <br/>{b} : {c} ({d}%)"
        	},
        	series : [
        		{
        			name: '占比',
        			type: 'pie',
        			radius : '70%',
        			center: ['50%', '50%'],
        			label:{
        				normal:{
        					formatter:'{b}\n{c}%',
        					color:'black',
        					position:'inside',
        					fontSize:12,
        					
        				}
        			},
        			data:[
        				// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
        				// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
        				{value:17.7, name:'国有企业'},
        				{value:40.6, name:'民营企业'},
						{value:41.3, name:'外商投资企业'},
        			],
        			itemStyle: {
        				emphasis: {
        					shadowBlur: 10,
        					shadowOffsetX: 0,
        					shadowColor: 'rgba(0, 0, 0, 0.5)',
        				},
        				normal: { 
        					borderColor: "#FFFFFF", borderWidth: 3, 
        				}
        			}
        		}
        	]
        };
        //条形图19
        var option28 = {
            //color: ['#19696d'],
            title: {
                text: '企业进出口总值同比增速',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
            tooltip: {},
            xAxis: {
                data: ["民营企业","外商投资企业","国有企业"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: {
        		show:false,
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '额度',
                type: 'bar',
                data: [9.9,-0.7,1],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}%',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:10,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //条形图20
		var option29 = {
            //color: ['#19696d'],
            title: {
                text: '主要机电商品出口增速',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
        	// legend: {
        	// 	data:['单位：万亿元'],
        	// 	y:'top',
        	// 	x:'right',
        	// },
            tooltip: {},
            xAxis: {
                show:false,
            },
            yAxis: {
				 data: ["汽车","金属加工机床","便携式电脑","计算机设备"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
        		
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '增速',
                type: 'bar',
                data: [15.1,26.5,8,10.5],
        		label: {
        			normal: {
        				show: true,
        				position: 'inside',
        				formatter:'{c}%',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:80,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //饼图10
        var option30 = {
        	backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
        	title : {
        		text: '全国主要商品出口总值占比',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
        	},
        	tooltip : {
        		trigger: 'item',
        		formatter: "{a} <br/>{b} : {c} ({d}%)"
        	},
        	series : [
        		{
        			name: '占比',
        			type: 'pie',
        			radius : '70%',
        			center: ['50%', '50%'],
        			label:{
        				normal:{
        					formatter:'{b}\n{c}%',
        					color:'black',
        					position:'inside',
        					fontSize:12,
        					
        				}
        			},
        			data:[
        				// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
        				// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
        				{value:58.8, name:'机电产品'},
        				{value:18.2, name:'服装、玩具等7大类\n劳动密集型产品'},
        				{value:23, name:'其他'},
        			],
        			itemStyle: {
        				emphasis: {
        					shadowBlur: 10,
        					shadowOffsetX: 0,
        					shadowColor: 'rgba(0, 0, 0, 0.5)',
        				},
        				normal: { 
        					borderColor: "#FFFFFF", borderWidth: 3, 
        				}
        			}
        		}
        	]
        };
        //条形图21
        var option31 = {
            //color: ['#19696d'],
            title: {
                text: '主要商品出口总值',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
			// legend: {
			// 	data:['总值：万亿元','增长率：%'],
			// 	y:'top',
			// 	x:'right',
			// },
            tooltip: {},
            xAxis: {
                data: ["机电产品","服装、玩具等7大类\n劳动密集型产品"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: [
        		{
					type : 'value',
					name : '',
					axisLabel : {
					formatter: '{value} %'
					}
				},
				{
					type : 'value',
					name : '',
					axisLabel : {
					formatter: '{value} '
					}
				}
        	],
            series: [{
        		barWidth:20,
        		barGap:20,
                name: '总值：万亿元',
                type: 'bar',
                data: [2.21,0.69],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}万亿元',
        			}
        		},
            },
			{
				name:'增长率：%',
				type:'line',
				yAxisIndex: 1,
				data:[5.4, 6.5],
				label: {
					normal: {
						show: true,
						position: 'bottom',
						formatter:'{c}%',
					}
				},
			},
			],
        	grid:{//控制图形大小
        		top: 40,
        		x:30,
        		x2:20,
        		y2:60,
        		
        	}
        };
        //条形图22
        var option32 = {
            //color: ['#19696d'],
            title: {
                text: '主要进口商品数量',
        		x:'center',
        		y:'bottom',
        		textStyle:{
        			fontSize:15,
        			color:'black',
        		},
            },
        	legend: {
        		data:['单位：万吨'],
        		y:'top',
        		x:'right',
        	},
            tooltip: {},
            xAxis: {
                data: ["原油","天然气","成品油","铁矿砂","煤","大豆"],
        		axisLabel:{  
        			interval:0,//横轴信息全部显示  
        			//rotate:-15,//-15度角倾斜显示  
        		},
            },
            yAxis: {
        		show:false,
        	},
            series: [{
        		barWidth:20,
        		barGap:480,
                name: '单位：万吨',
                type: 'bar',
                data: [12100,2427,872,26100,7463,1675],
        		label: {
        			normal: {
        				show: true,
        				position: 'top',
        				formatter:'{c}',
        			}
        		},
            }],
        	grid:{//控制图形大小
        		top: 40,
        		x:10,
        		x2:20,
        		y2:60,
        		
        	}
        };
		//条形图23
		var option33 = {
		    //color: ['#19696d'],
		    title: {
		        text: '主要进口商品数量增速',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
			// legend: {
			// 	data:['单位：万亿元'],
			// 	y:'top',
			// 	x:'right',
			// },
		    tooltip: {},
		    xAxis: {
		        data: ["原油","天然气","成品油","铁矿砂","煤","大豆"],
		        axisLabel:{  
		        	interval:0,//横轴信息全部显示  
		        	//rotate:-15,//-15度角倾斜显示  
		        },
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '增速',
		        type: 'bar',
		        data: [8.2,17.8,5.8,-3.5,-1.8,-14],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//条形图24
		var option34 = {
		    //color: ['#19696d'],
		    title: {
		        text: '全国各地区外贸增速',
				x:'center',
				y:'top',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
			// legend: {
			// 	data:['单位：万亿元'],
			// 	y:'top',
			// 	x:'right',
			// },
		    tooltip: {},
		    xAxis: {
		        show:false,
		    },
		    yAxis: {
				data: ["全国总体","西部","中部","东北","东部"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
				
			},
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '增速',
		        type: 'bar',
		        data: [3.7,14.5,6.9,5.1,2.3],
				label: {
					normal: {
						show: true,
						position: 'inside',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:60,
				x2:10,
				y2:60,
				
			}
		};
		//条形图25
		var option35 = {
		    //color: ['#19696d'],
		    title: {
		        text: '综合保税区外贸增速',
				x:'center',
				// y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
			legend: {
				data:['综合保税区增速','全国增速'],
				y:'bottom',
				x:'center',
			},
		    tooltip: {},
		    xAxis: {
		        data: ["进出口","出口","进口"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				// barGap:20,
		        name: '综合保税区增速',
		        type: 'bar',
		        data: [11.7,8.4,6.7],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    },
			{
				barWidth:20,
				// barGap:20,
			    name: '全国增速',
			    type: 'bar',
			    data: [8.7,6.7,2.3],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 50,
				x:30,
				x2:20,
				y2:60,
				
			}
		};
		//饼图11
		var option36 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '综合保税区进出口5262.3亿元',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '占比',
					type: 'pie',
					radius : '70%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}\n{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:2150.5, name:'进口'},
						{value:3111.8, name:'出口'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//饼图12
		var option37 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '一季度，一般贸易进出口总额4.17万亿元',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总额',
					type: 'pie',
					radius : '70%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}万亿元',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:1.97, name:'进口总额'},
						{value:2.2, name:'出口总额'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图26
		var option38 = {
		    //color: ['#19696d'],
		    title: {
		        text: '一般贸易进出口增长且比重上升',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["进出口总额","出口总额","进口总额"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '比重',
		        type: 'bar',
		        data: [6,11.7,0.3],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//饼图13
		var option39 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总产量',
					type: 'pie',
					radius : '50%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}万亿元',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:1463, name:'猪肉产量'},
						{value:2000, name:'其他'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图27
		var option40 = {
		    //color: ['#19696d'],
		    title: {
		        text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["农业（种植业）\n增加值","禽蛋产量","牛奶产量"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:10,
		        name: '比重',
		        type: 'bar',
		        data: [4.4,2.3,2],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//条形图28
		var option41 = {
		    //color: ['#19696d'],
		    title: {
		        text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["猪牛羊禽肉\n总产量","猪肉产量","牛肉产量","羊肉产量","禽肉产量"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '产量',
		        type: 'bar',
		        data: [-2.8,-5.2,1.7,1.4,2.1],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//条形图29
		var option42 = {
		    //color: ['#19696d'],
		    title: {
		        text: '第三产业增加值同比增长',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["租赁和商务\n服务业","金融业","住宿和\n餐饮业","批发和\n零售业"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: {
				show:false,
			},
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '产量',
		        type: 'bar',
		        data: [8.3,7,6,5.8],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
		    }],
			grid:{//控制图形大小
				top: 10,
				x:10,
				x2:20,
				y2:60,
				
			}
		};
		//饼图14-inner
		var option43 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '第三产业增加值\n占国内生产总值57.3%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:13,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总额',
					type: 'pie',
					radius : '70%',
					center: ['50%', '35%'],
					label:{
						normal:{
							formatter:'{d}',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:57.3, name:'第三产业'},
						{value:42.7, name:'其他'},
						
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//饼图15-inner
		var option44 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '第三产业增长对国内生产\n总值增长贡献率为61.3%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:13,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总额',
					type: 'pie',
					radius : '70%',
					center: ['50%', '35%'],
					label:{
						normal:{
							formatter:'{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:61.3, name:'第三产业'},
						{value:38.7, name:'其他'},
						
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		
		//饼图16-inner
		var option45 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '最终消费支出增长对经济\n增长贡献率为65.1%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:13,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总额',
					type: 'pie',
					radius : '70%',
					center: ['50%', '35%'],
					label:{
						normal:{
							formatter:'{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:65.1, name:'第三产业'},
						{value:34.9, name:'其他'},
						
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//饼图17-inner
		var option46 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '在全部居民最终消费支出\n中服务消费占比为47.7%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:13,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总额',
					type: 'pie',
					radius : '70%',
					center: ['50%', '35%'],
					label:{
						normal:{
							formatter:'{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:47.7, name:'第三产业'},
						{value:52.3, name:'其他'},
						
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图30
		var option47 = {
		    //color: ['#19696d'],
		    title: {
		        text: '一季度房地产相关资金情况',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
		    },
			// legend: {
			// 	data:['总值：万亿元','增长率：%'],
			// 	y:'top',
			// 	x:'right',
			// },
		    tooltip: {},
		    xAxis: {
		        data: ["全国房地产\n开发投资","全国商品房\n销售额"],
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					//rotate:-15,//-15度角倾斜显示  
				},
		    },
		    yAxis: [
				{
					type : 'value',
					name : '',
					axisLabel : {
					formatter: '{value} '
					}
				},
				{
					type : 'value',
					name : '',
					axisLabel : {
					formatter: '{value}% '
					}
				}
			],
		    series: [{
				barWidth:20,
				barGap:20,
		        name: '总值：亿元',
		        type: 'bar',
		        data: [2.21,0.69],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}亿元',
					}
				},
		    },
			{
				name:'增长率：%',
				type:'line',
				yAxisIndex: 1,
				data:[5.4, 6.5],
				label: {
					normal: {
						show: true,
						position: 'bottom',
						formatter:'同比增长{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//条形图31
		var option48 = {
			//color: ['#19696d'],
			title: {
			    text: '一季度全国城镇调查失业率',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["1月","2月","3月"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:20,
				barGap:20,
			    name: '总值：亿元',
			    type: 'bar',
			    data: [5.1,5.3,5.2],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//条形图32-10-1
		var option49 = {
			//color: ['#19696d'],
			title: {
			    text: '一季度发用电量同比增长',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["全国发电量","全国用电量"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:20,
				barGap:20,
			    name: '增长率',
			    type: 'bar',
			    data: [4.2,5.5],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//条形图33-10-2
		var option50 = {
			//color: ['#19696d'],
			title: {
			    text: '全国用电量同比增长情况',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["第一产业","第二产业","第三产业","居民生活用电量"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:20,
				barGap:20,
			    name: '用电量',
			    type: 'bar',
			    data: [6.8,3,10.2,11],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//条形图34-10-3
		var option51 = {
			//color: ['#19696d'],
			title: {
			    text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["全国市场化交易电量同比增长"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:50,
				barGap:20,
			    name: '增长率',
			    type: 'bar',
			    data: [24.6],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//条形图35-10-4
		var option52 = {
			//color: ['#19696d'],
			title: {
			    text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["电力直接交易同比增长"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:45,
				barGap:20,
			    name: '增长率',
			    type: 'bar',
			    data: [40.3],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}%',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:10,
				y2:40,
				
			}
		};
		//饼图18-10-1
		var option53 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '占全社会\n用电量的26.8%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总产量',
					type: 'pie',
					radius : '50%',
					center: ['50%', '60%'],
					label:{
						normal:{
							formatter:'{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:26.8, name:'交易电量'},
						{value:73.2, name:'其他'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//饼图19-10-2
		var option54 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '占经营性行业\n用电量的50.5%',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总产量',
					type: 'pie',
					radius : '50%',
					center: ['50%', '60%'],
					label:{
						normal:{
							formatter:'{d}%',
							color:'black',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:50.5, name:'交易电量'},
						{value:49.5, name:'其他'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		//条形图36-11-1
		var option55 = {
			//color: ['#19696d'],
			title: {
			    text: '',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["截至3月底，全国信用信息共享平台\n累计归集各类信用信息"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:45,
				barGap:20,
			    name: '数量',
			    type: 'bar',
			    data: [323.48],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}亿条',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:10,
				x2:10,
				y2:40,
				
			}
		};
		//条形图37-11-2
		var option56 = {
			//color: ['#19696d'],
			title: {
			    text: '截至3月底，全国法院累计发布失信名单人次',
				x:'center',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip: {},
			xAxis: {
			    data: ["失信被执行人名单","限制购买飞机票","限制购买动车高铁票"],
				axisLabel:{  
					interval:0,//横轴信息全部显示    
				},
			},
			yAxis: {
				show:false,
			},
			series: [{
				barWidth:50,
				barGap:20,
			    name: '人次',
			    type: 'bar',
			    data: [1349,2047,571],
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter:'{c}万人次',
					}
				},
			},
			],
			grid:{//控制图形大小
				top: 40,
				x:30,
				x2:30,
				y2:60,
				
			}
		};
		//饼图20-11-1
		var option57 = {
			backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
			title : {
				text: '截至3月底，“信用中国”网站公示\n行政许可、行政处罚等\n信用信息约1.5亿条',
				x:'center',
				y:'bottom',
				textStyle:{
					fontSize:15,
					color:'black',
				},
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series : [
				{
					name: '总产量',
					type: 'pie',
					radius : '50%',
					center: ['50%', '50%'],
					label:{
						normal:{
							formatter:'{b}\n{c}亿条',
							color:'yellow',
							position:'inside',
							fontSize:12,
							
						}
					},
					data:[
						// {value:14388, name:'乡村消费品零售额', itemStyle:{color: '#19696d'}},
						// {value:83402, name:'城镇消费品零售额', itemStyle:{color: '#448588'}},
						{value:0.3853, name:'行政处罚信息'},
						{value:1.11, name:'行政许可信息'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
						normal: { 
							borderColor: "#FFFFFF", borderWidth: 3, 
						}
					}
				}
			]
		};
		
		
		// 使用刚指定的配置项和数据显示图表。
		
		var optionArray = new Array();
		optionArray[0] = option1;
		optionArray[1] = option2;
		optionArray[2] = option3;
		optionArray[3] = option4;
		optionArray[4] = option5;
		optionArray[5] = option6;
		optionArray[6] = option7;
		optionArray[7] = option8;
		optionArray[8] = option9;
		optionArray[9] = option10;
		optionArray[10] = option11;
		optionArray[11] = option12;
		optionArray[12] = option13;
		optionArray[13] = option14;
		optionArray[14] = option15;
		optionArray[15] = option16;
		optionArray[16] = option17;
		optionArray[17] = option18;
		optionArray[18] = option19;
		optionArray[19] = option20;
		optionArray[20] = option21;
		optionArray[21] = option22;
		optionArray[22] = option23;
		optionArray[23] = option24;
		optionArray[24] = option25;
		optionArray[25] = option26;
		optionArray[26] = option27;
		optionArray[27] = option28;
		optionArray[28] = option29;
		optionArray[29] = option30;
		optionArray[30] = option31;
		optionArray[31] = option32;
		optionArray[32] = option33;
		optionArray[33] = option34;
		optionArray[34] = option35;
		optionArray[35] = option36;
		optionArray[36] = option37;
		optionArray[37] = option38;
		optionArray[38] = option39;
		optionArray[39] = option40;
		optionArray[40] = option41;
		optionArray[41] = option42;
		optionArray[42] = option43;
		optionArray[43] = option44;
		optionArray[44] = option45;
		optionArray[45] = option46;
		optionArray[46] = option47;
		optionArray[47] = option48;
		optionArray[48] = option49;
		optionArray[49] = option50;
		optionArray[50] = option51;
		optionArray[51] = option52;
		optionArray[52] = option53;
		optionArray[53] = option54;
		optionArray[54] = option55;
		optionArray[55] = option56;
		optionArray[56] = option57;
		//循环加载配置项
		for (i=0;i<chartNum;i++) {
			chartsArray[i].setOption(optionArray[i]);
		}

		function changeTheme(themeCode){
			//更换主题
			console.log(themeCode);
			for (i=0;i<chartNum;i++) {
				chartsArray[i].dispose();
				if (themeCode==1) {
					chartsArray[i] = echarts.init(document.getElementById('chart'+(i+1)),'macarons');
					console.log('macarons');
				} else{
					chartsArray[i] = echarts.init(document.getElementById('chart'+(i+1)),'infographic');
					console.log('infographic');
					}
			}
			for (i=0;i<chartNum;i++) {
				chartsArray[i].setOption(optionArray[i]);
				console.log('themeChange');
			}
		}