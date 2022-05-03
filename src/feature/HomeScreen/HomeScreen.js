import React, { useEffect, useRef } from "react";
import { Tabs, Tab, Container } from "@mui/material";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import Promotion from "components/molecules/Promotion/Promotion";
import Banner from "components/molecules/Banner/Banner";
import CarouselFn from "components/molecules/Carousel/Carousel";
import "./HomeScreen.scss";
import { getBanners } from "./api";
import { getMovies } from "feature/MovieScreen/api";
import { useSelector, useDispatch } from "react-redux";

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

export const ProductViewContext = React.createContext();

const HomeScreen = () => {
  const [value, setValue] = React.useState(0);
  const productViewRef = useRef(null);
  const dispatch = useDispatch();

  const [banners, postStatus, movies, moviesStatus] = useSelector((state) => [
    state.homeScreen.banners,
    state.homeScreen.status,
    state.movieScreen.movies,
    state.movieScreen.status,
  ]);

  useEffect(() => {
    if (postStatus === "idle") dispatch(getBanners());
    if (moviesStatus === "idle") dispatch(getMovies());
  }, [postStatus, moviesStatus, dispatch]);

  const moviesItem = movies.map((item) => {
    return {
      image: item?.data?.image,
      alt: item?.data?.name,
      href: item?.data?.id,
      content: item?.data?.name,
    };
  });

  const incomingMovies = [movies[9],movies[6], movies[3]].map((item) => {
    return {
      image: item?.data?.image,
      alt: item?.data?.name,
      href: item?.data?.id,
      content: item?.data?.name,
    };
  });

  const preBuyMovies = [movies[8],movies[5]].map((item) => {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <ProductViewContext.Provider value={productViewRef}>
      <ContentLayout>
        <Banner banners={banners} />
        <div className="home">
          <div ref={productViewRef} className="product--view">
            <Container className="promotion" maxWidth="xl">
              <div className="promotion--title">
                <Tabs
                  className="promotion--tabs pb-4"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="phim đang chiếu" {...a11yProps(0)} />

                  <Tab label="phim sắp chiếu" {...a11yProps(1)} />

                  <Tab label="vé bán trước" {...a11yProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                  <CarouselFn
                    items={moviesItem}
                    responsive={responsive}
                    isDots={false}
                    isArrow={true}
                    moveTo="movie"
                  />
                </TabPanel>

                <TabPanel value={value} index={1}>
                <CarouselFn
                    items={incomingMovies}
                    responsive={responsive}
                    isDots={false}
                    isArrow={true}
                    moveTo="movie"
                  />
                </TabPanel>

                <TabPanel value={value} index={2}>
                <CarouselFn
                    items={preBuyMovies}
                    responsive={responsive}
                    isDots={false}
                    isArrow={true}
                    moveTo="movie"
                  />
                </TabPanel>
              </div>
            </Container>
          </div>
        </div>
        <Promotion />
      </ContentLayout>
    </ProductViewContext.Provider>
  );
};

export default HomeScreen;
