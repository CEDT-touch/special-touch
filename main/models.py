from django.db import models

# Create your models here.


class test(models.Model):
    name = models.CharField(max_length=20)

    # 给此模型起一个别称，以便在管理界面友好显示
    class Meta:
        verbose_name = '数据库测试'
        verbose_name_plural = '数据库测试'

    # 默认返回显示的字段
    def __str__(self):
        return self.name