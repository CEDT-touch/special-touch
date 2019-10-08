from django.urls import path
from . import views

urlpatterns = [
    path('refresh/', views.refresh_charts, name='refresh'),      # 更新图表全局参数
    path('refresh/upload/', views.upload_file, name='upload'),      # 文件上传及图表更新
    # pie
    path('pie/', views.PieChartView.as_view(), name='pie'),     # 初始化图表
    # polar
    path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # radar
    path('radar/', views.RadarChartView.as_view(), name='radar'),     # 初始化图表
    # sankey
    path('sankey/', views.SankeyChartView.as_view(), name='sankey'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
    # # polar
    # path('polar/', views.PolarChartView.as_view(), name='polar'),     # 初始化图表
]