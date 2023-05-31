import React from "react";
import AddToFavorites from "./AddToFavorites";

const QuickView = ({ movie}) => {
  return (
    
    <div className="quick-view-overlay">
      <div className="quick-view-content">
        <img className="quick-view-image" src={movie.image.medium} alt={movie.name} />
        <h3 className="quick-view-title">{movie.name}</h3>
        {/* <p className="quick-view-description">{movie.summary}</p> */}
        <AddToFavorites movie={movie} />
      </div>
    </div>
   
  );
};

export default QuickView;
