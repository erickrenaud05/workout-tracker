import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import Workouts from './components/Workouts';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for SplashPage when visiting "/" */}
        <Route path="/" element={<SplashPage />} />
        {/* Other routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
