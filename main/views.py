from django.shortcuts import render,redirect,reverse
from django.http import HttpResponse
from django.template import loader
from main.fuction import report_remind
import json


# Create your views here.
def index(request):
    """
        主页面
    :param request:
    :return:
    """
    try:
        if request.session['msg'] == u'ok':
            # 登录状态
            thePass = 'ok'
            # 加载模板
            template = loader.get_template('main/NewFrame/index.html')

            # 判断要显示哪个页面
            if request.method == 'GET' and request.GET.get('T'):
                # 接收参数并赋值
                contentType = request.GET.get('T')
            else:
                # 默认显示
                contentType = 'welcome'

            # 新报告提醒

            remind = report_remind()
            print(remind)

            # 整合参数集合
            context = {'slogan': 'wonderful!', 'contentType': contentType, 'remind': remind,
                       'thePass': thePass}
            # 返回请求
            return HttpResponse(template.render(context, request))
        else:
            # 判断账号密码
            if request.method == 'POST' and request.POST.get('userid') and request.POST.get('psw'):
                # 接收参数并赋值
                userid = request.POST.get('userid')
                psw = request.POST.get('psw')
                remember = request.POST.get('remember')
            else:
                # 默认显示
                userid = 'nobody'
                psw = '123456'
                remember = False

            # print('用户名：'+userid)
            # print('密码'+psw)
            # print(remember)

            # 账号密码正确
            # 账号密码正确
            if userid == 'saidi' and psw == 'saidi123':
                thePass = 'ok'
                # 加载模板
                template = loader.get_template('main/NewFrame/index.html')

                # 写入会话参数
                # 登录标志
                request.session['msg'] = u'ok'
                # 用户名
                request.session['userid'] = userid
                # 关闭浏览器就清除session
                request.session.set_expiry(0)

                # 登录数据
                p = {'userid': userid}

                # 判断要显示哪个页面
                if request.method == 'GET' and request.GET.get('T'):
                    # 接收参数并赋值
                    contentType = request.GET.get('T')
                else:
                    # 默认显示
                    contentType = 'welcome'

                # 新报告提醒

                remind = report_remind()
                print(remind)

                # 整合参数集合
                context = {'slogan': 'wonderful!', 'data_list': p, 'contentType': contentType, 'remind': remind,
                           'thePass': thePass}
                # 返回请求
                return HttpResponse(template.render(context, request))

            # 账号密码不正确
            else:
                request.session['msg'] = u'no'
                # 返回登录页面
                return redirect('login')
    except:
        # 判断账号密码
        if request.method == 'POST' and request.POST.get('userid') and request.POST.get('psw'):
            # 接收参数并赋值
            userid = request.POST.get('userid')
            psw = request.POST.get('psw')
            remember = request.POST.get('remember')
        else:
            # 默认显示
            userid = 'nobody'
            psw = '123456'
            remember = False

        # print('用户名：'+userid)
        # print('密码'+psw)
        # print(remember)

        # 账号密码正确
        # 账号密码正确
        if userid == 'saidi' and psw == 'saidi123':
            thePass = 'ok'
            # 加载模板
            template = loader.get_template('main/NewFrame/index.html')

            # 写入会话参数
            request.session['msg'] = u'ok'
            request.session['userid'] = userid

            # 登录数据
            p = {'userid': userid}

            # 判断要显示哪个页面
            if request.method == 'GET' and request.GET.get('T'):
                # 接收参数并赋值
                contentType = request.GET.get('T')
            else:
                # 默认显示
                contentType = 'welcome'

            # 新报告提醒

            remind = report_remind()
            print(remind)

            # 整合参数集合
            context = {'slogan': 'wonderful!', 'data_list': p, 'contentType': contentType, 'remind': remind,
                       'thePass': thePass}
            # 返回请求
            return HttpResponse(template.render(context, request))

        # 账号密码不正确
        else:
            thePass = 'no'
            request.session['msg'] = u'no'
            # 返回登录页面
            return redirect('login')


def new_frame_test(request):
    """
        主页面
    :param request:
    :return:
    """
    # 加载模板
    template = loader.get_template('main/Frame/index.html')

    # 测试数据
    p = {'one': '数据列表1'}

    # 判断要显示哪个页面
    if request.method == 'GET' and request.GET.get('T'):
        # 接收参数并赋值
        contentType = request.GET.get('T')
    else:
        # 默认显示
        contentType = 'welcome'

    # 新报告提醒

    remind = report_remind()
    print(remind)


    # 整合参数集合
    context = {'slogan': 'wonderful!', 'data_list': p, 'contentType': contentType, 'remind': remind}
    # 返回请求
    return HttpResponse(template.render(context, request))


def login(request):
    """
        登陆界面
    :param request:
    :return:
    """
    try:
        # 已经登录
        if request.session['msg'] == u'ok':
            return redirect('index')
        # 账号密码错误
        else:
            # 加载模板
            template = loader.get_template('main/login/index.html')

            # 数据列表
            p = {'sign': 'error'}
            # # 写入会话参数
            # request.session['msg'] = u'用户未登录'

            # 整合参数集合
            context = {'slogan': 'wonderful!', 'data_list': p}
            # 返回请求
            return HttpResponse(template.render(context, request))
    except:
        # 未登录
        # 加载模板
        template = loader.get_template('main/login/index.html')

        # 测试数据
        p = {'sign': 'newVisitor'}

        # # 写入会话参数
        # request.session['msg'] = u'用户未登录'

        # 整合参数集合
        context = {'slogan': 'wonderful!', 'data_list': p}

        # 返回请求
        return HttpResponse(template.render(context, request))


def clear_session(request):
    """
    清除session
    :param request:
    :return:
    """
    try:
        request.session.flush()
        return redirect('login')
    except:
        print('错误的访问')
        return redirect('login')