import React from 'react';
import './HomePage.css'; // External stylesheet
import Logo from '../assets/logo.jpg';

const HomePage = () => {
  const userName = 'John Doe'; // Example username, replace with dynamic user data

  // Inline styles for full-page background image
  const homepageStyle = {
    backgroundImage: 'url(/background-home.jpg)', // Path to the background image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Full viewport height
    padding: '20px',
    color: 'white', // Ensure text is visible on the background
  };

  return (
    <div className="homepage-container" style={homepageStyle}>
      {/* Left-aligned logo */}
      <div className="logo-center">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {/* Navigation Menu - now buttons in the top-right */}
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/workouts">Workouts</a>
        <a href="/profile">Profile</a>
      </nav>

      {/* Welcome Message */}
      <h2 className="welcome-message">Welcome, {userName}</h2>

      {/* Three Side-by-Side Boxes */}
      <div className="three-box-container">
        <div className="box">
          <h3>Today's Activities</h3>
          <ul>
            <li>Goal 1 - <input type="checkbox" /> Completion Tracker</li>
            <li>Goal 2 - <input type="checkbox" /> Completion Tracker</li>
            <li>Goal 3 - <input type="checkbox" /> Completion Tracker</li>
          </ul>
        </div>

        <div className="box">
          <h3>Today's Exercises</h3>
          <p><strong>Leg Day</strong></p>
          <ul>
            <li><input type="checkbox" /> Squats</li>
            <li><input type="checkbox" /> Lunges</li>
          </ul>
          <p><strong>Arms</strong></p>
          <ul>
            <li><input type="checkbox" /> Bicep Curls</li>
            <li><input type="checkbox" /> Tricep Dips</li>
          </ul>
        </div>

        <div className="box">
          <h3>Fitness News</h3>
          <ul>
            <li><a href="https://fitness-article1.com">10 Tips for Better Workouts</a></li>
            <li><a href="https://fitness-article2.com">Top 5 Home Exercises</a></li>
          </ul>
        </div>
      </div>

      {/* Box for Tomorrow's Workout & Quick Workouts */}
      <div className="tomorrow-workout-container">
        <div className="box">
          <h3>Tomorrow's Workout</h3>
          <p><strong>Leg Day:</strong> Squats, Lunges</p>
        </div>

        <div className="box">
          <h3>Quick Workouts</h3>
          <ul>
            <li>10 Min Abs Workout</li>
            <li>15 Min Cardio Blast</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Follow us on Instagram: <a href="https://instagram.com/Limitless">@Limitless</a></p>
        <p>Contact: <a href="mailto:info@limitlessapp.com">info@limitlessapp.com</a></p>
      </footer>
    </div>
  );
};

export default HomePage;