# Generated by Django 4.2.8 on 2024-02-24 02:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Account",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                ("username", models.CharField(max_length=50, unique=True)),
                ("password", models.CharField(max_length=50)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("phone_number", models.CharField(max_length=10)),
            ],
            options={"abstract": False,},
        ),
        migrations.CreateModel(
            name="Chat",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "member_usernames",
                    models.ManyToManyField(
                        related_name="chat_memberships", to="AccordApp.account"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Server",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("server_name", models.CharField(max_length=50)),
                (
                    "member_usernames",
                    models.ManyToManyField(
                        related_name="server_memberships", to="AccordApp.account"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Message",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("message_timestamp", models.DateTimeField()),
                ("sentBy", models.CharField(max_length=50)),
                ("message", models.CharField(max_length=500)),
                (
                    "chat",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="messages",
                        to="AccordApp.chat",
                    ),
                ),
            ],
        ),
    ]