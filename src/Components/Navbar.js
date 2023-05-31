import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import SideBarFavorites from "./SideBarFavorites";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
      setIsSidebarOpen(true);
    };
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 ,background:'#a52a2a',color:'#e50914',fontSize:'18px'}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
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
                <Link to='/' className="nav-link" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/' className="nav-link" style={{ color: "white" }}>
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
          </div>
        </div>
      </nav>
      <SideBarFavorites isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </div>
  );
};

export default Navbar;
