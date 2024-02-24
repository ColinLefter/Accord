class Chat:
  def __init__(self, id: int, member_usernames: str):
    self.id = id
    self.member_usernames = member_usernames
    
  def __repr__(self):
    return self.id
  
  def get_chat_history(self) -> list:
    pass

  def add_user(self) -> None:
    pass