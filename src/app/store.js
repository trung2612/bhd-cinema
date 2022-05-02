import { configureStore } from "@reduxjs/toolkit";
import homeScreenReducer from "feature/HomeScreen/slice";
import movieScreenReducer from "feature/MovieScreen/slice";
import bookingScreenReducer from "feature/BookingScreen/slice"
import globalStateReducer from "app/slice";

export default configureStore({
    reducer:{
        homeScreen: homeScreenReducer,
        globalState:globalStateReducer,
        movieScreen: movieScreenReducer,
        bookingScreen:bookingScreenReducer
    }
})