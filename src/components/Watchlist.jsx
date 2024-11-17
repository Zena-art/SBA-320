import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../slices/watchlistSlice';

function Watchlist() {
  const watchlist = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (imdbID) => {
    dispatch(removeFromWatchlist(imdbID));
  };

  return (
    <div>
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map(movie => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year})
              <button onClick={() => handleRemoveFromWatchlist(movie.imdbID)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;