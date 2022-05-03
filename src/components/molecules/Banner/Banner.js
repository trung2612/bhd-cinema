import { useContext } from "react";
import { ProductViewContext } from "feature/HomeScreen/HomeScreen";
import CarouselFn from "../Carousel/Carousel";
import "./Banner.scss";

const Banner = ({ banners }) => {
  const bannerItems = banners.map((item) => ({
    id: item.id,
    image: item.href,
    alt: item.alt,
  }));

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
      <CarouselFn moveTo="saleoff" items={bannerItems} responsive={responsive} />
      <span
        className="btn-scroll-to-product-view"
        onClick={handleScrollToElement}
      />
    </div>
  );
};

export default Banner;
