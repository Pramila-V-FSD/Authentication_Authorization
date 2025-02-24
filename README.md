JWT Authentication API
This is a simple Node.js API that demonstrates how to implement user authentication and authorization using JWT (JSON Web Tokens). 
The project follows the MVC (Model-View-Controller) pattern, and uses Express.js, MongoDB (via Mongoose), BcryptJS, and JWT for secure user registration and login.

Features:
User Registration
User Login with JWT Token
Access User Information with a Bearer Token

Prerequisites:
Node.js
MongoDB 
Postman for API testing.

1. Register User:
Method: POST
URL: http://localhost:4000/api/auth/register
Description: Register a new user by providing a username, email, and password. The password will be hashed before storing in the database.
Example:
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}

3. Login User:
Method: POST
URL: http://localhost:4000/api/auth/login
Description: Log in with the registered email and password. If successful, a JWT token will be generated and returned to the user.
Example:

{
  "email": "testuser@example.com",
  "password": "password123"
}
The response will include the token, which you need to use for subsequent requests.

4. Get User Info:
Method: GET
URL: http://localhost:4000/api/auth/me
Description: Retrieve the authenticated user's information. This endpoint is protected and requires a valid JWT token to access.
Headers:
x-auth-token: Your JWT token (from the login response)

Validation:
All input data is validated at the controller level:

Username: Required and must be a non-empty string.
Email: Must be a valid email format and unique in the database.
Password: Must be a string with at least 6 characters.
If any data is invalid, the API will return a 400 Bad Request with a corresponding error message.

Deployment:
The Project deployed in render.
render url:https://authentication-authorization-g4yn.onrender.com
Register:
POST: https://authentication-authorization-g4yn.onrender.com/api/auth/register
Login:
POST: https://authentication-authorization-g4yn.onrender.com/api/auth/login (you get the token)
Get user info:
GET: https://authentication-authorization-g4yn.onrender.com/api/auth/me (provide your token).
