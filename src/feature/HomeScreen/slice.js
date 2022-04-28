import { createSlice } from "@reduxjs/toolkit";
import { getBanners } from "./api";

export const homeScreenSlice = createSlice({
  name: "homeScreen",
  initialState: {
    banners: [],
    status: 'idle',
  error: null
  },
  reducers: {
    // getBanners: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getBanners.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.banners = state.banners.concat(action.payload.data)
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

// export const { getBanners } = homeScreenSlice.actions;

export default homeScreenSlice.reducer;
