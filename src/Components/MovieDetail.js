import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import AddToFavorites from "../Components/AddToFavorites";
import axios from "axios";

const MovieDetail = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const { shows } = useContext(MovieContext);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${id}/cast`
        );
        setCast(response.data);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [id]);
  const movie = shows.find((show) => show.id === parseInt(id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { name, image, genres, summary, rating, language } = movie;
  const formattedSummary = summary.replace(
    /<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g,
    ""
  );

  return (
    <div className="movie-detail">
      <div className="movie-info">
        <div className="movie-image">
          <img src={image.medium} alt={name} />
        </div>
        <div className="movie-details">
          <h2 className="movie-title">{name}</h2>
          <div className="movie-metadata">
            <div className="metadata-item">
              <span className="metadata-label">Rating:</span>
              <span className="metadata-value">{rating.average}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Genres:</span>
              <span className="metadata-value">{genres.join(", ")}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Language:</span>
              <span className="metadata-value">{language}</span>
            </div>
            <div className="metadata-item">
              <div className="metadata-label">Cast:</div>
              <div className="metadata-value">
                {cast &&  cast.length > 0 && 
                  cast
                    .slice(0, 3)
                    .map((member, index) => (
                      <span key={index}>{member.person.name}, </span>
                    ))}
              </div>
            </div>
          </div>
          <p className="summary">{formattedSummary}</p>

          <div className="actions">
            <button className="play-button">Play</button>
            <AddToFavorites movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
