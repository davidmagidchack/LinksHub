# Generated by Django 3.0.2 on 2020-06-13 18:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TimeTracker', '0005_auto_20200613_1735'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sites',
            name='avgOfAll',
        ),
        migrations.RemoveField(
            model_name='sites',
            name='sumOfAll',
        ),
    ]
