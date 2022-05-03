import React from "react";
import { Tabs, Tab, Container } from "@mui/material";
import CarouselFn from "../Carousel/Carousel";
import "./Promotion.scss";

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

const Promotion = (props) => {
  const [value, setValue] = React.useState(0);
  const kmItems = [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png",
      alt: "a",
      href:"",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920-x-1080-1-1.jpg",
      alt: "a",
      href:"",

    },
    {
      image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
      alt: "a",
      href:"",

    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
      alt: "a",
      href:"",

    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
      alt: "a",
      href:"",
    },
  ];

  const eventItems= [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-ScanQR-710x320.jpg",
      alt: "a",
      href:"",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-APP-710x320.jpg",
      alt: "a",
      href:"",

    },
    {
      image: "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg",
      alt: "a",
      href:"",

    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/12/BHD-Star-FBCover-Onyx-710x320.jpg",
      alt: "a",
      href:"",

    },
  ];
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="promotion-wrapper bg-black pt-12 pb-12">
      <Container className="promotion">
      <div className="promotion--title">
        <Tabs
        className="promotion--tabs pb-4"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="KHUYẾN MÃI" {...a11yProps(0)} />

          <hr className="promotion--divider" />

          <Tab label="SỰ KIỆN" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <CarouselFn moveTo="/saleoff/2" items={kmItems} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <CarouselFn moveTo="/saleoff/2" items={eventItems}/>
        </TabPanel>
      </div>
    </Container>
    </div>
    
  );
};

export default Promotion;
