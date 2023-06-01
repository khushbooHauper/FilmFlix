import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
 const navigate = useNavigate()
  const [shows, setShows] = useState([]);
  const [categorizedShows, setCategorizedShows] = useState({});
  const [showAllGenres, setShowAllGenres] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        navigate('/')
      } else {
        try {
          const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
          setSearchResults(response.data);
        } catch (error) {
          console.log('An error occurred while fetching data:', error);
        }
      }
    };

    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => {
      delayedFetchData.cancel();
    };
  }, [searchQuery, setSearchResults]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

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
  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Function to remove a movie from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== movieId));
  };
 
 
  return (
    <MovieContext.Provider value={{ shows, categorizedShows, showAllGenres, handleShowMore ,favorites, addToFavorites, removeFromFavorites,searchResults,handleSearchChange,handleClearSearch,searchQuery,setSearchQuery,setSearchResults}}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
