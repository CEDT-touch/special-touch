rownum = 18;
column = 3;
totalnumber = rownum*column;
chartnumber = 0;

//title
titlearray = ['2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',
'2019年一季度工业运行情况，增加值','2019年一季度工业运行情况，同比增长','2019年一季度工业运行情况，企业','2019年一季度工业运行情况，工业','重点产品产量同比增速',];

//begin to draw
// tr
for (var i = 0;i<rownum;i++) {
	var temptr =document.createElement('tr');
	
	// td
	for (var a = 0;a<column;a++) {
		var temptd = document.createElement('td');
		var temptitle = document.createElement('div');
		temptitle.className = 'chart-content-title';
		
		var tempicon = document.createElement('i');
		tempicon.className = 'fa fa-eercast';
		temptitle.appendChild(tempicon);
		
		var tempitemtitle = document.createElement('div');
		tempitemtitle.innerText = titlearray[chartnumber];
		tempitemtitle.style = 'display:inline-block;'
		temptitle.appendChild(tempitemtitle);
		
		
		
		var tempitem = document.createElement('div');
		tempitem.className = 'chart-content-item';
		tempitem.id = 'item'+chartnumber;
		chartnumber++;
		
		temptd.appendChild(temptitle);
		temptd.appendChild(tempitem);
		
		temptr.appendChild(temptd);
	}
	
	var charttable = document.getElementById('table2');
	charttable.appendChild(temptr);
}

