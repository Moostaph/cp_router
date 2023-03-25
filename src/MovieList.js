import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} 
        title={movie.title} 
        description={movie.description} 
        image={movie.image} 
        onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
};

export default MovieList;
