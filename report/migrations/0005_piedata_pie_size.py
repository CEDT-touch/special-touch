# Generated by Django 2.2 on 2019-08-14 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0004_auto_20190814_2044'),
    ]

    operations = [
        migrations.AddField(
            model_name='piedata',
            name='pie_size',
            field=models.CharField(default='50', max_length=4),
        ),
    ]
