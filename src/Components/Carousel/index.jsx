import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({ children }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation={true}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
