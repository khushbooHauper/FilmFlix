import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { MovieContextProvider } from './context/MovieContext';
import MovieDetail from './Components/MovieDetail';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
      </MovieContextProvider>
    </div>
  );
}

export default App;
