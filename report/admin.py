from django.contrib import admin

# Register your models here.
from .models import TemplateData,PieData


# 设置管理界面对应的模型的显示内容
class templateData(admin.ModelAdmin):
    list_display = ['template_name']


class pieData(admin.ModelAdmin):
    list_display = ['pie_name']


# 注册模型
admin.site.register(PieData, pieData)