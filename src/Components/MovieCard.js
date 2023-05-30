import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { name, image, summary } = movie;
  
  const navigate = useNavigate();

  // Remove the <p> tag from the summary
  const formattedSummary = summary.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, '');

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className='movie-card-container' onClick={handleClick}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={image.medium} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{formattedSummary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
