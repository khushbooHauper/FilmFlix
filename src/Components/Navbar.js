import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideBarFavorites from "./SideBarFavorites";
import { MovieContext } from "../context/MovieContext";
import SearchFilter from "./Filter";

const Navbar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const {
    searchResults,
    handleSearch,
    searchQuery,
    setSearchQuery,
    setSearchResults,
  } = useContext(MovieContext);

  const handleSearchItemClick = (id) => {
    navigate(`/serachmovie/${id}`);
    console.log(searchResults);
  };
  const handleClearInput = () => {
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/`);
  };
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#a52a2a",
        color: "#e50914",
        fontSize: "18px",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            <h1>FilmFlix</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "white" }}>
                  All Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  style={{ color: "white" }}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  onClick={openSidebar}
                >
                  Favorites
                </Link>
              </li>
            </ul>

            <SearchFilter />
          </div>
        </div>
      </nav>
      <SideBarFavorites
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Navbar;
