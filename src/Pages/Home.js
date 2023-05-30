import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../Components/MovieCard';
import LatestEpisodesCarousel from '../Components/Slides';

const Home = () => {
  const { categorizedShows, showAllGenres, handleShowMore } = useContext(MovieContext);

  return (
    <>
    
    <LatestEpisodesCarousel/>
   
   
    <div>
      {Object.entries(categorizedShows).map(([genre, shows]) => {
        const displayShows = showAllGenres[genre] ? shows : shows.slice(0, 8);
        const showButton = shows.length > 8 && !showAllGenres[genre];

        return (
          <div key={genre}>
            <h2 className="genre-heading">{genre}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '2rem', justifyContent: 'space-evenly' }}>
              {displayShows.map((show) => (
                <MovieCard key={show.id} movie={show} />
              ))}
            </div>
            {showButton && (
              <button className="show-more-button" onClick={() => handleShowMore(genre)}>
                Show More
              </button>
            )}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Home;
