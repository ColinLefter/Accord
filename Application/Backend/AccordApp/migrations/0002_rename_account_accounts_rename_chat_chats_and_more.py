# Generated by Django 4.2.8 on 2024-02-25 23:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("AccordApp", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(old_name="Account", new_name="Accounts",),
        migrations.RenameModel(old_name="Chat", new_name="Chats",),
        migrations.RenameModel(old_name="Message", new_name="Messages",),
        migrations.RenameModel(old_name="Server", new_name="Servers",),
    ]
