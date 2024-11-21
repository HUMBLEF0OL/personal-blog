Here’s the updated README file with your requested changes:  

---

# **Personal Blog Application**

This is a **Personal Blog Application** built as part of the [Personal Blog project on roadmap.sh](https://roadmap.sh/projects/personal-blog). The application is developed using **Next.js** with **Material-UI (MUI)** for the frontend and **Node.js** with **Express** for the backend. It includes dynamic blog post rendering and user authentication powered by **JWT tokens**.

---

## **Features**

- Dynamic blog post rendering.
- User authentication using **JWT tokens**.
- Backend API built with **Express.js**.
- Easy local setup and execution.

---

## **Technologies Used**

### Frontend:
- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Material-UI (MUI)](https://mui.com/)

### Backend:
- **Framework:** [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Authentication:** [JWT (JSON Web Tokens)](https://jwt.io/)

---

## **Environment Setup**

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- A code editor (e.g., [VS Code](https://code.visualstudio.com/)).

---

## **Installation**

### 1. Clone the Repository
```bash
git clone <[repository-url](https://github.com/HUMBLEF0OL/personal-blog)>
cd <personal-blog>
```

### 2. Install Dependencies
- Navigate to the `frontend` and `backend` directories and install dependencies.

#### **Frontend:**
```bash
cd frontend
npm install
```

#### **Backend:**
```bash
cd backend
npm install
```

---

## **Environment Configuration**

### Frontend:
No environment variables are required.

### Backend:
Create an `.env` file in the `backend` directory with the following variables:
```
PORT=5000
SECRET_KEY=this is the secret salt
```

---

## **Running the Project Locally**

### 1. Start the Backend Server
Navigate to the `backend` directory and run:
```bash
npm start
```
The backend server will start on [http://localhost:5000](http://localhost:5000).

### 2. Start the Frontend Development Server
Navigate to the `frontend` directory and run:
```bash
npm run dev
```
The frontend application will run on [http://localhost:3000](http://localhost:3000).

---

## **Project Structure**

### Frontend (App Router):
```
frontend/
├── app/               # App Router directory for Next.js
│   ├── layout.js      # Layout component
│   ├── page.js        # Main entry page
│   └── ----          # Blog-related pages
├── components/        # Reusable React components
├── public/            # Static assets
├── styles/            # Global and modular styles
└── package.json       # Frontend dependencies and scripts
```

### Backend:
```
backend/
├── routes/            # API route definitions
├── models/            # Database models (if applicable)
├── controllers/       # Route handler functions
├── middleware/        # JWT and other middleware
├── .env               # Environment variables
└── package.json       # Backend dependencies and scripts
```

---

## **Commands**

### **Frontend**
- Install dependencies: `npm install`
- Run the development server: `npm run dev`

### **Backend**
- Install dependencies: `npm install`
- Run the server: `npm start`