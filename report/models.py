from django.db import models


# Create your models here.


class TemplateData(models.Model):
    template_name = models.CharField(max_length=20, verbose_name='模板名称')
    template_detail = models.TextField(max_length=1000)
    refer_data = models.CharField(max_length=20)
    upper_tempname = models.CharField(max_length=20)
    report_id = models.IntegerField(max_length=4)

    # 给此模型起一个别称，以便在管理界面友好显示
    class Meta:
        verbose_name = '模板数据'
        verbose_name_plural = '模板数据'

    # 默认返回显示的字段
    def __str__(self):
        return self.template_name


class Report(models.Model):
    report_name = models.CharField(max_length=20, verbose_name='报告名称', default='未查看报告')
    report_note = models.TextField(max_length=1000, verbose_name='备注', default='这里是备注')
    report_date = models.CharField(max_length=20, verbose_name='创建日期', default='2019-08-10')
    report_creator = models.CharField(max_length=20, verbose_name='创建人', default='1')
    report_chack = models.BooleanField(verbose_name='是否已被查看', default=False)

    # 给此模型起一个别称，以便在管理界面友好显示
    class Meta:
        verbose_name = '报告'
        verbose_name_plural = '报告'

    # 默认返回显示的字段
    def __str__(self):
        return self.report_name


class PieData(models.Model):
    pie_name = models.CharField(max_length=20, verbose_name='饼图名称')
    pie_detail = models.TextField(max_length=1000)
    pie_title = models.CharField(max_length=80, default='这里是图表标题')
    pie_date = models.CharField(max_length=20)
    pie_t1 = models.CharField(max_length=20, default='title')
    pie_t2 = models.CharField(max_length=20, default='title')
    pie_t3 = models.CharField(max_length=20, default='title')
    pie_v1 = models.FloatField(max_length=20, default=0)
    pie_v2 = models.FloatField(max_length=20, default=0)
    pie_v3 = models.FloatField(max_length=20, default=0)
    pie_top = models.FloatField(max_length=4, default=0)
    pie_left = models.FloatField(max_length=4, default=0)
    pie_size = models.CharField(max_length=4, default='50')
    pie_report = models.ForeignKey('Report', on_delete=models.CASCADE, verbose_name='所属报告', default=1)

    # 给此模型起一个别称，以便在管理界面友好显示
    class Meta:
        verbose_name = '饼图数据'
        verbose_name_plural = '饼图数据'

    # 默认返回显示的字段
    def __str__(self):
        return self.pie_name
