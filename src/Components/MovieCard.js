import React from 'react';

const MovieCard = ({ movie }) => {
  const { name, image, summary } = movie;
   // Remove the <p> tag from the summary
   const formattedSummary = summary.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, '');
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image.medium} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{formattedSummary}</p>
      </div>
    </div>
  );
};

export default MovieCard;
