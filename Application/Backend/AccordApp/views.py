from django.shortcuts import render
# Create your views here.

def get_chat_members(request, chat_id):
  chat = Chat.objects.get(id=chat_id)
  member_usernames = [member.user_name for member in chat.member_usernames.all()]
  
  return JsonResponse({"member_usernames": member_usernames})