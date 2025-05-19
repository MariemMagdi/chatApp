# Chat Application

A full-stack chat application built using **React**, **Node.js**, **Express**, and **MongoDB**. This project provides authentication, chat functionality, and a modular frontend interface with a backend ready for future expansion, including real-time features.

## Key Features

* **Authentication**: User signup, login, and logout functionality implemented with **JWT** and **bcryptjs** for secure authentication.
* **Chat Interface**: A dynamic, modular chat UI with components like sidebar, chat window, and message bubbles.
* **Modular Components**: Built with **React** and **Tailwind CSS**, allowing for easy customization and future scalability.
* **Backend Setup**: **Node.js** and **Express** with routes for authentication and user management. Integrated with **MongoDB** via **Mongoose** for data storage.
* **Socket.IO (Future Expansion)**: Socket.IO is set up for future real-time chat capabilities.

## Tech Stack

* **Frontend**: React, React Router, Tailwind CSS
* **Backend**: Node.js, Express, TypeScript
* **Database**: MongoDB (via Mongoose)
* **Authentication**: JWT, bcryptjs
* **Real-Time**: Socket.IO (future chat features)

## Setup & Installation

### Prerequisites

* Node.js (version 14 or higher)
* MongoDB instance or MongoDB Atlas account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. Install dependencies for both frontend and backend:

   * For the **frontend**:

     ```bash
     cd frontend
     npm install
     ```

   * For the **backend**:

     ```bash
     cd backend
     npm install
     ```

3. Set up environment variables for the backend:
   Create a `.env` file in the `backend` directory and add the following:

   ```env
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongo_connection_string
   ```

4. Start the **frontend**:

   ```bash
   cd frontend
   npm start
   ```

5. Start the **backend**:

   ```bash
   cd backend
   npm run dev
   ```

6. Visit the application at `http://localhost:3000` for the frontend.

## Project Structure

```
/frontend
  /src
    /components
      /Auth
      /Chat
      /UI
/backend
  /src
    /controllers
    /routes
    /models
  .env
  server.ts
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
