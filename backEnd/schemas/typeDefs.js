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
        exercises: [Exercise]
    }

    type Exercise {
      name: String
      reps: Int
      sets: Int
    }

    type Auth {
      token: ID!
      user: User
    }

    input ExerciseInput {
      name: String
      reps: Int
      sets: Int
    }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    workout: [Workout]
    user: User
  }

  type Mutation {
    createUser(name: String!, username: String!, password: String!): Auth
    createWorkout(day: String!, name: String!, exercises: [ExerciseInput]): Workout
    logWorkout(day: String!, name: String!, exercises: [ExerciseInput]): Workout
  }
`;

module.exports = typeDefs;
