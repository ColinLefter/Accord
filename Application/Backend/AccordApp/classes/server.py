class Server:
  def __init__(self, id: str, server_name: str):
    self.id = id
    self.server_name = server_name
  
  def __repr__(self):
    return str(self.id)
  
  def get_member_list(self) -> list:
    pass
  
  def get_server_channels(self) -> list:
    pass
  
  def add_user(self) -> None:
    pass

  def remove_user(self) -> None:
    pass