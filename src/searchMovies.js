import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function SearchMovies() {

  // States - input query, movies
  const [query, setQuery] = useState('');

  // Create the state for movies, and update that state appropiate
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?api_key=6ecb72fa7410c3afaa13be5ecf82e38f&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query} onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
