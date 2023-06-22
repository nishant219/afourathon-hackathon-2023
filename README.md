
# Afourathon-hackathon-2023


## Project Overview
AFOURATHON-2023 is a GitHub repository dedicated to the AFOURATHON 2023 event. This repository serves as the central hub for all the code, resources, and documentation related to the event.


The project aims to provide a secure and user-friendly system for web applications. It incorporates various essential features to facilitate a seamless user experience. Here's an overview of the key functionalities:


-   **Sign Up**: Users can create a new account by providing their email address, username, and password. The system ensures the uniqueness of the email address and validates the password strength.
    
-   **Login**: Authenticated users can log in to their accounts using their credentials. The system verifies the user's identity and grants access to protected routes.
    
-   **Logout**: Logged-in users can choose to log out, terminating their current session and invalidating their access token.
    


The project uses Node.js and Express for server-side development, ensuring scalability and flexibility. Cloudinary is employed to handle image uploads, enabling users to set or update their profile picture. Nodemailer, in conjunction with Mailtrap, is utilized to send emails securely for features like password reset notifications.

## Installation
git clone <repository_url>
cd <project_directory>
npm install

Configure the environment variables:
- Update the necessary values in the `.env` file, such as the database connection URL, Cloudinary credentials, and email service details.



## Routes

- `POST /signup`: Create a new user account.
- `POST /login`: Authenticate and login the user.
- `GET /logout`: Log out the currently logged-in user.


## Dependencies

Refer package.json file for dependencies

- Node.js version: `<node_version>`
- Express version: `<express_version>`
- Nodemailer version: `<nodemailer_version>`
- Mailtrap version: `<mailtrap_version>`

## Contributing

Contributions and feedback are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue. Please follow the contribution guidelines outlined.


