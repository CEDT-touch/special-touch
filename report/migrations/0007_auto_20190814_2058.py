# Generated by Django 2.2 on 2019-08-14 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0006_auto_20190814_2047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='piedata',
            name='pie_size',
            field=models.CharField(default='50', max_length=4),
        ),
    ]