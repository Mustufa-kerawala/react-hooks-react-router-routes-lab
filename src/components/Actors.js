import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsTitle = <h1> Actors Page </h1> 
  const actorsData = actors.map((actor, index) => {
    return <div key={index}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map((movie, movieIndex) => <li key={movieIndex}>{movie}</li>)}
      </ul>
    </div>
  })


  return <div>
    {actorsTitle}
    {actorsData}
  </div>;
}

export default Actors;
