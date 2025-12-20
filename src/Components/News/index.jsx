import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const News = () => {
  const endpoint = "http://localhost:3000/news";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation={true}
    >
      {data.map(({ id, imgSrc, newsTitle }) => (
        <SwiperSlide key={id} className="flex flex-col">
          <img src={imgSrc} className="h-40 w-full object-cover" />
          <p className="bg-main text-white p-2 h-10 truncate">{newsTitle}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default News;
