import { configureStore } from "@reduxjs/toolkit";
import homeScreenReducer from "feature/HomeScreen/slice";
import globalStateReducer from "app/slice";

export default configureStore({
    reducer:{
        homeScreen: homeScreenReducer,
        globalState:globalStateReducer
    }
})