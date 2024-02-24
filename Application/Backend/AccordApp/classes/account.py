class Account:
  def __init__(self, id: int, username: str, email: str, phone_number: str, password: str):
    self.id = id
    self.username = username
    self.email = email
    self.phone_number = phone_number
    self.password = password
  
  def __repr__(self):
    return self.id
  
  def join_server(self) -> None:
    pass
  
  def direct_message(self) -> None:
    pass
  
  def send_invite(self) -> None:
    pass
  
  def receive_notification(self) -> None:
    pass
  
  def create_server(self) -> None:
    pass

  def create_account(self) -> None:
    pass
  
  def delete_account(self) -> None:
    pass