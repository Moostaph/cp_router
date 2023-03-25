import React from 'react';

const MovieDetails = ({ title, description, videoId, onClose }) => {
  return (
    <div className="movie-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="video-wrapper">
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorde="5" allowFullScreen></iframe>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  )
};

export default MovieDetails;
