// import gql from @apollo/client
import { gql } from '@apollo/client';

// Use the gql function to access the thoughts entrypoint and export it
export const CREATE_USER = gql`
mutation Mutation($name: String!, $username: String!, $password: String!, $age: Int) {
  createUser(name: $name, username: $username, password: $password, age: $age) {
    token
    user {
      age
      name
      username
    }
  }
}
`;

export const CREATE_WORKOUT = gql`
mutation Mutation($name: String!, $exercises: [ExerciseInput]) {
  createWorkout(name: $name, exercises: $exercises) {
    day
    exercise {
      name
      reps
      sets
    }
    name
  }
}
`;

export const LOGIN = gql`
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      name
      username
    }
  }
}
`;

export const LOG_WORKOUT = gql`
mutation LogWorkout($day: String, $name: String!, $exercises: [ExerciseInput]) {
  logWorkout(day: $day, name: $name, exercises: $exercises) {
    day
    exercise {
      name
      reps
      sets
    }
    name
  }
}
`

