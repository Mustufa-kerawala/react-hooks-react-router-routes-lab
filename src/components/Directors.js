import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsTitle = <h1> Directors Page </h1>
  const directorsData = directors.map((directors, index) => {
    return <div key={index}>
      <h3>{directors.name}</h3>
      <ul>
        {directors.movies.map((movie, movieIndex) => <li key={movieIndex}>{movie}</li>)}
      </ul>
    </div>
  })
  return <div>
    {directorsTitle}
    {directorsData}
    </div>;
}

export default Directors;
