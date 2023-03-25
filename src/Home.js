import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'Description of Movie 1',
    image: 'movie1.jpg',
    videoId: 'VIDEO_ID_1',
  },
  {
    id: 2,
    title: 'Movie2.jpeg',
    description: 'Description of Movie 2',
    image: 'movie2.jpg',
    videoId: 'VIDEO_ID_2',
  },
  
];

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleMovieDetailsClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
    <div className="home-page">
      <h1>Movie List</h1>
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetails
          title={selectedMovie.title}
          description={selectedMovie.description}
          videoId={selectedMovie.videoId}
          onClose={handleMovieDetailsClose}
        />
      )}
      </div>
      </>
  );
};

export default Home;
