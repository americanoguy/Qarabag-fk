import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const sponsors = [
  "public/sponsorlar/AFFA.png",
  "public/sponsorlar/azercay.png",
  "public/sponsorlar/azersun.png",
  "public/sponsorlar/bizim_sufre_logo.png",
  "public/sponsorlar/pflLogo_(1).png",
  "public/sponsorlar/sirab_ag.png",
];

const Sponsors = () => {
  return (
    <div className="sponsors bg-main py-9 mt-10 mb-0">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-transparent w-full rounded-lg flex items-center justify-center h-20">
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="w-90 max-h-full object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsors;
