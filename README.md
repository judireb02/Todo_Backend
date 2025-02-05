# Node.js To-Do List Application

## Overview
This Node.js project uses Mongoose for MongoDB to support user login with JWT and CRUD operations for To-Do items. 

## Features
- User registration and login
- Create, read, update, delete To-Do items

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repository-name
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. API Endpoints:
    - **User Registration:** `POST /api/register`
    - **User Login:** `POST /api/login`
    - **Create To-Do:** `POST /api/todos`
    - **Read To-Do:** `GET /api/todos`
    - **Update To-Do:** `PUT /api/todos/:id`
    - **Delete To-Do:** `DELETE /api/todos/:id`
    - **Get To-Do:** `DELETE /api/todos/:userID`

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## Acknowledgments
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Token](https://jwt.io/)

