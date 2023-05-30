import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const AddToFavorites = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(MovieContext);

  const isFavorite = favorites.includes(movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie.id);
    }
  };
console.log(isFavorite)
  return (
    <button className="add-to-favorites" onClick={handleToggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavorites;
