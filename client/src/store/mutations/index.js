import { gql } from "apollo-boost";

export const ADD_MOVIE = gql`
  mutation AddMovie($title: String, $year: String) {
    addMovie(title: $title, year: $year) {
      title
      year
    }
  }
`;
