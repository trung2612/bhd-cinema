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

  // useEffect(() => {
  //   addData("movies", {
  //     id: "mv03",
  //     name: "NGHỀ SIÊU DỄ",
  //     description:
  //       "Phim kể về một cảnh sát đã nghỉ hưu cùng các thanh niên bất hảo mua lại 1 quán ăn để làm nơi theo dõi tên trùm tội phạm. Tuy nhiên, quán bất ngờ nổi tiếng khiên cho phi vụ có nguy cơ đổ bể.",
  //     classify: "C16 - PHIM DÀNH CHO KHÁN GIẢ TỪ 16 TUỔI TRỞ LÊN",
  //     director: "VO THANH HOA",
  //     actor: "THU TRANG, KIEU MINH TUAN, HUỲNH PHƯƠNG",
  //     category: "Action",
  //     time_start: "2022-04-29",
  //     time: "113",
  //     national: "Phụ đề tiếng Việt",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/movies%2Fnghe-sieu-de.jpeg?alt=media&token=75507885-c4dc-4931-906d-830ad6f1f447",
  //   });
  // }, []);

  // useEffect(() => {
  //   addData("seats", {
  //     id:"mv01",
  //     data: [
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       },
  //       {
  //         1: false,
  //         2: false,
  //         3: false,
  //         4: false,
  //         5: false,
  //         6: false,
  //         7: false,
  //         8: false,
  //         9: false,
  //       }
  //     ],
  //   });
  // }, []);

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
