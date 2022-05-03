import { createSlice } from "@reduxjs/toolkit";
import { getSaleoff, getEvents } from "./api";

export const saleoffScreenSlice = createSlice({
  name: "saleoffScreen",
  initialState: {
    saleoff: [],
    statusSaleofff: "idle",
    errorSaleoff: null,
    events: [],
    statusEvents: "idle",
    errorEvents: null,
  },
  reducers: {
    // getBanners: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getSaleoff.pending, (state, action) => {
        state.statusSaleofff = "loading";
      })
      .addCase(getSaleoff.fulfilled, (state, action) => {
        state.statusSaleofff = "succeeded";
        // Add any fetched posts to the array
        state.saleoff = state.saleoff.concat(action.payload.data);
      })
      .addCase(getSaleoff.rejected, (state, action) => {
        state.statusSaleofff = "failed";
        state.errorSaleoff = action.error.message;
      })
      .addCase(getEvents.pending, (state, action) => {
        state.statusEvents = "loading";
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.statusEvents = "succeeded";
        // Add any fetched posts to the array
        state.events = state.events.concat(action.payload.data);
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.statusEvents = "failed";
        state.errorEvents = action.error.message;
      });
  },
});

// export const {  } = saleoffScreenSlice.actions;

export default saleoffScreenSlice.reducer;
