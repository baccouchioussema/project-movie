// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-md-4" key={index}>
          <MovieCard movie={movie} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
