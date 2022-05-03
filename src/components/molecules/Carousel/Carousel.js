import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.scss";

const CarouselFn = ({
  items,
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  },
  isDots = "true",
  isArrow = "false",
  moveTo,
}) => {
  return (
    <div className="carousel--wrapper">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={isDots}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px px-4"
        arrows={isArrow}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel--card">
            <Link to={`${moveTo+'/'}${item.href}`}>
              <img className="carousel--img" src={item.image} alt={item.alt} />
              <p className="carousel--content text-center py-6">
                {item?.content}
              </p>
              <div className="btn--login self-center text-center">
                <Button className="bg-lime-600 font-bold" variant="contained">
                  MUA VÉ
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselFn;
