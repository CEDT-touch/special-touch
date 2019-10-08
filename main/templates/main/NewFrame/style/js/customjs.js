function uploadFile(createReportInfo){
	var files = document.getElementById('pic').files; //files是文件选择框选择的文件对象数组
	 
	if(files.length == 0){
		var no = '未选择文件';
		console.log(no);
		return no;
	}else{
		var form = new FormData(),
		    url = 'http://127.0.0.1:8000/report/upload/', //服务器上传地址
		    file = files[0];
		form.append('file', file);
		form.append('type',createReportInfo['reportType']);
		form.append('name',createReportInfo['reportType']);
		 
		var xhr = new XMLHttpRequest();
		xhr.open("post", url, true);
		 
		//上传进度事件
		xhr.upload.addEventListener("progress", function(result) {
		    if (result.lengthComputable) {
		        //上传进度
		        var percent = (result.loaded / result.total * 100).toFixed(2); 
		    }
		}, false);
		 
		xhr.addEventListener("readystatechange", function() {
		    var result = xhr;
		    if (result.status != 200) { //error
		        console.log('上传失败', result.status, result.statusText, result.response);
		    } 
		    else if (result.readyState == 4) { //finished
		        console.log('上传成功', result);
		    }
		});
		xhr.send(form); //开始上传
	} 
}

