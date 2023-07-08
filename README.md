
# Afourathon-hackathon-2023


![My project-1](https://github.com/nishant219/afourathon-hackathon-2023/assets/72811435/2ee097db-dc5d-4ba1-a8c2-92e8c357e885)

## Project Overview

AFOURATHON-2023 is a GitHub repository dedicated to the AFOURATHON 2023 event. This repository serves as the central hub for all the code, resources, and documentation related to the event.


The project aims to provide a secure and user-friendly system for web applications. It incorporates various essential features to facilitate a seamless user experience. Here's an overview of the key functionalities:

-----------------------------------------------------------------------------------------------------------

**Problem Statement 1**  ---  Student Details App
Build an application that can be run as a container on the cloud for creating/updating/deleting a student
The functionality of the application is:

1. Allow user to add, update, delete a student
2. Each student should have:
    -  Student Name
    -  Student ID Number
    -  Student Email
    -  Student Phone Number
3. Persist all student details in the database

**Problem Statement 2**  ---  Elective Subject App
Build an application that can be run as a container on the cloud for creating/updating/deleting an elective subject.
The functionality of the application is:
1. Allow user to add, update, delete an elective subject
2. Each elective subject should have:
     -  Elective Subject Name
     -  Elective Subject Description
     -  Elective Subject Code
3. Persist all subjects in the database    


-----------------------------------------------------------------------------------------------------------


The project uses Node.js and Express for server-side development, ensuring scalability and flexibility. Cloudinary is employed to handle image uploads, enabling users to set or update their profile picture. Nodemailer, in conjunction with Mailtrap, is utilized to send emails securely for features like password reset notifications.

## Installation
```
git clone <repository_url>
cd <project_directory>
npm install
```
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


