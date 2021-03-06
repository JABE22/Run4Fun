# Generated by Django 3.2.5 on 2022-06-02 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0019_auto_20220602_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='competitor',
            name='ccode',
            field=models.CharField(default='56Z23C', help_text='max 6 chars', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='contact',
            name='subject',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='event',
            name='ecode',
            field=models.CharField(default='7FTSC9', max_length=6, primary_key=True, serialize=False),
        ),
    ]
