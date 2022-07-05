# Summary

This is a nodejs authentication project using JWT package.

## Technology Used

- NodeJs
- ExpressJs
- Mongoose
- JsonWebToken
- bcryptjs
- dotenv

## You Should follow these steps

1. clone the repo on your machine
2. npm install
3. creat a .env file in your project root directory
4. in .env file add the following

- - API_PORT = [any port number]
- - MONGO_URI = "mongodb://127.0.0.1:27017/[your database name]"
- - TOKEN_KEY = [any random string]

## Overview

There are three routes in this app (register, login, welcome)

#### Register

You should put in the request body the following:

- first_name
- last_name
- email
- password

![Alt text](./screenshots/register.png?raw=true "Register")
