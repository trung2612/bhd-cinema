import { useContext } from "react";
import { ProductViewContext } from "feature/HomeScreen/HomeScreen";
import CarouselFn from "../Carousel/Carousel";
import "./Banner.scss";

const Banner = () => {
  const bannerItems = [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080NSD-1.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-Seventeen-Combo-1.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-JJK-combo-1.jpeg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png",
      alt: "a",
      href: "",
    },
    {
      image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/App.jpg",
      alt: "a",
      href: "",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920-x-1080-1-1.jpg",
      alt: "a",
      href: "",
    },
  ];

  const responsive = {
    all: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
    },
  };

  const productViewRef = useContext(ProductViewContext);

  const handleScrollToElement = () => {
    window.scrollTo({
      top: productViewRef.current.offsetTop + 20,
      behavior: "smooth",
    });
  };

  return (
    <div className="banner bg-black relative">
      <CarouselFn items={bannerItems} responsive={responsive} />
      <span
        className="btn-scroll-to-product-view"
        onClick={handleScrollToElement}
      />
    </div>
  );
};

export default Banner;
