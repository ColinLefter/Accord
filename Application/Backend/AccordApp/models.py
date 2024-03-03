from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Django automatically adds an id field to each model as an auto-incrementing primary key if no field is excplicitly specified with primary_key=True.
# Accessing a property of an object: my_object = Object.objects.get(id=x).property_name
# Displaying the primary key of that object: print(my_object)
# Setting a property of that object: my_object.property_name = "new value" followed by my_object.save()

class AccountManager(BaseUserManager):
    def create_user(self, email: str, username: str, phone_number: str, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class Accounts(AbstractBaseUser):
  username = models.CharField(max_length=50, unique=True) # unique usernames only
  password = models.CharField(max_length=50)
  email = models.EmailField(unique=True)
  phone_number = models.CharField(max_length=10)

  objects = AccountManager()
  
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email', 'phone_number'] # 'password' is prompted by default and 'username' is already requested in the USERNAME_FIELD
  
  def __str__(self): 
    return str(self.username) # In this case usernames are guaranteed to be unique

class Servers(models.Model):
  server_name = models.CharField(max_length=50)
  member_usernames = models.ManyToManyField(Accounts, related_name="server_memberships") # Related name is used so you can do Account.server_memberships.all()
  
  def __str__(self): # printing any Account object will give you the id of that object that acts as the primary key
    return str(self.id)

class Chats(models.Model):
  member_usernames = models.ManyToManyField(Accounts, related_name="chat_memberships") # Related name is used so you can do Account.chat_memberships.all()
  
  def __str__(self):
    return str(self.id)

class Messages(models.Model):
  message_timestamp = models.DateTimeField()
  chat = models.ForeignKey(Chats, on_delete=models.CASCADE, related_name="messages")
  sentBy = models.CharField(max_length=50)
  message = models.CharField(max_length=500)
  
  def __str__(self):
    return str(self.id)