import os
import time

from django.shortcuts import render
import json
from random import randrange

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from pyecharts.globals import ThemeType
from rest_framework.views import APIView

from pyecharts.charts import *
from pyecharts import options as opts
from example.commons import Faker

import xlrd
import random
import pandas

# Create your views here.
from saidi.settings import BASE_DIR


def response_as_json(data):
    json_str = json.dumps(data)
    response = HttpResponse(
        json_str,
        content_type="application/json",
    )
    response["Access-Control-Allow-Origin"] = "*"
    return response


def json_response(data, code=200):
    data = {
        "code": code,
        "msg": "success",
        "data": data,
    }
    return response_as_json(data)


def get_data_from_xlsx(file_path):
    data = xlrd.open_workbook(file_path)
    table = data.sheet_by_index(0)
    res = []
    head = table.row_values(0)[1:]
    res.append(head)
    nrows = table.nrows
    for k in range(1, nrows):
        row_list = table.row_values(k)
        res.append([row_list[0], row_list[1:]])
    return res


JsonResponse = json_response


def pie_base() -> Pie:
    """
    pie初始化数据
    :return:
    """
    print([list(z) for z in zip(Faker.choose(), Faker.values())])
    c = (
        Pie()
            .add("", [list(z) for z in zip(Faker.choose(), Faker.values())])
            .set_global_opts(title_opts=opts.TitleOpts(title="Pie-基本示例"))
            .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
            .dump_options()
    )
    return c


def polar_base() -> Polar:
    """
    polar初始化数据
    :return:
    """
    data = [(i, random.randint(1, 100)) for i in range(101)]
    c = (
        Polar()
            .add("", data, type_="scatter", label_opts=opts.LabelOpts(is_show=False))
            .set_global_opts(title_opts=opts.TitleOpts(title="Polar-Scatter0"))
            .dump_options()
    )
    return c


def radar_base() -> Radar:
    value_bj = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
    ]
    value_sh = [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7],
        [89, 65, 78, 0.86, 51, 26, 8],
        [53, 33, 47, 0.64, 50, 17, 9],
        [80, 55, 80, 1.01, 75, 24, 10],
        [117, 81, 124, 1.03, 45, 24, 11],
        [99, 71, 142, 1.1, 62, 42, 12],
    ]
    c_schema = [
        {"name": "AQI", "max": 300, "min": 5},
        {"name": "PM2.5", "max": 250, "min": 20},
        {"name": "PM10", "max": 300, "min": 5},
        {"name": "CO", "max": 5},
        {"name": "NO2", "max": 200},
        {"name": "SO2", "max": 100},
    ]
    c = (
        Radar()
            .add_schema(schema=c_schema, shape="circle")
            .add("北京", value_bj, color="#f9713c")
            .add("上海", value_sh, color="#b3e4a1")
            .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
            .set_global_opts(title_opts=opts.TitleOpts(title="Radar-空气质量"))
            .dump_options()
    )
    return c


def sankey_base() -> Sankey:
    with open(os.path.join(BASE_DIR, 'static', 'file', "energy.json"), "r", encoding="utf-8") as f:
        j = json.load(f)
    c = (
        Sankey()
            .add(
            "sankey",
            nodes=j["nodes"],
            links=j["links"],
            linestyle_opt=opts.LineStyleOpts(opacity=0.2, curve=0.5, color="source"),
            label_opts=opts.LabelOpts(position="right"),
        )
            .set_global_opts(title_opts=opts.TitleOpts(title="Sankey-官方示例"))
            .dump_options()
    )
    return c


class PieChartView(APIView):
    """
    pie界面
    """

    def get(self, request, *args, **kwargs):
        return JsonResponse(json.loads(pie_base()))

    def post(self):
        pass

    def other(self):
        pass


class PolarChartView(APIView):
    """
    polar界面
    """

    def get(self, request, *args, **kwargs):
        return JsonResponse(json.loads(polar_base()))


class RadarChartView(APIView):
    def get(self, request, *args, **kwargs):
        return JsonResponse(json.loads(radar_base()))


class SankeyChartView(APIView):
    def get(self, request, *args, **kwargs):
        return JsonResponse(json.loads(sankey_base()))


@csrf_exempt
def refresh_charts(request):
    """
    接收ajax的图表全局参数并刷新图表效果、保存进数据库中
    :param request:
    :return:
    """
    if request.method == 'POST':
        # test = '测试是否成功'
        # print(test)

        # 获取通过ajax传递过来的数据
        title = request.POST['title']  # 标题
        # print(title)
        subtitle = request.POST['subtitle']  # 副标题
        pos_left = request.POST['pos_left']  # 标题水平位置
        pos_top = request.POST['pos_top']  # 标题竖直位置
        pos_left_lg = request.POST['pos_left_lg']  # 图例水平位置
        pos_top_lg = request.POST['pos_top_lg']  # 图例竖直位置
        orient = request.POST['orient']  # 图例朝向

        # 组装整理数据
        ttOpts = opts.TitleOpts(title=request.POST["title"], subtitle=request.POST["subtitle"],
                                pos_left=request.POST["pos_left"], pos_top=request.POST["pos_top"])
        lgOpts = opts.LegendOpts(pos_left=request.POST["pos_left_lg"], pos_top=request.POST["pos_top_lg"],
                                 orient=request.POST["orient"])
        toolOpts = opts.ToolboxOpts(is_show=True, pos_left="right", pos_top="middle", orient="vertical")

        # 配置图表
        pie = (
            Pie()
                .set_global_opts(title_opts=ttOpts, legend_opts=lgOpts, toolbox_opts=toolOpts)
                .dump_options()
        )

        # 以json格式返回数据
        return JsonResponse(json.loads(pie))
    else:
        test = '测试失败'
        print(test)
        return JsonResponse({'status': 1, 'msg': test})


def upload_file(request):
    """
    excel文件上传的数据处理
    :param request:
    :return:
    """
    try:
        if request.method == 'POST':
            # import pdb;pdb.set_trace()
            file_obj = request.FILES.get('file')
            # 图表类型
            print(request.POST['type'])
            print(request.FILES)
            # print(file_obj)

            # 设置文件路径
            path_str = os.path.join(BASE_DIR, 'static', 'file',
                                    time.strftime("%Y-%m-%d", time.localtime()), file_obj.name)
            # 设置文件夹路径
            path_str_dir = os.path.join(BASE_DIR, 'static', 'file',
                                        time.strftime("%Y-%m-%d", time.localtime()))
            # 创建文件夹
            isDirExit = os.path.exists(path_str_dir)
            if isDirExit:
                pass
            else:
                os.makedirs(path_str_dir)
            # 存储文件
            f = open(os.path.join(path_str), 'wb')
            # print(file_obj, type(file_obj))
            for chunk in file_obj.chunks():
                f.write(chunk)
            f.close()

            # 读取文件
            reader = pandas.read_excel(path_str)
            # 行数和列数
            # print(reader.shape)
            # 列名
            columns = list(reader.columns.values)
            # print(columns)
            # 第1行的数据
            columns_data = reader.iloc[0].values.tolist()
            # print(columns_data)

            # 返回读取值
            if request.POST['type'] == 'pie':
                excel_data = (
                    Pie()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'polar':
                excel_data = (
                    Polar()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'radar':
                excel_data = (
                    Radar()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'sankey':
                excel_data = (
                    Sankey()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'graph':
                excel_data = (
                    Graph()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'wordCloud':
                excel_data = (
                    WordCloud()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'bar':
                excel_data = (
                    Bar()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'line':
                excel_data = (
                    Line()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'scatter':
                excel_data = (
                    Scatter()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            elif request.POST['type'] == 'tree':
                excel_data = (
                    Tree()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            else:
                excel_data = (
                    Pie()
                        .add('', [list(z) for z in zip(columns, columns_data)])
                        .dump_options()
                )
            # print([list(z) for z in zip(columns, columns_data)])
            return JsonResponse(json.loads(excel_data))
    except Exception as e:
        print(e)
        return JsonResponse({'status': 1, 'msg': 'mm'})
