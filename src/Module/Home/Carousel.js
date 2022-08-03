import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay } from "swiper";

export default function Carousel() {
  const data = [
    {
      id: 0,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-3.58c2f734.jpg",
    },
    {
      id: 1,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-1.e72f98f2.jpg",
    },
    {
      id: 2,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-2.be6c507f.jpg",
    },
    {
      id: 3,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-4.506b0db7.jpg",
    },
    {
      id: 4,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-1.e72f98f2.jpg",
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
                filter: "brightness(0.5)",
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
