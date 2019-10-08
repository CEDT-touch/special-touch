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
    template = loader.get_template('main/BeUsed/index.html')

    # 测试数据
    p = {'one': '数据列表1'}
    # 侧边栏选中颜色
    color = {'dataList': '', 'dataUpload': '', 'pie': '', 'polar': '', 'radar': '', 'graph': '', 'sankey': '',
             'wordCloud': '', 'bar': '', 'line': '', 'scatter': '', 'tree': '', 'newReport': '', 'reportManage': ''}
    # 侧边栏展开状态、颜色
    status = {'ziyuan': '', 'tubiao': '', 'baogao': '', 'color': color}

    # 判断要显示哪个页面
    if request.method == 'GET' and request.GET.get('T'):
        # 接收参数并赋值
        contentType = request.GET.get('T')
    else:
        # 默认显示
        contentType = 'dataList'

    # 设置侧边栏的效果显示
    if contentType == 'dataList':
        status['ziyuan'] = 'show'
        status['color']['dataList'] = 'background-color:#eaecf4'
    elif contentType == 'dataUpload':
        status['ziyuan'] = 'show'
        status['color']['dataUpload'] = 'background-color:#eaecf4'
    elif contentType == 'pie':
        status['tubiao'] = 'show'
        status['color']['pie'] = 'background-color:#eaecf4'
    elif contentType == 'polar':
        status['tubiao'] = 'show'
        status['color']['polar'] = 'background-color:#eaecf4'
    elif contentType == 'radar':
        status['tubiao'] = 'show'
        status['color']['radar'] = 'background-color:#eaecf4'
    elif contentType == 'sankey':
        status['tubiao'] = 'show'
        status['color']['sankey'] = 'background-color:#eaecf4'
    elif contentType == 'graph':
        status['tubiao'] = 'show'
        status['color']['graph'] = 'background-color:#eaecf4'
    elif contentType == 'wordCloud':
        status['tubiao'] = 'show'
        status['color']['wordCloud'] = 'background-color:#eaecf4'
    elif contentType == 'bar':
        status['tubiao'] = 'show'
        status['color']['bar'] = 'background-color:#eaecf4'
    elif contentType == 'line':
        status['tubiao'] = 'show'
        status['color']['line'] = 'background-color:#eaecf4'
    elif contentType == 'scatter':
        status['tubiao'] = 'show'
        status['color']['scatter'] = 'background-color:#eaecf4'
    elif contentType == 'tree':
        status['tubiao'] = 'show'
        status['color']['tree'] = 'background-color:#eaecf4'
    elif contentType == 'newReport':
        status['baogao'] = 'show'
        status['color']['newReport'] = 'background-color:#eaecf4'
    elif contentType == 'reportManage':
        status['baogao'] = 'show'
        status['color']['reportManage'] = 'background-color:#eaecf4'

    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p, 'contentType': contentType, 'status': status}
    # 返回请求
    return HttpResponse(template.render(context, request))
