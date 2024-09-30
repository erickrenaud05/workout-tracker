const mongoose = require('mongoose');
const workoutSchema = require('./workout')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique:false},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    age: Number,
    weight: Number,
    goal: String,
    workout: [workoutSchema],
    workoutLog: [workoutSchema],
});

// hashes password before it is saved in database
userSchema.pre('save', function(next){
    if (!this.isModified('password')) return next();

    try {
        bcrypt.hash(this.password, saltRounds, (err, hash)=>{
            if(err){
                throw new Error('error hashing password');
            }

            this.password = hash;
            next();
        });
    } catch (error) {
        res.status(500).json('Internal server error');
        return;
    }
});

userSchema.methods.isCorrectPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);


module.exports = User;


