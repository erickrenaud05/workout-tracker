import React from 'react';
import { useState } from 'react'

const WorkoutLog = ({ exercises, onLogWorkout }) => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [sets, setSets] = useState();
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a workout entry
      const workoutEntry = {
        name: selectedExercise,
        sets: parseInt(sets, 10),
        reps: parseInt(reps, 10),
        weight: parseInt(reps, 10),
      };
  
      // Call the parent function to log the workout
      onLogWorkout(workoutEntry);
  
      // Clear the input fields
      setSelectedExercise('');
      setSets('');
      setReps('');
      setWeight('');
    };
  
    return (
      <div className="workout-logger">
        <h3>Log Your Workout</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Exercise:
              <select
                value={selectedExercise}
                onChange={(e) => {
                    exercises.exercise.map((exercise, index) => {
                        if(exercise.name === e.target.value){
                            setSets(exercise.sets);
                            setReps(exercise.reps)
                        }
                    })
                    setSelectedExercise(e.target.value)
                }}
                required
              >
                <option value="" disabled>Select an exercise</option>
                {exercises.exercise.map((exercise, index) => (
                  <option key={index} value={exercise.name}>
                    {exercise.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Sets:
              <input
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Reps:
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Weight:
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Log Workout</button>
        </form>
      </div>
    );
  };

export default WorkoutLog;