# Generated by Django 2.2.15 on 2020-08-07 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20200807_1423'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='asdfsdf',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='homepage_asdfsdf', to='home.CustomText'),
        ),
    ]