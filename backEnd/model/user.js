const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    workout: [{workoutSchema}],
    workoutLog: [{workoutSchema}],
});

const User = mongoose.model('user', userSchema);

module.exports = User;


