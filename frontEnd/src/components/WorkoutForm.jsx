import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT } from '../utils/mutations';

const WorkoutForm = () => {
  const [createWorkoutMutation, { error }] = useMutation(CREATE_WORKOUT);
  const [workoutName, setWorkoutName] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '' }]);

  const handleWorkoutNameChange = (e) => {
    setWorkoutName(e.target.value);
  };

  const handleExerciseChange = (index, e) => {
    const updatedExercises = exercises.map((exercise, i) => {
      if (i === index) {
        return { ...exercise, [e.target.name]: e.target.value };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '' }]);
  };

  const removeExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formattedExercises = exercises.map(exercise => ({
        ...exercise,
        sets: parseInt(exercise.sets, 10), // Convert to integer
        reps: parseInt(exercise.reps, 10)  // Convert to integer
      }));

      
    // Here you can handle the form submission, e.g., send data to an API
    try {
        const workouts = await createWorkoutMutation({
            variables: {
                name: workoutName,
                exercises: formattedExercises
            },
            context: {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${localStorage.getItem('JWT')}`
                }
              }
        });

        alert('Workout Created!')
        setWorkoutName('');
        setExercises([{ name: '', sets: '', reps: '' }]);
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Workout Name:
          <input
            type="text"
            value={workoutName}
            onChange={handleWorkoutNameChange}
            required
          />
        </label>
      </div>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <label>
            Exercise Name:
            <input
              type="text"
              name="name"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
          </label>
          <label>
            Sets:
            <input
              type="number"
              name="sets"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
          </label>
          <label>
            Reps:
            <input
              type="number"
              name="reps"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
          </label>
          <button type="button" onClick={() => removeExercise(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExercise}>
        Add Exercise
      </button>
      <button type="submit">Create Workout</button>
    </form>
  );
};

export default WorkoutForm;