import { createSlice } from "@reduxjs/toolkit";
import { getAccounts } from "./api";

export const loginScreenSlice = createSlice({
  name: "movieScreen",
  initialState: {
    accounts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getAccounts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAccounts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accounts = action.payload;
      })
      .addCase(getAccounts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      
  },
});

// export const { } = loginScreenSlice.actions;

export default loginScreenSlice.reducer;
