import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToFavorites from "./AddToFavorites";

const MovieCard = ({ movie }) => {
  const { name, image, summary } = movie;

  const navigate = useNavigate();

  // Remove the <p> tag from the summary
  const formattedSummary = summary.replace(
    /<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g,
    ""
  );

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div className="movie-card-container" onClick={handleClick}>
    <div className="card">
      <div className="image-container"  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <img
          src={image.medium}
          className="card-img-top"
          alt={name}
         
        />
        {isHovered && (
          <div className="overlay" >
            <AddToFavorites movie={movie} className="addtofavrt-animated"/>
          </div>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  </div>
  );
};

export default MovieCard;
