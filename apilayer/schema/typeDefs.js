const { gql } = require("apollo-server");

module.exports = gql`
  type Movie {
    title: String
    year: String
    director: String
    duration: String
    genre: [String]
    rate: String
  }

  type Query {
    movies: [Movie]
  }
  type Mutation {
    addMovie(
      title: String
      year: String
      director: String
      duration: String
      genre: [String]
      rate: String
    ): Movie
  }
`;
