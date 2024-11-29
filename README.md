# EduSphere Web Application

## Overview
EduSphere is a web application designed to promote equal educational opportunities for everyone, with a special focus on students with disabilities. The platform incorporates accessibility enhancements, user management features, and a dashboard to manage services and resources efficiently.

## Features

### User Authentication
- Register, log in, and manage user accounts securely.

### Dashboard
- Dynamic sidebar for seamless navigation.
- Main content updates dynamically based on selected menu items.
- Real-time analytics and user feedback sections.
- Quick access to upcoming events and resources.

### Service Management
- Create, edit, view, and delete services with ease.
- Manage service descriptions, titles, and images through a user-friendly interface.

### Accessibility Enhancements
- Tools such as improved campus maps and ramps designed to assist students with disabilities.

## Technologies Used

### Frontend
- React
- React Icons
- CSS Modules for component-specific styling

### Routing
- React Router

### State Management
- React Hooks (`useState`)

## Project Structure
```
src/
├── components/
│   ├── Login.js          // Login page component
│   ├── Register.js       // Registration page component
│   ├── Dashboard.js      // Main dashboard component
│   ├── Sidebar.js        // Sidebar navigation component
│   ├── Services.js       // Services management component
├── styles/
│   ├── login.module.css  // Styling for Login and Register pages
│   ├── dashboard.module.css // Styling for the Dashboard
│   ├── services.module.css // Styling for the Services page
├── assets/
│   ├── events/           // Static images for events
└── App.js                // Main application component
```

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/edusphere.git
   cd edusphere
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Guide

### Sign Up
- Provide your name, email, and password to create an account.

### Log In
- Enter your credentials to access the dashboard.

### Dashboard Navigation
- Use the sidebar to navigate between features such as Services, Faculties, Forum, and Resources.

### Service Management
- Add new services using the "Create" button on the Services page.
- Edit or delete services using the respective buttons.

### View Content
- Use the top search bar to quickly find specific resources.

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Open a pull request describing your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
Special thanks to contributors and the community for supporting inclusive education through technology.

