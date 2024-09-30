import React from 'react';
import './HomePage.css'; // External stylesheet
import Navbar from './Navbar';
import Footer from './Footer';
import {useState} from 'react';

import WorkoutForm from './WorkoutForm';
import WorkoutLog from './WorkoutLog';
import { useMutation } from '@apollo/client';
import { LOG_WORKOUT } from '../utils/mutations';

// const HomePage = (props) => {
//   const userName = props.user.name; // Example username, replace with dynamic user data

//   return (
//     <div className="homepage-container">
//       {/* Navigation Menu - now buttons in the top-right */}
//       <Navbar /> {/* Display Navbar here */}

//       {/* Welcome Message */}
//       <h2 className="welcome-message">Welcome, {userName}</h2>

//       {/* Three Side-by-Side Boxes */}
//       <div className="three-box-container">
//          <div className="box">
//           <h3>Today's Activities</h3>
//           <ul>
//             <li>Goal 1 - <input type="checkbox" /> Completion Tracker</li>
//             <li>Goal 2 - <input type="checkbox" /> Completion Tracker</li>
//             <li>Goal 3 - <input type="checkbox" /> Completion Tracker</li>
//           </ul>
//         </div> 

//         <div className="box">
//           <h3>Today's Exercises</h3>
//           <p><strong>Leg Day</strong></p>
//           <ul>
//             <li><input type="checkbox" /> Squats</li>
//             <li><input type="checkbox" /> Lunges</li>
//           </ul>
//           <p><strong>Arms</strong></p>
//           <ul>
//             <li><input type="checkbox" /> Bicep Curls</li>
//             <li><input type="checkbox" /> Tricep Dips</li>
//           </ul>
//         </div> 

//         <div className="box">
//           <h3>Fitness News</h3>
//           <ul>
//             <li><a href="https://fitness-article1.com">10 Tips for Better Workouts</a></li>
//             <li><a href="https://fitness-article2.com">Top 5 Home Exercises</a></li>
//           </ul>
//         </div> 
//       </div>

//        {/* Box for Tomorrow's Workout & Quick Workouts */}
//       <div className="tomorrow-workout-container">
//         <div className="box">
//           <h3>Tomorrow's Workout</h3>
//           <p><strong>Leg Day:</strong> Squats, Lunges</p>
//         </div>

//         <div className="box">
//           <h3>Quick Workouts</h3>
//           <ul>
//             <li>10 Min Abs Workout</li>
//             <li>15 Min Cardio Blast</li>
//           </ul>
//         </div> 
//       </div>

//       {/* Footer */}
//       <Footer />
//       </div>
//   );
// };

const HomePage = ({ user }) => {
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const { name: userName, workout: userWorkouts } = user;
  const [logWorkout, { error }] = useMutation(LOG_WORKOUT);

  const handleLogWorkout = async(workoutEntry) => {
    setLoggedWorkouts([...loggedWorkouts, workoutEntry]);
    if(workoutEntry.length === 0){
      setSelectedWorkout('');
      alert('No workout recorded')
      return
    };

    try {
      const formattedExercises = workoutEntry.map(exercise => ({
        ...exercise,
        sets: parseInt(exercise.sets, 10), // Convert to integer
        reps: parseInt(exercise.reps, 10),
        weight: parseInt(exercise.weight, 10)  // Convert to integer
      }));

        const workouts = await logWorkout({
            variables: {
                name: selectedWorkout.name,
                exercises: formattedExercises
            },
            context: {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${localStorage.getItem('JWT')}`
                }
              }
        });

        alert('Workout Created')
        setLoggedWorkouts([]);
        setSelectedWorkout('');
    } catch (error) {
        console.log(error);
    }
  };

  const handleStartWorkout = (workout) => {
    setSelectedWorkout(workout);
  };
  
  // If no workouts are found
  if (!userWorkouts || userWorkouts.length === 0) {
    return (
      <div className="homepage-container">
        <Navbar />
        <h2 className="welcome-message">Welcome, {userName}</h2>
        <div className='three-box-container'>
          <div className="box">
            <h3>Select Workout</h3>
            <div><h3>No workouts</h3></div>
          </div>
          <div className="box">
            <h3>Create Workout</h3>
            <WorkoutForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <Navbar />
      <h2 className="welcome-message">Welcome, {userName}</h2>
      <div className='three-box-container'>
        <div className="box">
          <h3>Select Workout</h3>
          <ul>
            {userWorkouts.map((workout, key) => (
              <li key={key}>
                <button type="button" onClick={() => handleStartWorkout(workout)}>
                  {workout.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <h3>Create Workout</h3>
          <WorkoutForm />
        </div>
      
        <div className="box">
            <h3>Log Workout</h3>
            {selectedWorkout && (
              <WorkoutLog
                exercises={selectedWorkout} // Pass exercises from selected workout
                onLogWorkout={handleLogWorkout}
              />
            )}
          </div>
        </div>
      {/* {selectedWorkout && <WorkoutLog exercises={selectedWorkout}/>} */}
      <Footer />
    </div>
  );
};

export default HomePage;