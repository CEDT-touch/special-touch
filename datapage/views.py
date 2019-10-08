from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.


def index(request):
    """
        主页面
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('datapage/index.html')

    # 测试数据
    p = {'one': '数据列表1'}

    # 判断要显示哪个页面
    if request.method == 'GET' and request.GET.get('T'):
        # 接收参数并赋值
        contentType = request.GET.get('T')
    else:
        # 默认显示
        contentType = 'welcome'

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p, 'contentType': contentType}
    # 返回请求
    return HttpResponse(template.render(context, request))