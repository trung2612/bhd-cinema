import { createSlice } from "@reduxjs/toolkit";
import { getSeats } from "./api";

export const bookingScreenSlice = createSlice({
  name: "bookingScreen",
  initialState: {
    seats: [],
    status: "idle",
    error: null,
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getSeats.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSeats.fulfilled, (state, action) => {
        console.log(action);
        state.status = "succeeded";
        state.seats = state.seats.concat(action.payload.data) ;
      })
      .addCase(getSeats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      
  },
});

export const { } = bookingScreenSlice.actions;

export default bookingScreenSlice.reducer;
