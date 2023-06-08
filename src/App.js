import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetail from "./Components/MovieDetail";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SearchMovieDetails from "./Components/SearchMovieDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/serachmovie/:id" element={<SearchMovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
