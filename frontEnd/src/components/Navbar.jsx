import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import './NavBar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Logo or image */}
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      
      {/* Right side: Links */}
      <div className="navbar-right">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/workouts" className="nav-link">Workouts</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
