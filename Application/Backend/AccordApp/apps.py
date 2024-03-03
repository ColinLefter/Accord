from django.apps import AppConfig


class AccordappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "AccordApp"

    def ready(self):
        """Checks the database connection on app start."""
        from pymongo.mongo_client import MongoClient
        from pymongo.server_api import ServerApi
        import os
        from dotenv import load_dotenv

        # Load environment variables from .env file
        load_dotenv()

        # Retrieve credentials from environment variables
        mongodb_username = os.getenv('MONGODB_USERNAME')
        mongodb_password = os.getenv('MONGODB_PASSWORD')
        mongodb_uri = os.getenv('MONGODB_URI').replace('<username>', mongodb_username).replace('<password>', mongodb_password)

        # Create a new client and connect to the server
        client = MongoClient(mongodb_uri, server_api=ServerApi('1'))

        # Send a ping to confirm a successful connection
        try:
            client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)