### **[Status of the software implementation]{.underline}**

-   [How many of your initial requirements that your team set out to
    > deliver did you actually deliver (a checklist/table would help to
    > summarize)? Were you able to deliver everything or are there
    > things missing? Did your initial requirements sufficiently capture
    > the details needed for the project?]{.underline}

+---------------------------------------------------------+------------+
| **Initial Requirements**                                | **D        |
|                                                         | elivered** |
+=========================================================+============+
| Allow users to create an account on the platform.       | -          |
+---------------------------------------------------------+------------+
| Allow the user to log in to the platform with an        | -          |
| existing account.                                       |            |
+---------------------------------------------------------+------------+
| Allow the user to log out of their account.             | -          |
+---------------------------------------------------------+------------+
| Allow the user to edit their account (username,         | -          |
| password, email, etc.).                                 |            |
+---------------------------------------------------------+------------+
| Allow the user to send text messages.                   | -          |
+---------------------------------------------------------+------------+
| Allow the user to receive text messages.                | -          |
+---------------------------------------------------------+------------+
| Allow users to search for other users on the platform.  | -          |
+---------------------------------------------------------+------------+
| Allow the user to add another user as a friend.         | -          |
+---------------------------------------------------------+------------+
| Allow users to remove another user from their friend    | -          |
| list.                                                   |            |
+---------------------------------------------------------+------------+
| Allow the user to create a group chat.                  | -          |
+---------------------------------------------------------+------------+
| Allow group chat owners to manage a group chat.         | -          |
+---------------------------------------------------------+------------+
| Allow server owners to create a text channel.           | -          |
+---------------------------------------------------------+------------+
| Allow server owners to edit text channels.              | -          |
+---------------------------------------------------------+------------+
| Allow users to add other users to the server (We have   | -          |
| changed our development to just one server due to time  |            |
| constraint).                                            |            |
+---------------------------------------------------------+------------+
| Allow server owners to remove a user from a server (We  | -          |
| have changed our development to just one server due to  |            |
| time constraint).                                       |            |
+---------------------------------------------------------+------------+
| Allow server owners to delete a message from a          | -          |
| server/text channel.                                    |            |
+---------------------------------------------------------+------------+
| Allow users to access servers.                          | -          |
+---------------------------------------------------------+------------+

-   Out of all the listed requirements, we are missing the requirement
    > on "allowing users to search for other users on the platform". The
    > reason was due to timing constraints and the product re-analysis
    > process that we had. Since Discord does not support such a
    > feature, we aim to keep our users' privacy a priority similar to
    > Discord. WIth that said, you can still add a user if you know
    > their exact "username".

-   As for our initial user requirements, they provide a comprehensive
    > overview of the desired functionalities for the Accord social
    > platform. However, some additional details may be needed to ensure
    > a thorough understanding of the project scope:

    -   User Account Management:

        -   Password security measures (e.g., password complexity
            > requirements, password reset options).

    -   Messaging Features:

        -   Support for multimedia messaging (e.g., image, video, file
            > sharing).

        -   Notification system for incoming messages.

        -   Message formatting options (e.g., bold, italic, hyperlink).

        -   Message delivery status indicators (e.g., message sent,
            > delivered, read).

    -   User Interaction:

        -   Criteria for user search functionality (e.g., search by
            > username, email, interests).

        -   Implementation of friend list management (e.g.,
            > categorization, privacy settings).

→ Overall, while the initial requirements provide a solid foundation for
the project, additional details and specifications may be necessary to
ensure the successful implementation of the Accord social platform.
Regular communication and collaboration between stakeholders, including
developers, our professor, teaching assistants, and end-users, can help
refine and iterate on the requirements as the project progresses.

-   [If you have any requirements unimplemented, you will want to
    > include an extra section showing those requirements have not been
    > implemented.]{.underline}

    -   So far, the only unimplemented requirement that was documented
        > explicitly is "Allow users to search for other users on the
        > platform".

    -   Originally, we planned to have a chat application that supports
        > multiple servers. Due to time constraints, we have diverged
        > our focus back to the minimum requirements that were sent by
        > our Teaching Assistant, which is having all our users on 1
        > server and having different text channels.

    -   With that said, our text channels are developed with privacy in
        > mind. This means that each channel acts like a mini-server
        > (only the users that got invited to such a text channel have
        > access to its content).

-   [How many tasks are left in the backlog?]{.underline}

    -   We have one task left on "refactoring" the messaging interface
        > due to it being a "God Object" anti-pattern.