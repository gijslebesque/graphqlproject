import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { GET_MOVIES } from "../store/queries";
import { ADD_MOVIE } from "../store/mutations";

export default function Form() {
  let title;
  let year;

  const [addMovie] = useMutation(ADD_MOVIE, {
    update(
      cache,
      {
        data: { addMovie }
      }
    ) {
      const { movies } = cache.readQuery({ query: GET_MOVIES });
      cache.writeQuery({
        query: GET_MOVIES,
        data: { movies: movies.concat([addMovie]) }
      });
    }
  });

  const submitHandler = e => {
    e.preventDefault();
    addMovie({
      variables: { title: title.value, year: year.value }
    });
    title.value = "";
    year.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="title"
        ref={node => {
          title = node;
        }}
      />
      <input
        placeholder="year"
        ref={node => {
          year = node;
        }}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
