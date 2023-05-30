import React, { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../context/MovieContext";

const LatestEpisodesCarousel = () => {
  const { newReleased } = useContext(MovieContext);
  return (
    <div
      id="latestEpisodesCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {newReleased.map((episode, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={episode.id}
          >
            <img
              src={episode.image.original}
              className="d-block w-100"
              alt={episode.name}
              style={{ maxHeight: "400px" ,objectFit: "cover"}}
            />
            <div className="carousel-caption">
              <h1 style={{color:'#a52a2a'}}>{episode.name}</h1>
              <p>
                {episode.summary.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, "")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#latestEpisodesCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#latestEpisodesCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default LatestEpisodesCarousel;