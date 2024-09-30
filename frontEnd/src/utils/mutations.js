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
