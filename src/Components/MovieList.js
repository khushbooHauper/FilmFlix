import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
    const { favorites, shows } = useContext(MovieContext);

    // Filter the shows array based on the favorite movie IDs
    const favoriteMovies = shows.filter((movie) => favorites.includes(movie.id));
    const navigate = useNavigate();
   
  return (
    <div className="list-group">
      {favoriteMovies && favoriteMovies.map((movie, index) => (
        <a
          key={index}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={()=> navigate(`/movie/${movie.id}`)}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
          <img src={movie.image.medium} alt={movie.name} className="img-fluid" style={{width:'80px',height:'80px'}}/>
            <h5 className="mb-1">{movie.name}</h5>
            <small>{movie.rating.average}</small>
          </div>
          
        </a>
      ))}
    </div>
  );
};

export default MovieList;
