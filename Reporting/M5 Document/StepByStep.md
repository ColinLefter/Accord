 -   Getting started:

        -   If this is the first time you are pulling from the repo,
            > open a new command line and run npm install (make sure you
            > install Node.js and the npm package manager first if you
            > don\'t have this on your system).

        -   To start up the server, run npm run dev.

        -   As per the instructions from the terminal, navigate to
            > [[http://localhost:3000/]{.underline}](http://localhost:3000/).

        -   Next.js is a React framework that adds additional
            > functionality on top of what React already has to offer.
            > Its main selling point is server-side rendering. During
            > the development process, we will be running the
            > development server to work on our web application. This is
            > recommended for development. However, once our project is
            > completed, we will build the pages for our application
            > using npm build to demo our application in production
            > mode.

        -   The main sections we will be working from are the app and
            > components directory. SInce we are using React, all of our
            > components will exist in our components directory and will
            > be imported into the respective pages within the app
            > directory. The layout.tsx file is just a general layout
            > file that has already been set up and does not need to be
            > modified until further notice. For example, the page.tsx
            > file is what you currently see when you launch the
            > application.

    -   MongoDB Atlass:

        -   Go to MongoDB Atlas and create an account

        -   Accept the invite to my project on Atlas

        -   In the Frontend/ directory, create a .env file and follow
            > the instructions listed at the bottom of this doc

        -   Test your MongoDB connection to the frontend by having the
            > development server for Next.js up (npm run dev) and then
            > navigating to http://localhost:3000/api/testMongoDB. You
            > should see the following if your connection is successful:
            > {\"message\":\"Successfully connected to MongoDB!\"}

        -   Test your MongoDB connection to the backend by executing
            > python manage.py under the backend directory. At the top
            > of the list of available commands, you should see the
            > following if your connection is successful: Pinged your
            > deployment. You successfully connected to MongoDB!. Note:
            > I configured Django so that the database connection is
            > automatically established every time any Python file is
            > executed.

        -   .env file setup

            -   Firstly, make sure you have the following installed:
                > mongodb and dotenv. If not, do npm install mongodb and
                > npm install dotenv or use yarn.

            -   Inside the .env file, place the following content:

                -   **MONGODB_USERNAME=\<username\>**

                -   **MONGODB_PASSWORD=\<password\>**

                -   **MONGODB_URI=mongodb+srv://\<username\>:\<password\>@accord-systems.umbugbv.mongodb.net/?retryWrites=true&w=majority&appName=Accord-Systems**

            -   Set MONGODB_USERNAME and MONGODB_PASSWORD to the
                > credentials for your Atlas account that I gave to you.
                > Do not change replace \<username\> and \<password\> in
                > MONGODB_URI. That will be replaced with a script that
                > runs when the database connection is established in
                > Next.js. For windows users, open PowerShell as
                > administrator and execute New-Item -ItemType
                > SymbolicLink -Path .\\.env -Target ..\\.env. This is
                > needed because Django can access that .env file but
                > Next.js can\'t as it is outside of the Next.js app
                > (Frontend directory).

            -   NOTE: do not include the angle brackets (\<, \>).

            -   You do not need to worry about accidentally committing
                > your .env file as it is already listed in .gitignore.

    -   Ably

        -   Please add the following to your .env file

            -   **ABLY_API_KEY_PUBLISH_SUBSCRIBE=yourapikey**

            -   Replace yourapikey with the key given to you.

        -   You will need to run this command before you start up the
            > application: **ably: npm install ably**