import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashPage.css';
import Logo from '../assets/logo.jpg';
import Background from '../assets/background-profile.jpg';


const SplashPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
    navigate('/home');
  };

  return (
    <div className="splash-container">
      {/* Logo in the top-right corner */}
      <div className="logo-box">
        <img src={Logo} alt="Logo" className="logo" /> {/* Use logo.jpg */}
      </div>

      {/* Login Form */}
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SplashPage;