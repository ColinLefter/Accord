import bson
from datetime import datetime

class Utility:
    def get_message_date(self, message_date):
        """Convert Python datetime or date to BSON datetime."""
        if isinstance(message_date, datetime):
            # Directly use the datetime if already in the correct format
            return bson.datetime.datetime(
                message_date.year,
                message_date.month,
                message_date.day,
                message_date.hour,
                message_date.minute,
                message_date.second,
                message_date.microsecond)
        else:
            raise TypeError("Type %s not serializable" % type(message_date))