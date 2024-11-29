import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../styles/login.module.css';

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful signup
    alert('Successfully signed up!');
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Welcome to EduSphere! Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <div className={styles.rememberMe}>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.loginBtn}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;