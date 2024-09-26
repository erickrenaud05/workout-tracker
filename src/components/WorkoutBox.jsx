import React from 'react';

const WorkoutBox = ({ workoutName }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '30%' }}>
      <h3>{workoutName}</h3>
      <p>Details of the workout here...</p>
    </div>
  );
};

export default WorkoutBox;