import React from 'react';

const Movie = ({ title, description, image, onClick }) => {
  return (
    <div className="movie" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Movie;
