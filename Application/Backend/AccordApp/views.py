from django.shortcuts import render
from django.http import JsonResponse
from .models import Accounts, Servers, Chats, Messages
# Create your views here.

def get_chat_members(request, chat_id):
  chat = Chats.objects.get(id=chat_id)
  member_usernames = [member.user_name for member in chat.member_usernames.all()]
  
  return JsonResponse({"member_usernames": member_usernames})