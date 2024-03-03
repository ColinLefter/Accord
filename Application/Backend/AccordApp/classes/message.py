import bson

class Message():
  def __init__(self, id: int, date: bson.datetime.datetime, sentBy: str, message: str):
    self.id = id
    self.date = date
    self.sentBy = sentBy
    self.message = message
  
  def __repr__(self):
    return str(self.id)