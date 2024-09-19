const typeDefs = `
    type User {
        name: String
        username: String
        workout: [Workout]
        workoutLog: [Workout]
    }

    type Workout {
        day: String
        name: String
    }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    workout: [Workout]
  }
`;

module.exports = typeDefs;
