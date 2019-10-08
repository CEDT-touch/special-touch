from django.urls import path
from . import views

urlpatterns = [
    path('new/', views.new_report, name='newReport'),
    path('report1/', views.index, name='report1'),
    path('getData/', views.get_data, name='getData'),
    path('selectData/', views.select_data, name='selectData'),
    path('saveData/', views.save_data, name='saveData'),
    path('report3/', views.report_3, name='report3'),
    path('getReport3Data/', views.get_report3_data, name='getReport3Data'),
    # report4及以后的通用url
    path('report4/', views.report_4, name='report4'),
    # report4及以后的通用url
    path('getReport4Data/', views.get_report4_data, name='getReport4Data'),
    path('loadCatagories/', views.readReport2CatagoryAndChartDataFromDatabase, name='loadCatagories'),
    path('loadChartDataOfReport2/', views.readReport2ChartDataFromDatabase, name='loadChartDataOfReport2'),
    # 数据上传用
    path('upload/', views.upload_file, name='upload'),
]