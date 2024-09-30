import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import Workouts from './components/Workouts';
import Profile from './components/Profile';
import { useQuery } from '@apollo/client';
import { GET_USER } from './utils/queries';
import { useState } from 'react';

function App() {
  const { validate, setValidate } = useState(true);
  const { loading, error, data } = useQuery(GET_USER, {
  context: {
      headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem('JWT')
      }
    }});

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) return <Router><Routes><Route path="/" element={<SplashPage />} /></Routes></Router>;

  const user = data.user;
  
  return (
  
    <Router>
      <Routes>
        {/* Route for SplashPage when visiting "/" */}
        <Route path="/" element={<SplashPage />} />
        {/* Other routes */}
        <Route path="/home" element={<HomePage user={user}/>} />
        <Route path="/workouts" element={<Workouts/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;