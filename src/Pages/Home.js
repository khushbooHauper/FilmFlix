import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../Components/MovieCard";
import LatestEpisodesCarousel from "../Components/Slides";

const Home = () => {
  const { categorizedShows, showAllGenres, handleShowMore } =
    useContext(MovieContext);

  return (
    <>
      <LatestEpisodesCarousel />
      <div className="para">
        <p>
          Welcome to the world of Filmflix, where captivating stories come to
          life and entertainment knows no bounds. Get ready to immerse yourself
          in a realm of thrilling adventures, heartfelt dramas, side-splitting
          comedies, and mind-bending mysteries. From critically acclaimed
          originals to beloved classics, Netflix has something for everyone.
          Embark on a cinematic journey like no other, as our vast library of
          movies takes you from edge-of-your-seat action to thought-provoking
          documentaries that explore the world's most pressing issues. Witness
          the power of storytelling unfold with every frame, transporting you to
          different eras, galaxies, and dimensions.
        </p>
      </div>

      <div>
        {Object.entries(categorizedShows).map(([genre, shows]) => {
          const displayShows = showAllGenres[genre] ? shows : shows.slice(0, 20);
          const showButton = shows.length > 20 && !showAllGenres[genre];

          return (
            <div key={genre}>
              <h2 className="genre-heading">{genre}</h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "2rem",
                  justifyContent: "space-evenly",
                }}
              >
                {displayShows.map((show) => (
                  <MovieCard key={show.id} movie={show} />
                ))}
              </div>
              {showButton && (
                <button
                  className="show-more-button"
                  onClick={() => handleShowMore(genre)}
                >
                  Show More
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
