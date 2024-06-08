# Phone Number Directory API

The Phone Number Directory API is designed to allow users to register with their phone number, report numbers as spam, and search for contact details by phone number. This API serves as a backend for a mobile app.

## Features

- **User Registration**: Register with a name, phone number, email (optional), and password.
- **User Login**: Authenticate users and provide a JWT token.
- **Spam Reporting**: Users can mark phone numbers as spam.
- **Search**: Retrieve contact details and spam likelihood by phone number.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT (jsonwebtoken)**: Authentication and authorization.
- **bcryptjs**: Password hashing.
- **dotenv**: Environment variable management.
- **express-validator**: Request validation middleware.

## Utilities

- **ApiResponse**: Standardized response format.
- **ApiError**: Custom error handling.
- **asyncHandler**: Utility for handling asynchronous route handlers.

## Project Structure
```
/backend
│
├── /config
│ └── db.js
│
├── /controllers
│ └── user.controller.js
│ └── spam.controller.js
│
├── /models
│ └── user.model.js
│ └── contact.model.js
│
├── /routes
│ └── user.route.js
│ └── spam.route.js
│
├── /middleware
│ └── authMiddleware.js
│
├── /utils
│ └── ApiResponse.js
│ └── ApiError.js
│ └── asyncHandler.js
│
├── .env
|── app.js
├── server.js
└── package.json
```


## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repository/phone-directory-api.git
   cd phone-directory-api

2. **Install Dependencies:**:
    ```bash 
    npm install
3. **Environment Variables: Create a .env file in the root directory with the following content:**:
    ```bash 
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=5000
4. **Start the Server:**:
    ```bash 
   npm start


## API Endpoints
1. **User Registration**

   Endpoint: /api/users/register
 
- Method: POST
- Body: 
  ```bash
  {
  "name": "John Doe",
  "phone": "1234567890",
  "email": "john.doe@example.com",
  "password": "password123"
  }


2. **User Login**

   Endpoint: /api/users/login

- Method: POST
- Body: 
  ```bash
  {
  "phone": "1234567890",
  "password": "password123"
  }


3. **Mark Phone Number as Spam**

   Endpoint: /api/spam

- Method: POST
- Headers:
  Authorization: Bearer <token>
- Body: 
  ```bash
  {
  "phone": "0987654321"
  }

2. **Search Phone Number**

   Endpoint: /api/search

- Method: POST
- Headers:
  Authorization: Bearer <token>
- Query Parameter: phone=0987654321

## Postman Collection

[Potman Collection Link](https://api.postman.com/collections/28694554-23be9f5a-bf4b-4050-a671-61199590e4d9?access_key=PMAT-01HZWNZ1RX8VNTE1FG37FCBZ6V)


Use this Postman Collection to test the API endpoints.

### Importing the Collection

1. **Open Postman**.
2. **Go to Import** (top left corner).
3. **Select the Link tab**.
4. **Paste the Collection URL** and click **Continue**.
5. **Import the Collection**.

### Running Tests

1. **Set Environment**: Ensure you select the environment where `BASE_URL` and `TOKEN` are defined.
2. **Run the Collection**: Use the Collection Runner to execute the tests in sequence.

## Testing

To test the API:

1. **Use Postman** to make requests to the endpoints.
2. **Validate Responses** against expected status codes and JSON structures.
3. **Check Logs**: Monitor server logs for any errors or issues.

## Contributions

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, please reach out to [Email](mailto:jaspreetsingh6090@gmail.com).



### Explanation of Changes

- **API Endpoints**: Reformatted the endpoints section to match the specified format, making each section easier to read and implement.
- **Utilities**: Provided clear, formatted code blocks for the utility files.
- **Postman Collection**: Clear instructions on how to import and use the Postman collection.
- **Testing**: Added simple instructions to guide users in testing the API.
