const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    // workout: [{workoutSchema}],
    // workoutLog: [{workoutSchema}],
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

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);


module.exports = User;


