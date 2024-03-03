# Obeserver Pattern (Behavioural)

- <span style="color:aqua">Why we choose it</span>.: We choose it because for our Accord project (which is a clone of Discord), it is crucial to have real-time updates and notifications whenever a user receive a message. This pattern will establish the 1-to-many dependency between objects so that the updates are sent accordingly.

- <span style="color:aqua">How they will be implemented</span>: We first create a <span style="color:orange">Subject</span> that is in charge of sending the right notifications to users. Then we create an <span style="color:orange">Observer List</span>  object that will be the parent to all the other observer children (such as **group chat observer**, **server chat observer**, and **direct-message chat observer**). Whenever a message is received from any of these sources, it is immediately observed and reported through the use of notifications.

# Singleton Pattern (Creational)

- <span style="color:aqua">Why we choose it</span>: We choose it because for our Accord project (a web-based chat application), it is crucial to have a Manager class to manage all the functionalities of the project, such as handling user authentication (whenever a user log in), managing their connection to the server, and keeps track of all the users' information.

- <span style="color:aqua">How they will be implemented</span>: We create a singleton class called <span style="color:orange">MessagingHandler</span> that will manage all of the above mentioned functionalities (user authentication, WebSocket connection, etc.).