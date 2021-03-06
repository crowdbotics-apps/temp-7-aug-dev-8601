# Generated by Django 2.2.15 on 2020-08-07 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="demo",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="homepage_demo",
                to="home.HomePage",
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="user2",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="homepage_user2",
                to="home.HomePage",
            ),
        ),
    ]
