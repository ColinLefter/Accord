class Message():
  def __init__(self, id: int, message_timestamp: str, sentBy: str, message: str):
    self.id = id
    self.message_timestamp = message_timestamp
    self.sentBy = sentBy
    self.message = message
  
  def __repr__(self):
    return str(self.id)