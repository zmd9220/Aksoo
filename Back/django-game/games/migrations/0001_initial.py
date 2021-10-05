# Generated by Django 3.2.5 on 2021-10-01 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AcidRain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
            ],
            options={
                'db_table': 'acid_rain',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CardMatching',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
            ],
            options={
                'db_table': 'card_matching',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Hangman',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
            ],
            options={
                'db_table': 'hangman',
                'managed': False,
            },
        ),
    ]