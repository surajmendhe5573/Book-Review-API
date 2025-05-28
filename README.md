# Book Review API

A REST API backend for a **Book Review Application** that allows users to register, login, explore books, add reviews, and manage their book reviews.

## Objective

The objective of this project is to create a backend service that supports core functionalities for a book review application including user authentication, book management, and review operations.

## Features

- User Registration and Login with JWT-based authentication
- CRUD operations for books
- Add, update, and delete reviews
- Search and filter books by title, author, or genre
- Pagination for book listings
- Password hashing with `bcrypt`
- Input validation

## API Endpoints

### User Routes

| Method | Endpoint             | Description                  | Authentication |
|--------|----------------------|------------------------------|----------------|
| POST   | `/users/signup`      | Register a new user          | No             |
| POST   | `/users/login`       | Login user and get JWT token | No             |
| GET    | `/users`             | Get all users         | No            |

### Book Routes

| Method | Endpoint          | Description                     | Authentication |
|--------|-------------------|---------------------------------|----------------|
| POST   | `/books`          | Add a new book                  | Yes            |
| GET    | `/books`          | List all books (with filtering) | No             |
| GET    | `/books/search`   | Search books by query           | No             |
| GET    | `/books/:id`      | Get book by ID                  | No             |

### Review Routes

| Method | Endpoint               | Description                   | Authentication |
|--------|------------------------|-------------------------------|----------------|
| POST   | `/reviews/books/:id`   | Add review to a book          | Yes            |
| PUT    | `/reviews/:id`         | Update a review               | Yes            |
| DELETE | `/reviews/:id`         | Delete a review               | Yes            |

## Example Requests

### Register a User

**Request:**
```json
POST /users/signup
Content-Type: application/json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123"
}
```

---

### Login a User

**Request:**
```json
POST /api/users/login
Content-Type: application/json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

---

## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/surajmendhe5573/Book-Review-API.git>
   cd <Book-Review-API>


## Getting Started

**Install dependencies and start the server:**

```bash
npm install
npm start
```

### Prerequisites
- Node.js and npm installed
- MongoDB installed

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Password Hashing**: bcrypt
- **API Testing**: Postman
- **Version Control**: Git and GitHub
## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGO_URI=mongodb://localhost:27017/book-review-api

# Secret Key
JWT_SECRET= secretKey

```


## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
















