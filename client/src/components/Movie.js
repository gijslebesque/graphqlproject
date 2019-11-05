import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIES } from "../store/queries";

export default function Movie() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movies.map(({ title }) => (
    <div key={title}>
      <p>{title}</p>
    </div>
  ));
}
