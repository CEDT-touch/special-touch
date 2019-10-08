function refresh_bar_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    var reversal_axis = document.getElementById("reversal_axis").value;
    var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_bar_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            "reversal_axis": reversal_axis,
            "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}

function refresh_charts() {
    ////更新图表全局参数
    //获取画布
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    //获取属性值
    var t_title = document.getElementById("title").value;
    //console.log(t_title);
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/charts/refresh/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
        },
        success: function (result) {
            chart.setOption(result.data);
            console.log(result)
        },
    });
}


function refresh_polar_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    // var reversal_axis = document.getElementById("reversal_axis").value;
    // var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_pie_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            // "reversal_axis": reversal_axis,
            // "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}

function refresh_line_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    var reversal_axis = document.getElementById("reversal_axis").value;
    var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_line_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            "reversal_axis": reversal_axis,
            "smooth": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}


function refresh_cloud_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    var reversal_axis = document.getElementById("reversal_axis").value;
    var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_cloud_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            "reversal_axis": reversal_axis,
            "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}


function refresh_radar_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    // var reversal_axis = document.getElementById("reversal_axis").value;
    // var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_radar_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            // "reversal_axis": reversal_axis,
            // "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}

function refresh_sankey_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    // var reversal_axis = document.getElementById("reversal_axis").value;
    // var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_sankey_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            // "reversal_axis": reversal_axis,
            // "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}


function refresh_scatter_charts() {
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var t_title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;
    var reversal_axis = document.getElementById("reversal_axis").value;
    var stack = document.getElementById("stack").value;

    var formData = new FormData($('#input-xlsx')[0]);

    // var chart_content = document.getElementById('bar');
    // var child = chart_content.querySelector("script");
    // chart_content.removeChild(child);
    // chart_content.innerText = "";
    // var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    // post_data();

    var file_f = document.getElementById("input-file").files;
    // alert(file_f);
    var file_name = file_f[0].name;
    // alert(file_name);

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/refresh_scatter_charts/",
        data: {
            "title": t_title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient,
            "reversal_axis": reversal_axis,
            "stack": stack,
            "file_name": file_name,
        },
        success: function (result) {
            chart.setOption(result.data);
        },
        // dataType: dataType
    });
}


function post_global_settings() {
    var title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var pos_left = document.getElementById("pos_left").value;
    var pos_top = document.getElementById("pos_top").value;
    var pos_left_lg = document.getElementById("pos_left_lg").value;
    var pos_top_lg = document.getElementById("pos_top_lg").value;
    var orient = document.getElementById("orient").value;

    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/getparams/globalparams/",
        data: {
            "title": title,
            "subtitle": subtitle,
            "pos_left": pos_left,
            "pos_top": pos_top,
            "pos_left_lg": pos_left_lg,
            "pos_top_lg": pos_top_lg,
            "orient": orient
        },
        // success: function (result) {
        //     chart.setOption(result.data);
        // },
        // dataType: dataType
    });
}

function post_data(type) {
    //////excel文件上传及处理函数
    var chart = echarts.init(document.getElementById('bar'), 'white', {renderer: 'canvas'});
    var formData = new FormData($('#input-xlsx')[0]);
    //传递图表类型
    formData.append('type',type);
    $.ajax({
        type: 'post',
        url: "http://127.0.0.1:8000/charts/refresh/upload/",
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        // async: false,
        // dataType: "json",
        success: function (data) {
            // alert(data["status"]);
            // var data_list = data["success"];
            console.log(data.data.series[0].data);
            chart.setOption(data.data);
            // alert(data_list);
            var data_list = data.data.series[0].data;
            var table = document.getElementById("dataTable");
            table.deleteTHead();
            var header = table.createTHead();
            var row1 = header.insertRow(0);
            var row2 = header.insertRow(1);
            console.log(data_list[0][0]);
            console.log(data_list.length);

            // 写入表头
            for (var i1 = 0; i1 < data_list.length; i1++) {
                 var cell1 = row1.insertCell(i1);
                cell1.innerHTML = data_list[i1]['name'];
             };
             // 写入数据
             for (var i1 = 0; i1 < data_list.length; i1++) {
                 var cell1 = row2.insertCell(i1);
                cell1.innerHTML = data_list[i1]['value'];
             };
        }
    });

}

$("#input-xlsx").on("fileuploaded", function (event, data) {
//        alert(JSON.stringify(data));
    var status = data['response']['status'];
    var msg = data['response']['msg'];
    if (status == 0) {
        alert(msg);
    }
    if (status != 0) {
        alert("上传失败，存在相同数据，请检查数据");
    }
});


// {/*<script lang="javascript" src="dist/xlsx.full.min.js"></script>*/}
/*
$.ajax(
        {
            url: "http://127.0.0.1:8000/getparams/get_table_data/",
            type: "POST",
            data: {
                "filename": "demoBar.xlsx"
            },
            async: false,
            dataType: "json",
            success: function (data) {
                // alert(data["data"]);
                var data_list = data["info"];
                console.log(data_list);
                // alert(data_list);
                var table = document.getElementById("dataTable");
                table.deleteTHead();
                var header = table.createTHead();
                var row1 = header.insertRow(0);
                for (var i1 = 0; i1 < data_list[0].length; i1++) {
                    var cell1 = row1.insertCell(i1);
                    cell1.innerHTML = data_list[0][i1];
                }
                for (var i = 1; i < data_list.length; i++) {
                    var row = table.insertRow(i);
                    for (var j = 0; j < data_list[i].length; j++) {
                        var cell = row.insertCell(j);
                        cell.innerHTML = data_list[i][j];
                    }
                }
            }
        });
        */