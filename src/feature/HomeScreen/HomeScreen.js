import React, { useEffect, useRef } from "react";
import { Tabs, Tab, Container } from "@mui/material";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import Promotion from "components/molecules/Promotion/Promotion";
import Banner from "components/molecules/Banner/Banner";
import CarouselFn from "components/molecules/Carousel/Carousel";
import "./HomeScreen.scss";
import { getBanners, addData } from "./api";
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

  const [banners, postStatus] = useSelector((state) => [
    state.homeScreen.banners,
    state.homeScreen.status,
  ]);

  useEffect(() => {
    if (postStatus === "idle") dispatch(getBanners());
  }, [postStatus, dispatch]);

  // useEffect(()=>{
  //   addData("events",[
  //     {
  //       "alt": "oled",
  //       "image": "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/event%2FOLED.jpg?alt=media&token=6c60a874-e6f2-4bfe-839e-e395129e8216",
  //       "id": "1"
  //     },
  //     {
  //       "alt": "qrcode",
  //       "image": "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/event%2FQRCode.jpg?alt=media&token=71b51094-b344-4cb1-94ed-7b86a9d7275b",
  //       "id": "2"
  //     },
  //     {
  //       "alt": "app",
  //       "image": "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/event%2Fapp.jpg?alt=media&token=58106d0a-2ceb-4eae-9c37-7bb651d97dcf",
  //       "id": "3"
  //     },
  //     {
  //       "alt": "hot line",
  //       "image": "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/event%2Fhotline.jpg?alt=media&token=ae900b0d-2fee-46fb-8f9c-787321de38f6",
  //       "id": "4"
  //     }
  //   ])
  // },[])

  const kmItems = [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png",
      alt: "a",
      href: "",
      content: "NGHỀ SIÊU DỄ",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920-x-1080-1-1.jpg",
      alt: "a",
      href: "",
    },
    {
      image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
      alt: "a",
      href: "",
    },
  ];

  const eventItems = [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-ScanQR-710x320.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-APP-710x320.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/12/BHD-Star-FBCover-Onyx-710x320.jpg",
      alt: "a",
      href: "",
    },
  ];

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
                    items={kmItems}
                    responsive={responsive}
                    isDots={false}
                    isArrow={true}
                  />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <CarouselFn items={eventItems} />
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <CarouselFn items={eventItems} />
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
