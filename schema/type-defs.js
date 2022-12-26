const { gql } = require("apollo-server");

/**
 * Query - GET data without manipulations.
 * Mutation - Update data in some way. REST terms: PUT, DELETE or POST requests.
 */
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfRelease: Int!
    isInTheaters: Boolean!
  }

  # Root Query which contains all other types
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  # Created a new type for Input as other fields in type 'User' weren't required.
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  enum Nationality {
    UNITED_KINGDOM
    UNITED_STATES
    INDIA
    CANADA
  }
`;

module.exports = { typeDefs };
