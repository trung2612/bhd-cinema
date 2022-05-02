import React, { useEffect, useRef } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import {
  Tabs,
  Tab,
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
// import Link from "@mui/material/Link";
import { getSeats } from "./api";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import "./BookingScreen.scss";

const BookingScreen = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const params = useParams();
  const [formats, setFormats] = React.useState(() => [1,2]);
  const [seats, status] = useSelector((state) => [
    state?.bookingScreen?.seats[0].data,
    state?.bookingScreen?.status,
  ]);

  useEffect(() => {
    if (status === "idle") dispatch(getSeats());
  }, [status, dispatch]);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ContentLayout>
      <div className="booking--wrapper">
        <div className="booking">
          <div className="booking--seat">
            <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
            >
              {seats.map( (item, index) => 
              
                <ToggleButton value={1}>{1} </ToggleButton>
              
             )}
                      <ToggleButton value={1}>{1} </ToggleButton>

                      <ToggleButton value={2}>{1} </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BookingScreen;
