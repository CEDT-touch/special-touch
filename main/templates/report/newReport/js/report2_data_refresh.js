function show_catagories(data) {
	var ca_list = document.getElementById('ca-list');
	for (dataNumber = 0; dataNumber < data.length; dataNumber++) {
		var div = document.createElement('div');
		div.setAttribute('class','itemsInCategory');
		div.id = 'ca-item' + dataNumber;
		var p = document.createElement('p');
		p.setAttribute('class','numOfItemsInCategory');
		p.id = 'ca-count' + dataNumber;
		p.innerText = dataNumber + 1;
		div.appendChild(p);
		var p1 = document.createElement('p');
		p1.setAttribute('class','contentOfItemsInCategory');
		p1.id = 'ca-' + dataNumber;
		p1.innerText = data[dataNumber][3];
		div.appendChild(p1);
		ca_list.appendChild(div);
	}
}


function getCatagoryAndChartDataOfReport2(){
    //联网获取数据库的数据

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/loadCatagories/",
        data: {
            "year": '2019',//用于获取相应的月份
            "quater":'A',
        },
        success: function (result) {
            console.log('data has been got');
            console.log(result);
            show_catagories(result['catagoriesList']);
            updateAllChartDataOfReport2(result['catagoriesList'],result['chartDataList']);
            },
    });
}

function getChartDataOfReport2(){
    //联网获取数据库的数据

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/report/loadChartDataOfReport2/",
        data: {
            "year": '2019',//用于获取相应的月份
            "quater":'A',
        },
        success: function (result) {
            console.log(result);
            updateAllChartDataOfReport2(result['chartDataList']);
            },
    });
}