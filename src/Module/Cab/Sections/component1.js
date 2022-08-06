import { Swiper, SwiperSlide } from "swiper/react";
// import Button from "@mui/material/Button";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay } from "swiper";

export default function Component1() {
  const data = [
    {
      id: 0,
      img: "https://www.hondacarindia.com/areas/city2020/content/desktop/images/bg6.jpg",
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              style={{
                height: "85vh",
                width: "100%",
                objectPosition: "center",
                objectFit: "cover",
                zIndex:0,
              }}
              src={item.img}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
