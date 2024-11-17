import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../slices/moviesSlice';
import { addToWatchlist } from '../slices/watchlistSlice';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { searchResults, status, error } = useSelector(state => state.movies);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchTerm));
  };

  const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year})
              <button onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSearch;