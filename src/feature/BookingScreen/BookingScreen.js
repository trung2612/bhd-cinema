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
import { useLocation, useParams, useNavigate } from "react-router-dom";
import SeatPicker from "./components/SeatPicker";
import { getMovies } from "feature/MovieScreen/api";
import "./BookingScreen.scss";

const BookingScreen = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const [selected, setSelected] = React.useState([]);
  const [seatsData, setSeatsData] = useState([]);
  const [updateSeatsData, setUpdateSeatData] = useState(seatsData);

  const [seats, status] = useSelector((state) => [
    state?.bookingScreen?.seats[0]?.data,
    state?.bookingScreen?.status,
  ]);

  const [movie, moviestatus] = useSelector((state) => [
    state.movieScreen.movies.filter((item) => item.data.id === params.id)[0]
      ?.data,
    state.movieScreen.status,
  ]);
  console.log(movie);
  useEffect(() => {
    if (moviestatus === "idle") dispatch(getMovies());
  }, [moviestatus, dispatch]);

  useEffect(() => {
    if (status === "idle") dispatch(getSeats());
  }, [status, dispatch]);

  useEffect(() => {
    if (seats) {
      setSeatsData(seats.map((item) => item.row));
    }
  }, [seats]);

  const handleUpdateSeats = useCallback(() => {
    let newSeats = [];
    seatsData.map((item) => item.map((ele) => newSeats.concat(ele)));
    // let selectedSeat = [...selected];
    // let abc = newSeats.map(item =>item[1]={})
    // return {...newSeats[0][0],isSelected:false};
    return newSeats;
  }, [seatsData]);
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

  useEffect(() => {
    if (seatsData && !!seatsData.length) {
      setUpdateSeatData(seatsData);
      console.log(handleUpdateSeats());
    }
  }, [seatsData, handleUpdateSeats]);

  const handleBuyNow = () => {
    alert("bạn đã mua vé thành công");
    navigate("/");
  };

  return (
    <ContentLayout>
      <div className="booking--wrapper">
        <Container>
          <div className="booking">
            <div className="movie--info flex">
              <div className="movie-img">
                <img src={movie?.image} alt="movie" />
              </div>

              <div className="movie--content pl-6">
                <div className="movie-name pb-4">{movie?.name}</div>
                <div className="movie-time pb-2">
                  Showing on: {movie?.time_start}
                </div>
                <div className="movie-description">{movie?.description}</div>
              </div>
            </div>

            <div className="booking--seat">
              {/* <p>{console.log(selected)}</p> */}
              <SeatPicker setSelected={setSelected} row={seatsData} />
              {console.log(seatsData)}
            </div>

            <div className="gio--hang">
              <h2 className="card--title p-3 mb-5">GIỎ HÀNG CỦA BẠN</h2>

              <div className="list-ticket pb-2">
                <ul>
                  <li className="flex justify-between">
                    <span className="name pl-3">{movie?.name}</span>

                    <div className="ticket">
                      <span className="total">{selected?.length} x </span>
                      <span className="price">90.000</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="total--price flex justify-between p-3">
                <span>Tổng cộng</span>
                <span>{selected?.length * 90000 || 0} VND</span>
              </div>

              <div className="confirm text-center">
                <Button
                  className="bg-lime-600  font-bold"
                  variant="contained"
                  onClick={() => {
                    handleBuyNow();
                  }}
                >
                  MUA NGAY
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
};

export default BookingScreen;
