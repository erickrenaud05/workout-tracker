import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashPage.css';
import Logo from '../assets/logo.jpg';

import { useMutation } from '@apollo/client';
import { CREATE_USER, LOGIN  } from '../utils/mutations';

const SplashPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [form, setForm] = useState(true);
  const navigate = useNavigate();
  const [login, { loginError }] = useMutation(LOGIN);
  const [createUser, { signUpError }] = useMutation( CREATE_USER);

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
  const handleSignUp = async(e) => {
    e.preventDefault();
    try {
      const { data } = await createUser({
        variables: { username, password, name, age: Number(age) },
      });

      if(!data.createUser){
        alert('Invalid credentials');
        setUsername('');
        setPassword('');
        return;
      }

      localStorage.setItem('JWT', data.createUser.token);

      setUsername('');
      setPassword('');
      navigate('/home');
    } catch (err) {
      alert('User already exist');
    }

   
  };

  const formSwap = (e)=>{
    e.preventDefault()
    setForm(!form);
  }

  const loginForm = <form className="login-form" onSubmit={handleLogin}>
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
  <button type="button" onClick={formSwap}>signUp instead</button>
</form>;

  const signUpForm = <form className="login-form" onSubmit={handleSignUp}>
  <h2>Signup</h2>
  <input
    type="text"
    name="username"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <input
    type="text"
    name="name"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <input
    type="number"
    name="age"
    placeholder="Age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    required
  />
  <button type="submit">Sign Up</button>
  <button type="button" onClick={formSwap}>Login instead</button>
</form>

  return (
    <div className="splash-container">
      {/* Logo in the top-right corner */}
      <div className="logo-box">
        <img src={Logo} alt="Logo" className="logo" /> {/* Use logo.jpg */}
      </div>

      {/* Login Form */}
      {form ? loginForm : signUpForm}
    </div>
  );
};

export default SplashPage;