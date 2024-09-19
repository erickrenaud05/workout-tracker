const mongoose = require('mongoose');

// "workout_id": ObjectId("64b2f2748f0a5a35f8e1dfce"),
//     "day": "Monday",
//         "name": "Upper Body Strength",
//             "exercises": [
//                 {
//                     "exercise_id": ObjectId("64b2f29a8f0a5a35f8e1dfd0"),
//                     "name": "Bench Press",
//                     "sets": [
//                         { "reps": 10, "weight_kg": 50, "rest_sec": 90 },
//                         { "reps": 8, "weight_kg": 55, "rest_sec": 90 },
//                         { "reps": 6, "weight_kg": 60, "rest_sec": 120 }
//                     ]
//                 };

const workoutSchema = new mongoose.Schema({
    day: {type: String, required: true},
    name: {type: String, required: true},
    exercise: [{
        name: {type: String, required: true},
        reps: {type: Number, required: true},
        sets: {type: Number, required: true},
    }],
});


module.exports = workoutSchema