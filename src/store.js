import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import watchlistReducer from './slices/watchlistSlice';
import eventsReducer from './slices/eventsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer,
    events: eventsReducer,
  },
});