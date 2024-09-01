# RSA Challenge

## Introduction

When presenting my research project at John Abbott College under the supervision of professor Takei, I have decided to create a challenge for my audience of 50+ people in order to give them an incentive to interact with the concepts that I have shared. You can see my final presentation slides under the public folder.

> **Note**: You can go to [RSA Challenge (cookiechallenge.onrender.com)](https://cookiechallenge.onrender.com/) in order to interact with the website itself, although the competition is over!

## Usage

I have created 2 challenges, one Caesar Cipher, and one RSA Cipher, and both have links to find more information on. When students enter their email address and reply to one of the challenges, the user gets the confirmation if their answer is correct or not, and I get an email through the use of _nodemailer_ letting me know of the submission result, allowing me to contact them back.

## Installation

To install my project, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/an-andrey/cryptoEmail.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd cryptoEmail
    ```
3.  Install the required dependencies:
    `bash
    npm install
    `
    > **Note**: I am using [nodemailer - npm (npmjs.com)](https://www.npmjs.com/package/nodemailer) to send emails, so you will need your own credentials in order for this functionality to work.

## Features

- Answer checking is being done on the backend to prevent users from seeing the answers by using the Investigate feature on their browser
- A pop-up appears in case the user does not input their email, to prevent having empty submissions
- Backend is done with Express JS that communicates and the front end is done with EJS views
- CSS is done with the use of Bootstrap
