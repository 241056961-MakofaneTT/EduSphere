import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../styles/login.module.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    alert(`Logging in with:
      Email: ${email}
      Password: ${password}
      Remember Me: ${rememberMe ? 'Yes' : 'No'}
    `);
    navigate('/dashboard'); // Redirect to dashboard
  };

  const handleSignUp = () => {
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Welcome Back to EduSphere, Promoting Equal Education for Everyone.</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="zain.lols@emmerich.io"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.loginBtn}>Login</button>
            <button
              type="button"
              onClick={handleSignUp}
              className={styles.signupBtn}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;