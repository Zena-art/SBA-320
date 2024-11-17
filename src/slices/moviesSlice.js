import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

console.log(import.meta.env.VITE_OMDB_API_KEY);


export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    return response.data.Search;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchResults: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;