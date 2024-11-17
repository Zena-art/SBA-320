import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../slices/moviesSlice';
import { addToWatchlist } from '../slices/watchlistSlice';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { searchResults, status, error } = useSelector(state => state.movies);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      try {
        await dispatch(searchMovies(searchTerm)).unwrap();
      } catch (err) {
        console.error('Failed to search movies:', err);
      }
    }
  };

  const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <div className="search-section">
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a movie title"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && searchResults && searchResults.length > 0 ? (
        <div className="movie-list">
          {searchResults.map(movie => (
            <div key={movie.imdbID} className="movie-card">
              <h3>{movie.Title}</h3>
              <p>({movie.Year})</p>
              <button 
                onClick={() => handleAddToWatchlist(movie)}
                className="search-button"
              >
                Add to Watchlist
              </button>
            </div>
          ))}
        </div>
      ) : status === 'succeeded' && (
        <p>No movies found. Try another search term.</p>
      )}
    </div>
  );
}

export default MovieSearch;