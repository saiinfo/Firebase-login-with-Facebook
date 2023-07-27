# Project Name
Firebase Login with Facebook

## Project Description
The "Firebase Login with Facebook" project is a React application that demonstrates how to enable user authentication using Facebook accounts with Firebase. The app provides a seamless and secure login experience for users, allowing them to sign in using their Facebook credentials.

 ### Prerequisites
Before getting started, make sure you have the following set up:

Step 1: Set Up Firebase Project:
Go to the Firebase Console.
Go to the Firebase console (https://console.firebase.google.com/).
Enable the "Authentication" service from the left-hand side menu.
Under the "Sign-in method" tab, enable "Facebook" as a sign-in provider.
You'll need the "App ID" and "App Secret" from your Facebook Developer account, which we'll configure in the next step.
Set up Facebook Developer Account:

Step 2:
Go to the Facebook Developer Console and log in with your Facebook account.
Create a new app or use an existing one.
Note down the "App ID" and "App Secret" from the "Settings" > "Basic" section of your Facebook app.
Add your website's URL to the "App Domains" field in the "Settings" > "Basic" section.

Step 3: Enable Firebase Authentication:
In the Firebase console, navigate to "Authentication" from the left sidebar. Under the "Sign-in method" tab, choose the authentication methods you want to enable, such as Email/Password, Google, Facebook, etc. Enable the desired methods and save your changes.

Step 3: Install Firebase SDK:
To use Firebase Authentication in your application, you need to integrate the Firebase SDK into your project. Refer to the official Firebase documentation for instructions on how to install the SDK for your specific platform.

## Dependencies

    "bootstrap": "^5.1.3",
    "firebase": "^10.0.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-google-button": "^0.7.2",
    "react-phone-number-input": "^3.3.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1"

## Running the Project in Vs Code
a. Build the project: Open The terminal and used command 'npm start'.
b. Access the project:

   - Open a web browser.
   - Enter the URL (e.g., `http://localhost:3000/`).

c.Sign In with Facebook: Click the "Sign In with Facebook" button on the web application. 
Grant Permissions: Grant permission to the application to access your Facebook account information.

Successful Authentication: Once authenticated, you will be redirected back to the application and shown a welcome message with your display name and email.

## Conclusion:
With Firebase Authentication set up and integrated into your application, you can easily add user login functionality, protect specific routes or content, and personalize user experiences based on their authentication status. Always ensure you handle authentication securely, and refer to the official Firebase documentation for detailed information on additional features and best practices.

## Project Priview:
![20230727_102020](https://github.com/saiinfo/Firebase-login-with-Facebook/assets/26924010/97b064f2-724b-42c9-8db7-b50970d1f54d)

