import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../Components/MovieCard';

export const MyFavorites = () => {
  const { favorites, shows } = useContext(MovieContext);

  // Filter the shows array based on the favorite movie IDs
  const favoriteMovies = shows.filter((movie) => favorites.includes(movie.id));

  return (
    <div>
      <h2>My Favorite Movies</h2>
      <div className="movie-card-container">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    
  );
}
