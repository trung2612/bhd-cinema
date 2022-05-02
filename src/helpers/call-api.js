import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
export const callApi = (constant, databaseName) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return createAsyncThunk(constant, async () => {
    const querySnapshot = await getDocs(collection(db, databaseName));
    let data = {};
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;
  });
};

export const callApis = (constant, databaseName) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return createAsyncThunk(constant, async () => {
    const querySnapshot = await getDocs(collection(db, databaseName));
    let data = [];
    querySnapshot.forEach((doc) => {
      data =data.concat(doc.data()) ;
    });
    return data;
  });
};
