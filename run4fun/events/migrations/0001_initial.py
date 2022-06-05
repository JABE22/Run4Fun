# Generated by Django 3.2.5 on 2022-05-31 11:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Competitor',
            fields=[
                ('ccode', models.CharField(default='ZE9PU8', help_text='max 6 chars', max_length=6, primary_key=True, serialize=False)),
                ('last_name', models.CharField(max_length=50)),
                ('first_name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone', models.CharField(max_length=20, null=True, unique=True)),
                ('country', models.CharField(blank=True, choices=[('FIN', 'Finland'), ('SWE', 'Sweden'), ('RUS', 'Russia'), ('GER', 'Germany')], default='FIN', help_text='Select citizenship', max_length=3)),
            ],
            options={
                'ordering': ['last_name', 'first_name'],
            },
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('date', models.DateField(null=True)),
                ('ename', models.CharField(max_length=100)),
                ('ecode', models.CharField(default='U28N3U', max_length=6, primary_key=True, serialize=False)),
                ('city', models.CharField(max_length=50)),
                ('url', models.URLField()),
                ('description', models.TextField(default='Half Marathon Event (21km)', max_length=2000, null=True)),
                ('country', models.CharField(blank=True, choices=[('FIN', 'Finland'), ('SWE', 'Sweden'), ('RUS', 'Russia'), ('GER', 'Germany')], default='FIN', help_text='Select code', max_length=50)),
                ('ccode', models.CharField(blank=True, choices=[('fin', 'FIN'), ('swe', 'SWE'), ('rus', 'RUS'), ('ger', 'GER')], default='FIN', help_text='Select code', max_length=3)),
            ],
            options={
                'ordering': ['country', 'city'],
            },
        ),
        migrations.CreateModel(
            name='EventSource',
            fields=[
                ('name', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('url', models.URLField()),
                ('event_location_type', models.CharField(blank=True, choices=[('cnt', 'Continent'), ('cry', 'Country'), ('cty', 'City')], default='cry', help_text='Select area type', max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Race',
            fields=[
                ('race_code', models.CharField(help_text='Brief (max 10 chars)', max_length=10, primary_key=True, serialize=False)),
                ('distance', models.SmallIntegerField(default=21)),
                ('start', models.DateTimeField(null=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('competitor', models.CharField(max_length=50)),
                ('comp_number', models.SmallIntegerField(default=123)),
                ('place', models.SmallIntegerField(default=0)),
                ('finish_time', models.CharField(help_text='HH:MM:SS', max_length=8, null=True)),
                ('comp_category', models.CharField(blank=True, choices=[('mgen', 'M-General'), ('opt1', 'M40-50'), ('opt2', 'M50-60'), ('opt3', 'M60<'), ('wgen', 'W-General'), ('opt1', 'W40-50'), ('opt2', 'W50-60'), ('opt3', 'W60<')], default='mgen', help_text='Select category', max_length=10)),
                ('race_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.race')),
            ],
        ),
        migrations.AddConstraint(
            model_name='result',
            constraint=models.UniqueConstraint(fields=('race_code', 'competitor'), name='event-competitor_comb-key'),
        ),
    ]
