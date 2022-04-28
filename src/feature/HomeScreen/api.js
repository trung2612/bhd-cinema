import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  HOME_SCREEN_GET_BANNER,
  HOME_SCREEN_GET_EVENTS,
  HOME_SCREEN_GET_HELPERS,
  HOME_SCREEN_GET_LOGO,
  HOME_SCREEN_GET_SALEOFF,
  HOME_SCREEN_GET_SOCIAL,
} from "./constants";

const firebaseConfig = {
  apiKey: "AIzaSyAJJciJRtqXMZ7kZelF6itCrM0DyNlA39o",
  authDomain: "bhd-star.firebaseapp.com",
  databaseURL: "https://bhd-star-default-rtdb.firebaseio.com",
  projectId: "bhd-star",
  storageBucket: "bhd-star.appspot.com",
  messagingSenderId: "387128925493",
  appId: "1:387128925493:web:70e4580ddd21878f27807c",
  measurementId: "G-18WD3320QG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getBanners = createAsyncThunk(HOME_SCREEN_GET_BANNER, async () => {
  const querySnapshot = await getDocs(collection(db, "testbanner"));
  let data = {};
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
});

export const getEvents = createAsyncThunk(HOME_SCREEN_GET_EVENTS, async () => {
  const querySnapshot = await getDocs(collection(db, "events"));
  let data = {};
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
});

export const getHelpers = createAsyncThunk(
  HOME_SCREEN_GET_HELPERS,
  async () => {
    const querySnapshot = await getDocs(collection(db, "helpers"));
    let data = {};
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;
  }
);

export const getLogo = createAsyncThunk(HOME_SCREEN_GET_LOGO, async () => {
  const querySnapshot = await getDocs(collection(db, "logo"));
  let data = {};
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
});

export const getSaleOff = createAsyncThunk(
  HOME_SCREEN_GET_SALEOFF,
  async () => {
    const querySnapshot = await getDocs(collection(db, "saleoff"));
    let data = {};
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;
  }
);

export const getSocials = createAsyncThunk(HOME_SCREEN_GET_SOCIAL, async () => {
  const querySnapshot = await getDocs(collection(db, "socials"));
  let data = {};
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
});

export const addData = async (dbName, data) => {
  try {
    const docRef = await addDoc(collection(db, dbName), {
      data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
