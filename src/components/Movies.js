import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesHeading = <h1> Movies Page </h1>
  const moviesList = movies.map((movie, index) => {
    return <div key={index}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map((genre, genreIndex) => <li key={genreIndex}>{genre}</li>)}
      </ul>
    </div>
  })

  return <div>
    {moviesHeading}
    {moviesList}
    
  </div>;
}

export default Movies;
