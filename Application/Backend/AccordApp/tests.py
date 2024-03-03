from django.test import TestCase
from .models import Accounts, Servers, Chats, Messages
from django.utils import timezone
from datetime import datetime, date
from .classes.message import Message
from .classes.utility import Utility

import bson

# Create your tests here.
class MockUser(TestCase):
  def setUp(self):
    # Create mock data for Account
    self.user1 = Accounts.objects.create(username="user1", email="user1@example.com", phone_number="1234567890")
    self.user1.set_password('user1pass') # For security purposes, passwords are hashed and stored in the database.
    self.user1.save()
    
    self.user2 = Accounts.objects.create(username="user2", email="user2@example.com", phone_number="0987654321")
    self.user2.set_password('user2pass') # For security purposes, passwords are hashed and stored in the database.
    self.user2.save()
    
    # Create mock data for Server
    self.server1 = Servers.objects.create(server_name="Server One")
    # Add user1 to server1
    self.server1.member_usernames.add(self.user1)
    
    # Create mock data for Chat
    self.chat1 = Chats.objects.create()
    # Add users to chat1
    self.chat1.member_usernames.add(self.user1, self.user2)
    
    # Create mock data for Message
    self.message1 = Messages.objects.create(
      message_timestamp=timezone.now(),
      chat=self.chat1,
      sentBy="user1",
      message="Hello, World!"
      )
    self.message2 = Messages.objects.create(
      message_timestamp=timezone.now(),
      chat=self.chat1,
      sentBy="user2",
      message="Hello, World, Again!"
      )
    
  def test_account_creation(self):
    """Accounts are being properly created."""
    user1 = Accounts.objects.get(username="user1")
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
    message_1 = Messages.objects.get(sentBy="user1").message
    message_2 = Messages.objects.get(sentBy="user2").message
    
    self.assertEqual(message_1, "Hello, World!") # The first message sent should be "Hello, World!"
    self.assertEqual(message_2, "Hello, World, Again!") # The last message sent should be "Hello, World, Again!"
    self.assertEqual(message_1, self.message1.message) # The first message sent should be sent by user1
    self.assertEqual(message_2, self.message2.message) # The last message sent should be sent by user2

  def test_password_check(self):
    """Check the password belongs to the correct user."""
    user1 = Accounts.objects.get(username="user1")
    self.assertTrue(user1.check_password('user1pass'))
  
  def test_message_initialization_with_bson_date(self):
    # Create a datetime object for testing
    test_datetime = datetime.now()
    
    # Convert to BSON datetime using Utility class
    bson_date = Utility().get_message_date(test_datetime)
    
    # Create a Message instance using the BSON datetime
    message_instance = Message(1, bson_date, 'user1', 'This is a test message')
    
    # Check if the stored date is correctly initialized and in BSON format
    self.assertTrue(isinstance(message_instance.date, bson.datetime.datetime), "The date should be a BSON datetime object.")
    self.assertEqual(message_instance.date, bson_date, "The stored BSON datetime should match the converted one.")