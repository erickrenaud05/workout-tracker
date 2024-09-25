const { User } = require('../model');
const { signToken, AuthenticationError } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    },

    user: async(parent, args) =>{
      //if jwt token matches return this
      return await User.findById(args.id);
    }
  },
  Mutation: {
    createUser: async (parent, args) =>{
      const user = await User.create({name: args.name, username: args.username, password: args.password});
      const token = signToken(user);
      return { token, user };
    },
    createWorkout: async (parent, args)=>{
      const user = await User.findById(args.userId);

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
  }
};

module.exports = resolvers;