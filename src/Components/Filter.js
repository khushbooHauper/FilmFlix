import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
const SearchFilter = () => {
  const { searchResults, searchQuery, handleSearchChange, handleClearSearch } =
    useContext(MovieContext);
  const navigate = useNavigate();

  const handleSearchItemClick = (id) => {
    navigate(`/serachmovie/${id}`);
    console.log(searchResults);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      {searchQuery ? (
        <FontAwesomeIcon
          icon={faTimes}
          className="clear-icon"
          onClick={handleClearSearch}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={handleSearchChange}
        />
      )}

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div
              key={result.show.id}
              onClick={() => handleSearchItemClick(result.show.id)}
            >
              {result.show.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
