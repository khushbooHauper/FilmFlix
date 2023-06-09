import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MovieContextProvider } from "./context/MovieContext";
import {HashRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MovieContextProvider>
        <Navbar />
        <App />
      </MovieContextProvider>
    </HashRouter>
  </React.StrictMode>
);
