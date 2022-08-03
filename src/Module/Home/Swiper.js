import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,Autoplay } from "swiper";
import style from "./Home.module.css"

export default function Slider() {
  const data = [
    {
      id: 0,
      img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-3.58c2f734.jpg",
      name: "Magic of Italy",
      rate: "$1870/",
      button:"3 Days 12+ LOS ANgles"
    },
    {
        id: 1,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-1.e72f98f2.jpg",
        name: "Magic of Rome",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 2,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-2.be6c507f.jpg",
        name: "Magic of England",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 3,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-4.506b0db7.jpg",
        name: "Magic of America",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 4,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-1.e72f98f2.jpg",
        name: "Magic of India",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 5,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-3.58c2f734.jpg",
        name: "Magic of Finland",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 6,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-2.be6c507f.jpg",
        name: "Magic of China",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 7,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-4.506b0db7.jpg",
        name: "Magic of Thailand",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
      {
        id: 8,
        img: "https://tevily-nextjs.vercel.app/_next/static/media/popular-tours__img-1.e72f98f2.jpg",
        name: "Magic of Brazil",
        rate: "$1870/",
        button:"3 Days 12+ LOS ANgles"
      },
  ];
  return (
    <div style={{height:'50vh'}}>
      <Swiper
        effect={"coverflow"}
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        breakpoints={{
            360: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            980: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item)=>(
   <SwiperSlide key={item.id}>
   <div
     style={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       flexDirection: "column",
       background:'white',
       textAlign:'center'
     }}
   >
     <img style={{ height: "50%", width: "100%" }} src={item.img} alt="img" />
     <h1 className={style.Description} style={{fontSize:'25px'}}>{item.name}</h1>
     <p className={style.Description} style={{fontSize:'18px', color:'red'}}>{item.rate}Per Person</p>
     <Button variant="outlined" size="large" color="error">{item.button}</Button>
   </div>
 </SwiperSlide>
        ))}
     
      </Swiper>
    </div>
  );
}
