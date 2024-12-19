# User Management Dashboard 🎯

A modern React application for managing users with authentication, CRUD operations, and a beautiful UI. Built with React, React Router, and Tailwind CSS.

## 🌟 Features

- 🔐 Authentication system with token management
- 👥 User management (Create, Read, Update, Delete)
- 🔍 Real-time search functionality
- 📱 Responsive design
- 📄 Pagination support
- 🎨 Modern UI with Tailwind CSS
- 🚀 Integration with ReqRes API

## 🛠️ Tech Stack

- ⚛️ React
- 🌐 React Router for navigation
- 🎨 Tailwind CSS for styling
- 🔧 ShadCN UI components
- 🌍 ReqRes API for backend

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management.git
cd user-management
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install react-router-dom @radix-ui/react-slot @radix-ui/react-toast class-variance-authority clsx tailwindcss-animate lucide-react tailwindcss
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔑 Default Login Credentials

```
Email: eve.holt@reqres.in
Password: cityslicka
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx
│   ├── UserList.jsx
│   └── EditUser.jsx
├── context/
│   └── AuthContext.jsx
├── App.jsx
└── index.js
```

## 🔥 Features in Detail

### Authentication 🔐
- Login system with token management
- Protected routes
- Automatic redirect to login for unauthorized users

### User Management 👥
- View all users in a paginated table
- Search users by name
- Edit user details
- Delete users
- Responsive avatar display

### UI/UX Features 🎨
- Clean and modern interface
- Responsive design for all screen sizes
- Loading states
- Toast notifications for actions
- Intuitive navigation

## 💻 API Integration

The application integrates with the ReqRes API:
- Base URL: `https://reqres.in/`
- Endpoints used:
  - POST `/api/login` - Authentication
  - GET `/api/users?page={page}` - Fetch users
  - PUT `/api/users/{id}` - Update user
  - DELETE `/api/users/{id}` - Delete user

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- ReqRes API for providing the test API
- ShadCN UI for the beautiful components
- The React community for amazing tools and libraries

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/user-management](https://github.com/yourusername/user-management)