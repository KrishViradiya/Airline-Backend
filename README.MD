# Welcome to airline Backend

## Project Setup

- clone the project in your local
- Execute `npm install` on the same path as of your root directory of the downoaded project
- Create a new `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file and name it `config.json` and then add the following piece of json data

```
        {
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": <YOUR_DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
         }
        }

```
