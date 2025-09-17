# MERN Student CRUD App

A simple **MERN (MongoDB, Express, React, Node.js)** application that demonstrates **Create, Read, Update, and Delete** operations for student records (name, email, age, etc.).  
The app uses **MongoDB Atlas** for the database and runs both frontend and backend locally.

---

## ✨ Features
- Add new student details.
- View all students in a responsive table.
- Edit or delete existing student information.
- RESTful API with Express + MongoDB Atlas.

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (cloud)

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Prerequisites
Make sure you have installed:
- **Node.js** (>= 18 recommended)
- **npm** or **yarn**
- A **MongoDB Atlas cluster** and a connection URI

---

### 2️⃣ Clone the Repository

### 3️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the server:
```bash
npm run dev
```
> The backend will run on **http://localhost:5000**

---

### 4️⃣ Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
> The frontend will run on **http://localhost:3000**

---

## 🌐 Connecting Frontend & Backend
In the frontend project, check the API base URL (e.g., inside `src/api.js` or similar):
```js
export const API_URL = "http://localhost:5000";
```
Adjust if needed.

---


## ☁️ Deployment Guide

You can deploy **frontend** and **backend** separately.

### 1️⃣ Deploy Backend (Express API)
**Option A: Render (Free & Simple)**
1. Push code to GitHub.
2. Go to [Render](https://render.com/) → "New Web Service".
3. Connect your GitHub repo.
4. Select the **backend** folder as the root.
5. Set environment variables (MONGO_URI, PORT).
6. Deploy.

**Option B: Railway / Heroku / Vercel**  
Steps are similar—create a new service, set environment variables, deploy.

---

### 2️⃣ Deploy Frontend (React)
**Option A: Vercel**
1. Push code to GitHub.
2. Go to [Vercel](https://vercel.com/) → "New Project".
3. Import the repo.
4. Select the **frontend** folder.
5. Add an environment variable if needed:
   ```
   REACT_APP_API_URL=<your_backend_live_url>
   ```
6. Deploy.

**Option B: Netlify**
- Similar process: connect repo → select frontend folder → build command `npm run build` → publish `build/` folder.

---

## 🔑 Environment Variables Summary
| Variable | Description |
|----------|------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Backend server port (default: 5000) |
| `REACT_APP_API_URL` | Frontend API URL for production |

---


## 📸 Screenshots
| ![Dashboard](../screenshots/dashboard.png) | ![Data Table](../screenshots/table.png) |  

---


