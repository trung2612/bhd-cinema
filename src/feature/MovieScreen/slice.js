import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./api";

export const movieScreenSlice = createSlice({
  name: "movieScreen",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      
  },
});

export const { } = movieScreenSlice.actions;

export default movieScreenSlice.reducer;
