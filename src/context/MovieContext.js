import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [categorizedShows, setCategorizedShows] = useState({});
  const [showAllGenres, setShowAllGenres] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [newReleased, setNewReleased] = useState([]);
 
  useEffect(() => {
    const fetchNewReleasedShows = async () => {
      try {
        const currentDate = new Date().toISOString().slice(0, 10);
        const response = await axios.get(`https://api.tvmaze.com/schedule?date=${currentDate}`);
        const newReleasedShowsData = response.data.map((item) => item.show);
        setNewReleased(newReleasedShowsData);
      } catch (error) {
        console.log("Error fetching new released shows:", error);
      }
    };

    fetchNewReleasedShows();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const categorized = {};

    shows.forEach((show) => {
      show.genres.forEach((genre) => {
        if (!categorized[genre]) {
          categorized[genre] = [];
        }
        categorized[genre].push(show);
      });
    });

    setCategorizedShows(categorized);
  }, [shows]);

  const handleShowMore = (genre) => {
    setShowAllGenres((prevShowAllGenres) => ({
      ...prevShowAllGenres,
      [genre]: true,
    }));
  };
  const addToFavorites = (movieId) => {
    setFavorites((prevFavorites) => [...prevFavorites, movieId]);
  };

  // Function to remove a movie from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== movieId));
  };
 
 
  return (
    <MovieContext.Provider value={{ shows, categorizedShows, showAllGenres, handleShowMore ,favorites, addToFavorites, removeFromFavorites ,newReleased}}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
