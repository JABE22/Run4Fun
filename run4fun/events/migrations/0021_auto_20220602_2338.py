# Generated by Django 3.2.5 on 2022-06-02 18:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0020_auto_20220602_1528'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventInfo',
            fields=[
                ('event_name', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('start_time', models.DateTimeField()),
                ('distance', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='EventOrganizerClub',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('post_code', models.CharField(max_length=10)),
                ('country', models.CharField(max_length=80)),
            ],
        ),
        migrations.AlterField(
            model_name='competitor',
            name='ccode',
            field=models.CharField(default='XDPX7A', help_text='max 6 chars', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='event',
            name='ecode',
            field=models.CharField(default='2FXF4Y', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='EventOrganizerPerson',
            fields=[
                ('email', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=20)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventorganizerclub')),
            ],
        ),
        migrations.CreateModel(
            name='EventNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('additional_info', models.TextField(max_length=1000, null=True)),
                ('event_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventinfo')),
                ('event_organizer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventorganizerclub')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventorganizerperson')),
            ],
        ),
        migrations.AddField(
            model_name='eventinfo',
            name='event_organizer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventorganizerclub'),
        ),
    ]
