import React from "react";
import MovieList from "./MovieList";
import SearchedMovieList from "./SearchedMovieList";

function SideBarFavorites({ isSidebarOpen, setIsSidebarOpen }) {
 
  return (
    <div>
      <div
        className={`offcanvas offcanvas-end ${isSidebarOpen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            My favorite shows
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setIsSidebarOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <MovieList />
          <SearchedMovieList />
        </div>
      </div>
    </div>
  );
}

export default SideBarFavorites;
