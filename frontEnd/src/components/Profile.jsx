import React, { useState } from 'react';
import './Profile.css'; // External CSS for styling
import Navbar from './Navbar';


const Profile = (props) => {
  const [bio, setBio] = useState({
    name: props.user.name,
    age: props.user.age,
  });
   // State for favorite workouts
  const [favoriteWorkouts, setFavoriteWorkouts] = useState(['Running', 'Weightlifting', 'Cycling']);

  // State for goal progress (0 to 100) and goal labels
  const [goals, setGoals] = useState([
    { label: 'Run 5K', progress: 50 },
    { label: 'Lift 200 lbs', progress: 70 },
    { label: 'Lose 10 lbs', progress: 30 },
  ]);

  
  
  // Update bio information
  const handleBioChange = (e) => {
    const { name, value } = e.target;
    setBio({
      ...bio,
      [name]: value,
    });
  };

  // Update favorite workouts
  const handleWorkoutChange = (index, value) => {
    const newWorkouts = [...favoriteWorkouts];
    newWorkouts[index] = value;
    setFavoriteWorkouts(newWorkouts);
  };

  // Update goal progress and label
  const handleGoalChange = (index, field, value) => {
    const newGoals = [...goals];
    newGoals[index][field] = field === 'progress' ? Math.min(100, Math.max(0, value)) : value;
    setGoals(newGoals);
  };

  return (
    <div className="profile-container" > {/* Inline background style */}
      {/* Navigation Menu - now buttons in the top-right */}
      <Navbar /> {/* Display Navbar here */}

      {/* Bio Information and Favorite Workouts Side by Side */}
      <div className="profile-layout">
        {/* Bio Information Section */}
        <div className="bio-info">
          <label>Name:</label>
          <input type="text" name="name" value={bio.name} onChange={handleBioChange} />
          <label>Age:</label>
          <input type="text" name="age" value={bio.age} onChange={handleBioChange} />
          {/* <label>Height:</label> */}
          {/* <input type="text" name="height" value={bio.height} onChange={handleBioChange} />
          <label>Current Weight:</label>
          <input type="text" name="currentWeight" value={bio.currentWeight} onChange={handleBioChange} />
          <label>Workout Experience:</label>
          <select name="experience" value={bio.experience} onChange={handleBioChange}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <label>Target Weight:</label>
          <input type="text" name="targetWeight" value={bio.targetWeight} onChange={handleBioChange} /> */}
        </div>

        {/* Favorite Workouts Section */}
        <div className="favorite-workouts">
          <h3>Favorite Workouts</h3>
          {favoriteWorkouts.map((workout, index) => (
            <input
              key={index}
              type="text"
              value={workout}
              onChange={(e) => handleWorkoutChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>

      {/* Goal Progress Section */}
      <h3>Goal Progress</h3>
      <div className="goal-progress-container">
        {goals.map((goal, index) => (
          <div className="goal-box" key={index}>
            <input
              type="text"
              value={goal.label}
              onChange={(e) => handleGoalChange(index, 'label', e.target.value)}
              placeholder="Enter Goal"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={goal.progress}
              onChange={(e) => handleGoalChange(index, 'progress', e.target.value)}
            />
            <p>{goal.progress}% Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;