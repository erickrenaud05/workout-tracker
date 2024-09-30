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
        const user = await User.findOne({ username: context.user.username }).populate({path: 'workout', populate: {path: 'exercise'}});
        return user
      }
      throw AuthenticationError;
    }
  },
  Mutation: {
    createUser: async (parent, args) =>{
      try{
        const user = await User.create({name: args.name, username: args.username, password: args.password, age: args.age});
        const token = signToken({username: user.username, _id: user._id});
        return { token, user };
      }catch(error){
        return error
      }

      
    },
    login: async(parent, args) => {
      const {username, password} = args;
      
      if(!username || !password){
        throw AuthenticationError
      };

      try {
        const user = await User.findOne({
          username: username,
        });

        if(!user){
          throw AuthenticationError
        };

        const verified = user.isCorrectPassword(password);
        
        if(!verified){
          throw AuthenticationError
        };
 
        const token = signToken({username: user.username, _id: user._id});
       
        return { token, user };
      } catch (error) {
        console.log(error)
      } 
    },
    createWorkout: async (parent, args, context)=>{
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        const exercise = args.exercises;
        
        const newWorkout = {
          name: args.name,
          exercise
        };
        user.workout.push(newWorkout);
        
        await user.save();
  
        return(user);
      };

      throw AuthenticationError;
    },
    logWorkout: async(parent, args, context)=>{
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        const exercise = args.exercises;
        
        const newWorkout = {
          name: args.name,
          exercise
        };
        user.workoutLog.push(newWorkout);
        
        await user.save();
  
        return(user);
      };

      throw AuthenticationError;
    }
  }
};

module.exports = resolvers;