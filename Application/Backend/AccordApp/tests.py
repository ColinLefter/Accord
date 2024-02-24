from django.test import TestCase
from .models import Account, Server, Chat, Message
from django.utils import timezone

# Create your tests here.
class MockUser(TestCase):
  def setUp(self):
    # Create mock data for Account
    self.user1 = Account.objects.create(username="user1", email="user1@example.com", phone_number="1234567890")
    self.user1.set_password('user1pass') # For security purposes, passwords are hashed and stored in the database.
    self.user1.save()
    
    self.user2 = Account.objects.create(username="user2", email="user2@example.com", phone_number="0987654321")
    self.user2.set_password('user2pass') # For security purposes, passwords are hashed and stored in the database.
    self.user2.save()
    
    # Create mock data for Server
    self.server1 = Server.objects.create(server_name="Server One")
    # Add user1 to server1
    self.server1.member_usernames.add(self.user1)
    
    # Create mock data for Chat
    self.chat1 = Chat.objects.create()
    # Add users to chat1
    self.chat1.member_usernames.add(self.user1, self.user2)
    
    # Create mock data for Message
    self.message1 = Message.objects.create(
      message_timestamp=timezone.now(),
      chat=self.chat1,
      sentBy="user1",
      message="Hello, World!"
      )
    self.message2 = Message.objects.create(
      message_timestamp=timezone.now(),
      chat=self.chat1,
      sentBy="user2",
      message="Hello, World, Again!"
      )
    
  def test_account_creation(self):
    """Accounts are being properly created."""
    user1 = Account.objects.get(username="user1")
    self.assertEqual(user1.email, "user1@example.com")
    self.assertEqual(user1.phone_number, "1234567890")
    self.assertTrue(user1.check_password('user1pass')) # For security purposes, passwords are hashed and stored in the database. This method checks if the password is correct.
  
  def test_server_membership(self):
    """Server memberships are properly assigned."""
    self.assertIn(self.user1, self.server1.member_usernames.all())
  
  def test_chat_membership(self):
    """Chat memberships are properly assigned."""
    self.assertIn(self.user1, self.chat1.member_usernames.all())
    self.assertIn(self.user2, self.chat1.member_usernames.all())
  
  def test_message_creation(self):
    """Messages are being properly created."""
    message_1 = Message.objects.get(sentBy="user1").message
    message_2 = Message.objects.get(sentBy="user2").message
    
    self.assertEqual(message_1, "Hello, World!") # The first message sent should be "Hello, World!"
    self.assertEqual(message_2, "Hello, World, Again!") # The last message sent should be "Hello, World, Again!"
    self.assertEqual(message_1, self.message1.message) # The first message sent should be sent by user1
    self.assertEqual(message_2, self.message2.message) # The last message sent should be sent by user2

  def test_password_check(self):
    """Check the password belongs to the correct user."""
    user1 = Account.objects.get(username="user1")
    self.assertTrue(user1.check_password('user1pass'))