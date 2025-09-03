# MERN Stack User Management App

This is a full-stack **MERN (MongoDB, Express, React, Node.js)** application for managing users.  
The app provides a simple web interface to create, view, update, and delete users.

---

## 🚀 Features

### Frontend
- Built with **React** and **Material UI**
- User-friendly interface to manage users
- Routing with **React Router**

### Backend
- RESTful API built with **Express**
- **MongoDB** integration using **Mongoose**
- Endpoints for CRUD operations on users

---

## 📂 Project Structure
```
mernstack_app/
│
├── backend/   # Node.js + Express + MongoDB backend
└── frontend/  # React + Material UI frontend
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js and npm
- MongoDB instance (local or cloud)

---

### 🔧 Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd mernstack_app/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure your **MongoDB connection string** in `server.js`.

4. Start the backend server:
   ```sh
   node server.js
   ```
   The backend will run at: [http://localhost:3001](http://localhost:3001)

---

### 🎨 Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd mernstack_app/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the React app:
   ```sh
   npm start
   ```
   The frontend will run at: [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.  
2. Click the **"User" button** to navigate to the user management page.  
3. Add, update, or delete users as needed.

---

## 📡 API Endpoints

- `GET /api/users` → Get all users  
- `POST /api/createuser` → Add a new user  
- `POST /api/updateuser` → Update an existing user  
- `POST /api/deleteuser` → Delete a user  

---
