import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useCallback } from "react";
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

const SaleOffScreen = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handleAddData = useCallback(async () => {
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  }, [db]);

//   useEffect(() => {
//     handleAddData();
//   }, [handleAddData]);

  // useEffect(()=>{
  //   setDoc(doc(db, 'seats', '1'), {
  //       id: "mv01",
  //       data: [
  //         {
  //           row: [
  //             { id: 1, number: 1, isSelected: true },
  //             { id: 2, number: 2 },
  //             {
  //               id: 3,
  //               number: 3,
  //               isReserved: true,
  //               isSelected: true
  //             },
  //             { id: 4, number: 4 },
  //             { id: 5, number: 5 },
  //             { id: 6, number: 6 },
  //             { id: 7, number: 7 },
  //             { id: 8, number: 8 },
  //             { id: 6, number: 9 },
  //             { id: 10, number: 10 },
  //           ],
  //         },
  //         {
  //           row: [
  //             {
  //               id: 11,
  //               number: 1,
  //               isReserved: true,
  //             },
  //             { id: 12, number: 2, isReserved: true },
  //             { id: 13, number: "3", isReserved: true },
  //             { id: 14, number: 4 },
  //             { id: 15, number: 5 },
  //             { id: 16, number: 6 },
  //             { id: 17, number: 7, isReserved: true },
  //             { id: 18, number: "8", isReserved: true },
  //             { id: 19, number: 9 },
  //             { id: 20, number: 10 },
  //           ],
  //         },
  //         {
  //           row: [
  //             { id: 21, number: 1 },
  //             { id: 22, number: 2 },
  //             { id: 23, number: 3, isReserved: true },
  //             { id: 24, number: 4 },
  //             { id: 25, number: 5 },
  //             { id: 26, number: 6 },
  //             { id: 27, number: 7 },
  //             { id: 28, number: 8 },
  //             { id: 29, number: 9 },
  //             { id: 30, number: 10 },
  //           ],
  //         },
  //         {
  //           row: [
  //             { id: 31, number: 1 },
  //             { id: 32, number: 2 },
  //             { id: 33, number: 3 },
  //             { id: 34, number: 4 },
  //             { id: 35, number: 5 },
  //             { id: 36, number: 6 },
  //             { id: 37, number: 7 },
  //             { id: 38, number: 8 },
  //             { id: 39, number: 9 },
  //             { id: 40, number: 10 },
  //           ],
  //         },
  //         {
  //           row: [
  //             { id: 41, number: 1, isReserved: true },
  //             { id: 42, number: 2, orientation: "east" },
  //             { id: 43, number: "3", isReserved: true },
  //             { id: 44, number: 4 },
  //             { id: 45, number: 5 },
  //             { id: 46, number: 6, isReserved: true },
  //             { id: 47, number: 7, isReserved: true },
  //             { id: 48, number: 8, isReserved: true },
  //             { id: 49, number: 9, isReserved: true },
  //             { id: 50, number: 10, isReserved: true },
  //           ],
  //         },
  //       ],
  //     });

  // },[db])
  // useEffect(()=>{
  //   setDoc(doc(db, 'account', '1'), {
  //       email: "admin@gmail.com",
  //       password: "12345678",
  //     });

  // },[db])
  return <>haha</>;
};

export default SaleOffScreen;
