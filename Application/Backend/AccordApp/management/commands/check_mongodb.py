from django.core.management.base import BaseCommand
from django.conf import settings
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

class Command(BaseCommand):
    help = 'Checks connection to MongoDB'

    def handle(self, *args, **kwargs):
        """Manually checks the connection to MongoDB."""
        
        # Retrieve credentials from environment variables
        mongodb_username = os.getenv('MONGODB_USERNAME')
        mongodb_password = os.getenv('MONGODB_PASSWORD')
        mongodb_uri = os.getenv('MONGODB_URI').replace('<username>', mongodb_username).replace('<password>', mongodb_password)

        # Create a new client and connect to the server
        client = MongoClient(mongodb_uri, server_api=ServerApi('1'))

        # Send a ping to confirm a successful connection
        try:
            client.admin.command('ping')
            self.stdout.write(self.style.SUCCESS('Successfully connected to MongoDB!'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error connecting to MongoDB: {e}'))
