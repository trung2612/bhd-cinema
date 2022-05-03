import { useState, useEffect } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Container, Tabs, Tab, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getSaleoff, getEvents } from "./api";

import { Link } from "react-router-dom";
import "./SaleOffScreen.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="py-6"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const SaleOffScreen = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const [saleoff, saleoffStatus, events, eventStatus] = useSelector((state) => [
    state?.saleoffScreen?.saleoff,
    state?.saleoffScreen?.statusSaleofff,
    state?.saleoffScreen?.events,
    state?.saleoffScreen?.statusEvents,
  ]);

  useEffect(() => {
    if (saleoffStatus === "idle") dispatch(getSaleoff());
    if (eventStatus === "idle") dispatch(getEvents());
  }, [saleoffStatus, eventStatus, dispatch]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <ContentLayout>
      <div className="sale-off--wrapper">
        <Container>
          <div className="sale-of--title">
            <Tabs
              className="sale-of--tabs pb-4 justi"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="khuyến mãi" {...a11yProps(0)} />

              <Tab label="sự kiện" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                {saleoff?.map((item, index) => (
                  <Grid key={index} item md={3} className="pb-6 cursor-pointer">
                    <Link to={"1"}>
                      <div className="item--img">
                        <img src={item?.href} alt={item?.alt} />
                      </div>
                      <p className="item--content">{item?.content}</p>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                {events?.map((item, index) => (
                  <Link key={index} to={"1"}>
                    <Grid item md={4} className="pb-6 cursor-pointer">
                      <div className="item--img">
                        <img src={item?.image} alt={item?.alt} />
                      </div>
                      <p className="item--content">{item?.content}</p>
                    </Grid>
                  </Link>
                ))}
              </Grid>
            </TabPanel>
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
};

export default SaleOffScreen;
