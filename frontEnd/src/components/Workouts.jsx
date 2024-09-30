import React, { useState } from 'react';
import './Workouts.css'; // Keep for other styling
import Navbar from './Navbar';

const Workouts = () => {
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [customWorkouts, setCustomWorkouts] = useState([]);
  const [customLabel, setCustomLabel] = useState('');
  const [customTime, setCustomTime] = useState('');

  const daysInMonth = 30; // Simplified 30-day month for this example
  const daysPerWeek = 7;

  // Predefined workout plan
  const predefinedWorkouts = ['Arms', 'Legs', 'Back', 'Core'];

  // Function to add predefined workouts to the calendar
  const suggestWorkouts = () => {
    const newWorkoutPlan = {};
    for (let i = 1; i <= daysInMonth; i++) {
      newWorkoutPlan[i] = predefinedWorkouts[i % predefinedWorkouts.length];
    }
    setWorkoutPlan(newWorkoutPlan);
  };

  // Handle custom workout submission
  const handleCustomWorkoutSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { label: customLabel, time: customTime };
    setCustomWorkouts([...customWorkouts, newWorkout]);
    setCustomLabel('');
    setCustomTime('');
  };

  // Handle editing workouts in the calendar
  const handleWorkoutChange = (day, value) => {
    setWorkoutPlan({
      ...workoutPlan,
      [day]: value,
    });
  };

  // Create the rows for the calendar
  const calendarRows = [];
  for (let i = 0; i < daysInMonth; i += daysPerWeek) {
    const week = [];
    for (let j = i + 1; j <= i + daysPerWeek && j <= daysInMonth; j++) {
      week.push(
        <td key={j}>
          <div>Day {j}</div>
          <input
            type="text"
            value={workoutPlan[j] || ''}
            placeholder="Add workout"
            onChange={(e) => handleWorkoutChange(j, e.target.value)}
          />
        </td>
      );
    }
    calendarRows.push(<tr key={i}>{week}</tr>);
  }
  // Inline styles for full-page background image
  const workoutsStyle = {
    backgroundImage: 'url(/background-workout.jpg)', // Path to the background image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '97vw',
    padding: '20px',
    color: 'white', // Ensure text is visible on the background
  };
  return (
    <div className="workouts-container" style={workoutsStyle}> {/* Apply inline background style */}

      {/* Navigation Menu - now buttons in the top-right */}
      <Navbar /> {/* Display Navbar here */}

      {/* Monthly Calendar */}
      <h2>Monthly Workout Calendar</h2>
      <table className="calendar">
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {calendarRows}
        </tbody>
      </table>

      {/* Suggest Workouts Button */}
      <button className="suggest-button" onClick={suggestWorkouts}>
        Suggest Workouts
      </button>

      {/* Custom Workout Creation */}
      <h3>Create Custom Workouts</h3>
      <form onSubmit={handleCustomWorkoutSubmit}>
        <input
          type="text"
          placeholder="Workout Label"
          value={customLabel}
          onChange={(e) => setCustomLabel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Time (in minutes)"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          required
        />
        <button type="submit">Add Custom Workout</button>
      </form>

      {/* Display Custom Workouts */}
      <h4>Your Custom Workouts</h4>
      <ul>
        {customWorkouts.map((workout, index) => (
          <li key={index}>
            {workout.label} - {workout.time} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;