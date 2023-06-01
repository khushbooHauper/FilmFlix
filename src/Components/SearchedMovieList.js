import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const SearchedMovieList = () => {
    const { favorites, searchResults } = useContext(MovieContext);

    // Filter the shows array based on the favorite movie IDs
    const favoriteMovies = searchResults.filter((movie) => favorites.includes(movie.show.id));
    const navigate = useNavigate();
   
  return (
    <div className="list-group">
      {favoriteMovies && favoriteMovies.map((movie, index) => (
        <a
          key={index}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={()=> navigate(`/serachmovie/${movie.show.id}`)}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
          <img src={movie.show.image && movie.show.image.medium} alt={movie.show.name} className="img-fluid" style={{width:'80px',height:'80px'}}/>
            <h5 className="mb-1">{movie.show.name}</h5>
            <small>{movie.show.rating && movie.show.rating.average}</small>
          </div>
          
        </a>
      ))}
    </div>
  );
};

export default SearchedMovieList;
