from django.contrib import admin


# Register your models here.
from .models import test


# 设置管理界面对应的模型的显示内容
class Test(admin.ModelAdmin):
    list_display = ['name']


# 注册模型
admin.site.register(test, Test)