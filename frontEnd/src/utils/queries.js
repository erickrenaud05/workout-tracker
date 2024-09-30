import { gql } from '@apollo/client';

export const GET_USER = gql`
query Query {
  user {
    age
    name
    username
    workout {
      day
      exercise {
        sets
        name
        reps
      }
      name
    }
    workoutLog {
      day
      exercise {
        name
        reps
        sets
        weight
      }
      name
    }
  }
}
`;