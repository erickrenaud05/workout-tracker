import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashPage.css';
import Logo from '../assets/logo.jpg';

import { useMutation } from '@apollo/client';
import { CREATE_USER, LOGIN  } from '../utils/mutations';

const SplashPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login, { error }] = useMutation(LOGIN);

  const handleLogin = async(e) => {
    e.preventDefault();
    // Implement login logic
    
    try {
      const { data } = await login({
        variables: { username, password },
      });

      if(!data.login){
        alert('Invalid credentials');
        setUsername('');
        setPassword('');
        return;
      }

      localStorage.setItem('JWT', data.login.token);

      setUsername('');
      setPassword('');
      navigate('/home');
    } catch (err) {
      console.error(err);
    }

   
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