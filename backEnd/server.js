const express = require('express');
const connectDB = require('./config/connection');
const {User} = require('./model');
const workoutSchema = require('./model/workout');
connectDB();

const app = express();

const PORT =  process.env.PORT || 3001;

app.post('/', async(req, res)=>{
    // const newUser = new User({
    //     name: 'Erick',
    //     username: 'COol',
    //     password: 'password'
    // });

    // await newUser.save();
    // res.status(200).json(newUser);

    // const user = await User.findOne({ name: 'Erick'});
    
    // if(user.checkPassword('password')){
    //     res.status(200).json(user)
    // } else{
    //     res.status(401).json('uhoh')
    // }


    //Create with workout
            // const response = await new User({
        //     name: 'Erick',
        //     username: 'Myuser',
        //     password: 'password',
        //     workout: [{
        //         day: 'Monday',
        //         name: 'ChestDay',
        //         exercise: [
        //             {
        //                 name: 'ChestPress',
        //                 reps: 2,
        //                 sets: 3,
        //             },
        //             {
        //                 name: 'FLies',
        //                 reps: 4,
        //                 sets: 5
        //             }
        //         ]
        //     }]
        // });
    
    
})

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});