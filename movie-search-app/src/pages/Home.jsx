import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../components/SearchBar"; 
import MovieCard from "../components/MovieCard"; 

const Home = () => {
  const [movies, setMovies] = useState([]); 
  const [query, setQuery] = useState(""); 

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/db.json"); 
        const data = await response.json(); // Parsing response to JSON
        setMovies(data.Search || []); // Setting fetched movies to state
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies(); // Triggering the fetch on component mount
  }, []); // Runs only once, as the dependency array is empty

  // Filters movies based on the search query using useMemo
  const filteredMovies = useMemo(() => {
    return query
      ? movies.filter((movie) =>
          movie.Title.toLowerCase().includes(query.toLowerCase())
        ) 
      : movies; // If no query, return all movies
  }, [movies, query]); // Recomputes only when movies or query change

  return (
    <div>
      <h1>Movie Search</h1> 
      <SearchBar onSearch={setQuery} /> 
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies found.</p> 
        )}
      </div>
    </div>
  );
};

export default Home; 
