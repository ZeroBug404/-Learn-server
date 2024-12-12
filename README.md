# Japanese Vocabulary Learning Application - Backend

This is the backend repository for the **Japanese Vocabulary Learning Application**, responsible for handling authentication, lesson management, vocabulary APIs, and user role management.

## Features

- JWT-based authentication with secure role-based access control.
- CRUD operations for lessons and vocabularies.
- Vocabulary filtering by lesson number.
- Admin-specific functionalities for managing users, lessons, and vocabularies.
- Secure RESTful APIs with robust error handling and input validation.

## Tech Stack

- **Framework**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
- **ORM**: Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Utilities**: dotenv for environment variables, bcrypt for password hashing.

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
