import React from "react";

const MovieList = ({ movies, handleClick }) => {
  const listMovies = movies.map((m) => {
    return (
      <li key={m.id} onClick={handleClick}>
        {m.name}
      </li>
    );
  });

  return (
    <div className="movie-list">
      <h1> List Movies </h1>
      <ul>{listMovies}</ul>
    </div>
  );
};

export default MovieList;
