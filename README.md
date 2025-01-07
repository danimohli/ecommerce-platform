**E-commerce Platform**

**Overview**
This is a full-stack e-commerce platform built using **React**, **Node.js**, **Express**, and **MongoDB**. The project demonstrates core e-commerce functionalities, including user authentication, product management, search, and notifications. It is designed as a portfolio project to showcase skills in modern web development and application design.

---

**Features**

**Backend**
- **User Authentication**:
  - Registration and Login with JWT-based authentication.
  - Password hashing using bcrypt.
- **Protected Routes**:
  - Role-based access control for admin routes.
- **Email Notifications**:
  - Automated email notifications using Nodemailer.
- **Search and Filters**:
  - API support for searching and filtering products by category, price, etc.
- **Database**:
  - MongoDB for data storage with Mongoose ODM.

**Frontend**
- **React-based Interface**:
  - Dynamic UI built with React.
- **JWT Authentication**:
  - Token-based session management.
- **Search and Filter UI**:
  - User-friendly components for browsing and finding products.
- **Error Handling**:
  - Display error messages for invalid inputs or failed actions.

---

**Technologies Used**

**Backend**
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Nodemailer** for email notifications
- **bcrypt** for password hashing
- **jsonwebtoken (JWT)** for authentication
**Frontend**
- **React** (v18+)
- **React Router DOM** for routing
- **Axios** for HTTP requests
- **Bootstrap** for styling (optional)

---

**Getting Started**

**Prerequisites**
- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (local or cloud instance)
- A valid email account for Nodemailer setup

**Installation**

**1. Clone the Repository**
```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
```

**2. Setup Backend**
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory with the following content:
```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```
Start the backend server:
```bash
npm run dev
```

**3. Setup Frontend**
```bash
cd ../client
npm install
```
Create a `.env` file in the `client` directory with the following content:
```env
HOST=localhost
PORT=3000
```
Start the frontend:
```bash
npm start
```

---

**File Structure**

**Backend (`/server`)**
- **index.js**: Entry point of the backend server.
- **routes/**: Contains API route handlers.
- **models/**: Defines Mongoose schemas and models.
- **utils/**: Helper functions (e.g., email notifications).

**Frontend (`/client`)**
- **src/App.js**: Main application file.
- **src/components/**: Contains reusable UI components.
- **src/pages/**: Defines page-level components (e.g., Register, Login, Dashboard).
- **src/utils/**: Utility functions (e.g., API calls).

---

**Usage**

**1. User Registration and Login**
- Navigate to `/register` to create an account.
- Navigate to `/login` to authenticate and receive a JWT token.

**2. Protected Routes**
- Use a valid JWT token to access protected resources.

**3. Admin Features**
- Admin users can manage products and access exclusive routes.

---

**Phase Breakdown**

**Phase 0: Version Control**
- Frequent commits with meaningful messages.
- Use of branches and pull requests for collaboration.

**Phase 1: Core Setup**
- Environment setup.
- Basic authentication and project CRUD operations.

**Phase 2: Ticket Management**
- User roles and protected routes.
- JWT-based authentication.

**Phase 3: Notifications and Search**
- Email notifications for user actions.
- Search and filter functionality for products.

**Phase 4: Final Touches**
- Analytics dashboard.
- UI/UX improvements.
- Deployment to production.

---

**Future Enhancements**
- Implement payment gateway integration.
- Add advanced filtering options (e.g., by rating, brand).
- Introduce a recommendation system based on user behavior.
- Improve accessibility and responsiveness.

---

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

---

**Contact**
For questions or feedback, feel free to reach out:
- **Email**: danimohlife@gmail.com
- **GitHub**: [danimohli](https://github.com/danimohli)
