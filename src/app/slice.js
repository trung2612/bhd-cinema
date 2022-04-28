import { createSlice } from "@reduxjs/toolkit";
import { getSocials, getLogo, getHelpers } from "./api";

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState: {
    socials: [],
    logo:[],
    helpers:[],
    statusSocials: "idle",
    statusLogo: "idle",
    statusHelpers: "idle",
    errorSocials: null,
    errorLogo: null,
    errorHelpers: null,
  },
  reducers: {
    getSocialsIcon: (state, action) => {
      state.value += action.payload;
    },
    getLogoIcon: (state, action) =>{
        state.value +=action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getSocials.pending, (state, action) => {
        state.statusSocials = "loading";
      })
      .addCase(getSocials.fulfilled, (state, action) => {
        state.statusSocials = "succeeded";
        state.socials = state.socials.concat(action.payload.data);
      })
      .addCase(getSocials.rejected, (state, action) => {
        state.statusSocials = "failed";
        state.errorSocials = action.error.message;
      })
      .addCase(getLogo.pending, (state, action) => {
        state.statusLogo = "loading";
      })
      .addCase(getLogo.fulfilled, (state, action) => {
        state.statusLogo = "succeeded";
        state.logo = state.logo.concat(action.payload.data);
      })
      .addCase(getLogo.rejected, (state, action) => {
        state.statusLogo = "failed";
        state.errorLogo = action.error.message;
      })
      .addCase(getHelpers.pending, (state, action) => {
        state.statusHelpers = "loading";
      })
      .addCase(getHelpers.fulfilled, (state, action) => {
        state.statusHelpers = "succeeded";
        state.helpers = state.helpers.concat(action.payload.data);
      })
      .addCase(getHelpers.rejected, (state, action) => {
        state.statusHelpers = "failed";
        state.errorHelpers = action.error.message;
      });
      
  },
});

export const { getSocialsIcon, getLogoIcon } = globalStateSlice.actions;

export default globalStateSlice.reducer;
