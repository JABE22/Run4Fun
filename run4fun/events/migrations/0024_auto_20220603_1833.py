# Generated by Django 3.2.5 on 2022-06-03 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0023_auto_20220603_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='competitor',
            name='ccode',
            field=models.CharField(default='V8NUGG', help_text='max 6 chars', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='event',
            name='ecode',
            field=models.CharField(default='ZJ4AVV', max_length=6, primary_key=True, serialize=False),
        ),
    ]
