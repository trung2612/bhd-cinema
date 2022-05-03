import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { addData } from "helpers/call-api";

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

  // useEffect(() => {
  //   addData("movies", {
  //     id: "mv10",
  //     name: "RUN HIDE FIGHT",
  //     description:"Cô gái 17 tuổi Zoe Hull sử dụng trí thông minh, kỹ năng sinh tồn và lòng trắc ẩn của mình để chiến đấu vì mạng sống của mình và của những người bạn cùng lớp, chống chọi trực tiếp lại một nhóm bắn súng tại trường.",
  //     classify: "C18 - PHIM DÀNH CHO KHÁN GIẢ TỪ 18 TUỔI TRỞ LÊN",
  //     director: "Kyle Rankin",
  //     actor: "Isabel May, Thomas Jane, Olly Sholotan",
  //     category: "Action",
  //     time_start: "2022-04-22",
  //     time: "110",
  //     national: "Phụ đề tiếng Việt",
  //     image:"https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/movies%2Frun-hide-fight.jpeg?alt=media&token=ad982acd-6048-4278-ae34-fac924d3b579",
  //   });
  // }, []);

  return <>haha</>;
};

export default SaleOffScreen;
