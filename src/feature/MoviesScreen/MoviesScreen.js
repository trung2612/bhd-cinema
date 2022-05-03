import { useState, useEffect } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Tabs, Tab, Container } from "@mui/material";
import CarouselFn from "components/molecules/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "feature/MovieScreen/api";
import Promotion from "components/molecules/Promotion/Promotion";

import "./MoviesScreen.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MoviesScreen = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const [movies, moviesStatus] = useSelector((state) => [
    state.movieScreen.movies,
    state.movieScreen.status,
  ]);

  useEffect(() => {
    if (moviesStatus === "idle") dispatch(getMovies());
  }, [moviesStatus, dispatch]);

  const moviesItem = movies.map((item) => {
    return {
      image: item?.data?.image,
      alt: item?.data?.name,
      href: item?.data?.id,
      content: item?.data?.name,
    };
  });
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <ContentLayout>
      <div className="movies--wrapper">
        <Container className="movies--container">
          <div className="showtimes">
            <div className="promotion--title">
              <Tabs
                className="promotion--tabs pb-4"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="lịch chiếu theo phim" {...a11yProps(0)} />

                <Tab label="lịch chiếu theo rạp" {...a11yProps(1)} />

                <Tab label="lịch chiếu theo giờ" {...a11yProps(2)} />
              </Tabs>

              <TabPanel value={value} index={0}>
                <CarouselFn
                moveTo="/movie"
                  items={moviesItem}
                  responsive={responsive}
                  isDots={false}
                  isArrow={true}
                />
              </TabPanel>

              <TabPanel value={value} index={1}>
                bb
              </TabPanel>

              <TabPanel value={value} index={2}>
                a
              </TabPanel>
            </div>
          </div>
        </Container>
        <Promotion />
      </div>
    </ContentLayout>
  );
};

export default MoviesScreen;
