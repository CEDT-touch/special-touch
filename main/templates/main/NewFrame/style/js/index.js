 $(document).ready(function() {
        $('.modal').MultiStep({
            title:'新建报告',
        	data:[{
        		content:`<small>请选择报告类型:</small><br><br>
				  <!-- 下拉框 -->
				  <div class="htmleaf-content">	
				  			<div style="width: 50%; float:left; box-sizing: border-box; padding-left: 5%;">
				  				<input type="text" id="justAnotherInputBox" placeholder="输入报告名可进行搜索"/>
				  			</div>
				  </div>
                `,
                label:'Step 1<br>选择报告类型',
        	},{
                content:`<small>请填写报告名称</small><br><br>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="输入报告名称">
                 </div>
                `,
				label:'Step 2<br>设置报告名称'
            },
			// {
   //      		content:`<form id="form">
			// 				<input id="form-tags-1" name="tags-1" type="text" value="">
			// 			</form>
   //              `,
   //      		skip:true,
			// 	label:'Step 3<br>添加关键字'
   //      	},
			{
        		content:`<small>请选择数据文件</small><br><br>
        		<div class="form-group">
        		    <!-- 文件上传 -->
        		    <input class="createReport-file"  type="file" name="pic" id="pic" accept=".xls,.xlsx" />
        		    <small id="emailHelp" class="form-text text-muted">支持的文件类型:xls,xlsx</small>
        		  </div>
        		`,
				label:'Step 4<br>提交数据文件'
        	}],
            final:'报告属性设置完成，点击“生成”即可生成报告',
			finalLabel:'完成',
            modalSize:'xl',
			prevText:'上一步',
			nextText:'下一步',
			finishText:'生成',
			skipText:'跳过',
			onClose(){
				var reportType = comboTree2.getSelectedItemsTitle();
				var reportName = document.getElementById("exampleInputEmail1").value;
				createReportInfo['reportType'] = reportType;
				createReportInfo['reportName'] = reportName;
				console.log('窗口已经关闭');
				console.log(createReportInfo);
				uploadFile(createReportInfo)
				location.reload();
					}
        });
    });
	
