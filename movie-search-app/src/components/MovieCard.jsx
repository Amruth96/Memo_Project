import React from "react";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
  </div>
);

export default MovieCard;
