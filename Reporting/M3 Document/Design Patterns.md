# Obeserver Pattern (Behavioural)

- <span style="color:aqua">Why we chose it</span>: For our particular project (Discord clone), it is crucial to have real-time updates and notifications whenever a user receives a message. This pattern will establish the 1-to-many dependency between objects that is necessary for updates to be reflected in real-time.

- <span style="color:aqua">How we will implement it</span>: We first create a <span style="color:orange">Subject</span> object that is in charge of sending the correct notifications to users. Then we create an <span style="color:orange">Observer List</span>  object that will be the parent to all the other observer children (such as **group chat observer**, **server chat observer**, and **direct-message chat observer**). Whenever a message is received from any of these sources, it is immediately observed and updates are reflected through in-app notifications.

# Singleton Pattern (Creational)

- <span style="color:aqua">Why we chose it</span>: For our particular project (Discord clone), it is crucial to have a <span style="color:orange">Manager</span> class to handle all project functionality, including user authentication (log in, account creation), server connections and site-wide user information.

- <span style="color:aqua">How we will implement it</span>: We create a singleton class called <span style="color:orange">MessagingHandler</span> that will manage all of the above mentioned functionality (user authentication, WebSocket connection, etc.).