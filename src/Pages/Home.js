import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";

const api = "https://api.tvmaze.com/shows"


export default function Home() {
  const [shows, setShows] = useState([]);
  const fetchData = () =>{
    axios
    .get(api)
    .then((response) => {
      setShows(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }
  useEffect(() => {
    fetchData()
  },[]);

  const categorizedShows = {};

  shows.forEach((show) => {
    show.genres.forEach((genre) => {
      if (!categorizedShows[genre]) {
        categorizedShows[genre] = [];
      }
      categorizedShows[genre].push(show);
    });
  });

  console.log(categorizedShows,'categorizedShows');
  return (
    <div>
      {Object.entries(categorizedShows).map(([genre, shows]) => (
        <div key={genre}>
          <h2>{genre}</h2>
          <div>
            {shows.map((show) => (
              <MovieCard key={show.id} movie={show} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
