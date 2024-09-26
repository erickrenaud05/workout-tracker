const { User } = require('../model');
const { signToken, AuthenticationError, getUser } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    },

    user: async(parent, args, context) =>{
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    }
  },
  Mutation: {
    createUser: async (parent, args) =>{
      const user = await User.create({name: args.name, username: args.username, password: args.password});
      const token = signToken(user);
      return { token, user };
    },
    createWorkout: async (parent, args, context)=>{
      if (!context.user) {
        throw AuthenticationError;
      };
      const user = User.findOne({ _id: context.user._id });
      
      const exercise = args.exercises;

      const newWorkout = {
        day: args.day,
        name: args.name,
        exercise
      };

      user.workout.push(newWorkout);
      await user.save();

      return(user);
    }
  },
  logWorkout: async(parent, args, context)=>{
    if (!context.user) {
      throw AuthenticationError;
    };
    const user = User.findOne({ _id: context.user._id });
    
    const exercise = args.exercises;

    const newWorkoutLog = {
      day: args.day,
      name: args.name,
      exercise
    };

    user.workoutLog.push(newWorkoutLog);
    await user.save();

    return(user);
  }
};

module.exports = resolvers;