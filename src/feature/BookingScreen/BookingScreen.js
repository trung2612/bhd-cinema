import React, { useCallback, useEffect, useRef, useState } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import {
  Tabs,
  Tab,
  Container,
  Breadcrumbs,

  Typography,
  Grid,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getSeats } from "./api";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import SeatPicker from "./components/SeatPicker";
import "./BookingScreen.scss";

const BookingScreen = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const params = useParams();
  const [selected, setSelected] = React.useState([]);
  const [seatsData, setSeatsData] = useState([]);
  const [updateSeatsData, setUpdateSeatData] = useState(seatsData);
  const [seats, status] = useSelector((state) => [
    state?.bookingScreen?.seats[0]?.data,
    state?.bookingScreen?.status,
  ]);

  useEffect(() => {
    if (status === "idle") dispatch(getSeats());
  }, [status, dispatch]);

  useEffect(() => {
    if (seats){
      setSeatsData( seats.map(item => item.row))
    } ;
  }, [seats]);

  const handleUpdateSeats = useCallback(()=>{
    let newSeats = [];
   seatsData.map(item => (item.map(ele=>newSeats.concat(ele))))
    // let selectedSeat = [...selected];
    // let abc = newSeats.map(item =>item[1]={})
    // return {...newSeats[0][0],isSelected:false};
    return newSeats;
  },[seatsData]) 
  // () => {

    // setUpdateSeatData(prev => {
    //   let oldSeatData = [...prev];

    // }
    // )
    // console.log(seatsData);
    // let newSeats = [...seatsData];
    // let selectedSeat = [...selected];
    // newSeats[0][0]={};
    // return newSeats;
    // console.log(newSeats[0][0]);
    // selectedSeat.map(item => seatsData.filter)
    // const whichRow = Math.floor()
    
    // console.log(seatsData.find(ele => ele.find(item=>item.id===1)).find(item=>item.id===1) );
    // let selectedSeat2 = [...selectedSeat,{...seatsData.find(ele => ele.find(item=>item.id===1)).find(item=>item.id===1),isSelected:true}]
    // console.log(selectedSeat2);
  // }

useEffect(()=>{
if(seatsData&& !!seatsData.length) {
  setUpdateSeatData(seatsData);
   console.log(handleUpdateSeats()); 
  }
},[seatsData,handleUpdateSeats])
  

  console.log(updateSeatsData);



  return (
    <ContentLayout>
      <div className="booking--wrapper">
        <div className="booking">
          <div className="booking--seat">
            {/* <p>{console.log(selected)}</p> */}
            <SeatPicker setSelected={setSelected} row={seatsData}/>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BookingScreen;
