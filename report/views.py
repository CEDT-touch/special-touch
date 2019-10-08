import json

from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader

from report.customFunction import set_chart_option,getZipData
from .models import TemplateData, PieData
from django.utils.safestring import mark_safe
from pyecharts.charts import *
from django.db import connection, transaction

# Create your views here.


def index(request):
    """
        主页面
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('report/preview-2.html')

    # 测试数据
    p = {'one': '数据列表1'}

    # 从数据库中读取数据
    mydata = TemplateData.objects.all().values()
    # 阻止django自动转义html
    templateDetail_1 = mark_safe(mydata[0]['template_detail'].format('666', '999', '888', '777'))
    templateName_1 = mark_safe(mydata[0]['template_name'])
    templateDetail_2 = mark_safe(mydata[1]['template_detail'])
    templateName_2 = mark_safe(mydata[1]['template_name'])
    templateDetail_3 = mark_safe(mydata[2]['template_detail'])
    templateName_3 = mark_safe(mydata[2]['template_name'])
    templateDetail_4 = mark_safe(mydata[3]['template_detail'])
    templateName_4 = mark_safe(mydata[3]['template_name'])
    yourdata = {'D1': templateDetail_1, 'N1': templateName_1, 'D2': templateDetail_2, 'N2': templateName_2,
                'D3': templateDetail_3, 'N3': templateName_1, 'D4': templateDetail_4, 'N4': templateName_4}

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p, 'database': yourdata}
    # 返回请求
    return HttpResponse(template.render(context, request))


def new_report(request):
    """
        新建报告，模板2
        在这里读取数据库中该模板相关参数的初始配置参数并渲染到模板中
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('report/newReport/index.html')

    # 测试数据
    p = {'one': '测试'}

    # 获取报告id
    if request.GET.get('id'):
        print('there is a get value')
        report_id = request.GET['id']
        print(report_id)
    else:
        print('there is no get value')

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p}
    # 返回请求
    return HttpResponse(template.render(context, request))


def get_data(request):
    """
    获取数据
    :param request:POST得来的数据，date为数据项的id，chart为哪个图表数据表
    :return:
    """
    cursor = connection.cursor()
    # 查询数据
    cursor.execute("SELECT * FROM report_piedata WHERE id = %s", request.POST['date'])
    mydata = cursor.fetchone()
    # print(request.POST['chart'])
    # 饼图的option
    ppp = {
        'backgroundColor': 'rgba(128, 128, 128, 0)',
        'title': {
            'text': mydata[11],
            'x': 'center',
            'textStyle': {
                'fontSize': 14,
            },
        },
        'tooltip': {
            'trigger': 'item',
            'formatter': "{a} <br/>{b} : {c} ({d}%)"
        },
        'series': [
            {
                'name': '各产业总值与占比',
                'type': 'pie',
                'radius': mydata[13],
                'center': ['50%', '40%'],
                'label': {
                    'normal': {
                        'formatter': '{b}:\n{c}亿元，\n{d}%',
                    }
                },
                'data': [
                    {'value': mydata[7], 'name': mydata[4]},
                    {'value': mydata[8], 'name': mydata[5]},
                    {'value': mydata[9], 'name': mydata[6]}
                ],
                'itemStyle': {
                    'emphasis': {
                        'shadowBlur': 10,
                        'shadowOffsetX': 0,
                        'shadowColor': 'rgba(0, 0, 0, 0.5)',
                    }
                }
            }
        ]
    }
    location = {'top': mydata[10], 'left': mydata[12]}
    context = {'jjj': '666', 'option': ppp, 'chartLocation': location}
    return JsonResponse(context, safe=False)


def get_data_for_bar(request):
    """
    获取数据
    :param request:POST得来的数据，date为数据项的id，chart为哪个图表数据表
    :return:
    """
    cursor = connection.cursor()
    # 查询数据
    cursor.execute(
        "SELECT * FROM ccid.national_economic_performance WHERE sub_report_code = %s and index_abbreviation = %s",
        request.POST['sub_report_code', 'index_abbreviation'])
    mydata = cursor.fetchone()
    # print(request.POST['chart'])
    # 条形图的option
    ppp = {
        'backgroundColor': 'rgba(128, 128, 128, 0)',
        'title': {
            'text': mydata[11],
            'x': 'center',
            'textStyle': {
                'fontSize': 14,
            },
        },
        'tooltip': {
            'trigger': 'item',
            'formatter': "{a} <br/>{b} : {c} ({d}%)"
        },
        'series': [
            {
                'name': '各产业总值与占比',
                'type': 'pie',
                'radius': mydata[13],
                'center': ['50%', '40%'],
                'label': {
                    'normal': {
                        'formatter': '{b}:\n{c}亿元，\n{d}%',
                    }
                },
                'data': [
                    {'value': mydata[7], 'name': mydata[4]},
                    {'value': mydata[8], 'name': mydata[5]},
                    {'value': mydata[9], 'name': mydata[6]}
                ],
                'itemStyle': {
                    'emphasis': {
                        'shadowBlur': 10,
                        'shadowOffsetX': 0,
                        'shadowColor': 'rgba(0, 0, 0, 0.5)',
                    }
                }
            }
        ]
    }
    location = {'top': mydata[10], 'left': mydata[12]}
    context = {'jjj': '666', 'option': ppp, 'chartLocation': location}
    return JsonResponse(context, safe=False)


def select_data(request):
    """
        读取选择数据
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('report/newReport/selectData.html')
    type = request.GET['chartType']
    print(type)
    # 从数据库中读取数据
    mydata = PieData.objects.all().values()
    aa = json.dumps(mydata[0])

    p = []
    # 封装从数据库中读取出的数据
    for i in mydata:
        # print(i)
        p.append(i)

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p, 'dd': aa}
    # 返回请求
    return HttpResponse(template.render(context, request))


def save_data(request):
    """
    保存报告的数据
    :param request:
    :return:
    """
    cursor = connection.cursor()
    # # 查询数据
    # cursor.execute("SELECT * FROM report_piedata WHERE id = %s", request.POST['date'])
    # mydata = cursor.fetchone()
    # print(request.POST['changedData'])
    # 获取传递过来的数据并解码
    changedData = request.POST['changedData']
    changedData = json.loads(changedData)
    # 数据库更新，只针对饼图的，待编号修改完毕后可加入连续循环
    for i in range(1):
        chart = 'chart' + str((i + 1))
        # print(changedData[chart]['radius'])
        if changedData[chart]['top'] == '' or changedData[chart]['left'] == '':
            print('top or left is null')
            cursor.execute("UPDATE report_piedata SET " + "pie_title='" + changedData[chart]['title'] + "',pie_size='"
                           + changedData[chart]['radius'] + "' WHERE id=1")
        else:
            cursor.execute("UPDATE report_piedata SET pie_top=" + changedData[chart]['top'] + ",pie_left="
                           + changedData[chart]['left'] + ",pie_title='" + changedData[chart][
                               'title'] + "',pie_size='"
                           + changedData[chart]['radius'] + "' WHERE id=1")
    context = {'jjj': '666'}
    return JsonResponse(context, safe=False)


def readReport2CatagoryAndChartDataFromDatabase(request):
    cursor = connection.cursor()
    # 查询数据
    cursor.execute(
        "SELECT * FROM report_catalog WHERE report_id = (SELECT id FROM report_main WHERE year_of_data_source = %s and quater_of_data_source = %s)",
        [request.POST['year'], request.POST['quater']])
    catagoriesList = cursor.fetchall()

    cursor.execute(
        "SELECT report_chart_data.report_id, report_chart_data.catalog_id, report_chart_data.sub_figure_code,"
        "report_chart_data.show_order, report_chart_data.index_full_name, report_chart_data.index_abbreviation, "
        "report_chart_data.index_value, report_chart_data.index_measurement, report_chart_data.remark,"
        "report_chart_position_data._top, report_chart_position_data._left, report_chart_position_data._radius, report_chart_position_data.chart_title "
        "FROM report_chart_data LEFT OUTER JOIN report_chart_position_data "
        "On report_chart_data.report_id = report_chart_position_data.report_id "
        "and report_chart_data.catalog_id = report_chart_position_data.catalog_id "
        "and report_chart_data.sub_figure_code = report_chart_position_data.sub_figure_code "
        "where report_chart_data.report_id = (SELECT id FROM report_main WHERE year_of_data_source = %s "
        "and quater_of_data_source = %s) order by catalog_id, sub_figure_code, show_order",
        [request.POST['year'], request.POST['quater']])
    chartDataList = cursor.fetchall()

    context = {'catagoriesList': catagoriesList, 'chartDataList': chartDataList}
    return JsonResponse(context, safe=False)


def readReport2ChartDataFromDatabase(request):
    cursor = connection.cursor()
    # 查询数据
    # cursor.execute("SELECT * FROM report_chart_data where report_id = (SELECT id FROM report_main WHERE year_of_data_source = %s and quater_of_data_source = %s) order by catalog_id, sub_figure_code, show_order", [request.POST['year'],request.POST['quater']])
    cursor.execute(
        "SELECT report_chart_data.report_id, report_chart_data.catalog_id, report_chart_data.sub_figure_code,"
        "report_chart_data.show_order, report_chart_data.index_full_name, report_chart_data.index_abbreviation, "
        "report_chart_data.index_value, report_chart_data.index_measurement, report_chart_data.remark,"
        "report_chart_position_data._top, report_chart_position_data._left, report_chart_position_data._radius "
        "FROM report_chart_data LEFT OUTER JOIN report_chart_position_data "
        "On report_chart_data.report_id = report_chart_position_data.report_id "
        "and report_chart_data.catalog_id = report_chart_position_data.catalog_id "
        "and report_chart_data.sub_figure_code = report_chart_position_data.sub_figure_code "
        "where report_chart_data.report_id = (SELECT id FROM report_main WHERE year_of_data_source = %s "
        "and quater_of_data_source = %s) order by catalog_id, sub_figure_code, show_order",
        [request.POST['year'], request.POST['quater']])
    chartDataList = cursor.fetchall()

    context = {'chartDataList': chartDataList}
    return JsonResponse(context, safe=False)


def report_3(request):
    """
        新建报告，模板3
        在这里读取数据库中该模板相关参数的初始配置参数并渲染到模板中
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('report/report3/index.html')

    # 测试数据
    p = {'one': '测试'}

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p}
    # 返回请求
    return HttpResponse(template.render(context, request))


def get_report3_data(request):
    """
    获取数据
    :param request:POST得来的数据，date为月份
    :return:
    """
    zipData = []
    cursor = connection.cursor()
    # 查询数据
    month = '08'
    sql_1 = "SELECT * FROM intelligent_manufacturing_report_content WHERE month = " + month
    sql_2 = "SELECT	category,COUNT(category) AS cateNum FROM intelligent_manufacturing_report_content WHERE month = '" + month + "'GROUP BY category"
    sql_3 = "SELECT	* FROM	intelligent_manufacturing_report_content WHERE	category = '综合动态' ORDER BY	`day`,time ASC"
    cursor.execute(sql_1)
    mydata = cursor.fetchall()

    # #封装目录数据
    cursor.execute(sql_2)
    testdata = cursor.fetchall()
    for i, categoryName in enumerate(testdata):
        # print(categoryName[0])
        zipData.append(['category', i + 1, categoryName[0], ''])
        tempSql = "SELECT title,content,source  FROM	intelligent_manufacturing_report_content WHERE	category = '" + \
                  categoryName[0] + "' ORDER BY`day`,time ASC"
        cursor.execute(tempSql)
        groupdata = cursor.fetchall()
        for a, titleName in enumerate(groupdata):
            zipData.append(['title', a + 1, titleName[0], titleName[2], titleName[1], categoryName[0], ''])

    # print(zipData)

    # print(testdata[0][0])

    # #测试部分

    itemNum = len(mydata)  # 记录个数

    # print(request.POST['date'])

    context = {'content': zipData, 'itemNum': itemNum}
    return JsonResponse(context, safe=False)


def report_4(request):
    """
        新建报告，模板4及以后的
        在这里读取数据库中该模板相关参数的初始配置参数并渲染到模板中
    :param request:
    :return:
    """
    # 设置初始值
    report_id = 1
    report_type = 4
    # 获取报告id
    if request.GET.get('id') and request.GET.get('type'):
        print('there is a get value')
        report_id = request.GET['id']
        # print(report_id)
        report_type = request.GET.get('type')
    else:
        print('there is no get value')

    # 加载指定的模板
    template_name = 'report'+report_type
    print(template_name)
    template = loader.get_template('report/'+template_name+'/index.html')

    # 传递报告id数据
    data = ['test_data', report_id]
    data = json.dumps(data)

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': data}
    # 返回请求
    return HttpResponse(template.render(context, request))


def get_report4_data(request):
    """
    获取数据
    :param request:POST得来的数据，report_id为指定的报告数据库id
    :return:
    """
    cursor = connection.cursor()
    # 测试客户端传来的数据，指定的报告的主键值
    print(request.POST['report_id'])

    # 测试数据
    tabledata = [6, 4, [['表1 2018年全球销售额TOP20半导体厂商（单位：亿美元）'],
                        ['排名', '公司名称', '国家', '2018销售额', '市场份额'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['1', '三星电子', '韩国', '736.5', '15.5%'],
                        ['2', '三星电子', '韩国', '736.5', '15.5%'],
                        ['3', '三星电子', '韩国', '736.5', '15.5%'], ], 0, 2, '国内半导体产业盈利情况分析', 0]


    #######################
    # chart test data
    chart_bar_data = {
        'title_text': '这里是自定义标题',
        'legend_data': ['标签名1', '标签名2', '标签名3'],    # 该数据由下面的series查询后抽取得出
        'xAxis_data': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        'yAxis': [{'name': 'y轴标签1', 'min': 0, 'max': 250, 'axisLabel_formatter': '{value} ml'},
                  {'name': 'y轴标签2', 'min': 0, 'max': 25, 'axisLabel_formatter': '{value} °C'}
                  ],
        'series': [{'name': '标签名1',
                    'type': 'bar',
                    'yAxisIndex': 0,
                    'data': [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                   {'name': '标签名2',
                    'type': 'bar',
                    'yAxisIndex': 0,
                    'data': [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                   {'name': '标签名3',
                    'type': 'line',
                    # 所使用的y轴，当存在多个y轴时有效，默认为0
                    'yAxisIndex': 1,
                    'data': [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    },
                   ]
    }

    chart_pie_data = {
        'title_text': '这里是自定义标题',
        'series_name': '比例名称',
        'series_label_normal': '{b}:\n{c}亿元，\n{d}%',
        'series_data': [
                        {'value': 20, 'name': '自定义名称1'},
                        {'value': 30, 'name': '自定义名称2'},
                        {'value': 30, 'name': '自定义名称3'},
        ]
    }
    #######################

    # 数据库查询饼图数据并进行封装
    zipData= getZipData(1)
    # print(zipData)
    context = {'content': 'ok', 'data': zipData}
    return JsonResponse(context, safe=False)


def odddata(sql):
    # 数据获取与排序
    # 1.数据库查询
    oddData = []
    cursor = connection.cursor()
    sql_1 = sql
    cursor.execute(sql_1)
    mydata = cursor.fetchall()
    # 2.对数据进行排序
    m = list(mydata)
    # dataok = 0
    for i in range(len(m) - 1):
        for j in range(0, len(m) - i - 1):
            y = list(m[j])
            l = list(m[j + 1])
            if y[0] > l[0]:
                m[j + 1] = y
                m[j] = l
    # print(m)
    for i in range(len(m)):
        m[i] = list(m[i])
        m[i].append(0)
    return m


def upload_file(request):
    """
    获取上传数据及文件
    :param request:POST得来的数据，date为月份
    :return:
    """

    if request.method == 'POST' and request.POST.get('name') and request.POST.get('type') and request.POST.get('file'):
        # 接收参数并赋值
        contentType = request.POST.get('name')
    else:
        # 默认显示
        contentType = 'welcome'
    print(contentType)

    context = {'content': 'ooo', 'itemNum': 123}
    return JsonResponse(context, safe=False)
