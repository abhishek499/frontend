import React from "react";
import style from "./Home.module.css";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import TourIcon from "@mui/icons-material/Tour";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HikingIcon from "@mui/icons-material/Hiking";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import Slider from "./Swiper";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className={style.Container}>
      <div className={style.section1}>
        <Carousel />
        <h1>Travel and Adventure- kartikkkkkkk</h1>
      </div>
      {/* Section 2 under padding */}
      <section className={style.childContainer}>
        <div className={style.section2}>
          <section style={{ border: "none" }}>
            <div className={style.inputContainer}>
              <p>Name</p>
              <input
                className={style.input}
                type="text"
                placeholder="Enter keywords"
              />
            </div>
          </section>
          <section>
            <div className={style.inputContainer}>
              <p>Contact Number</p>
              <input
                className={style.input}
                type="text"
                placeholder="Enter keywords"
              />
            </div>
          </section>
          <section>
            <div className={style.inputContainer}>
              <p>Query</p>
              <input
                className={style.input}
                type="text"
                placeholder="Enter keywords"
              />
            </div>
          </section>
          <section
            style={{
              background: "red",
              color: "white",
              fontFamily: "El Messiri",
              fontSize: "25px",
            }}
          >
            Submit
          </section>
        </div>
        <div className={style.section3}>
          <h1 className={style.Heading}>Spritual Varanasi</h1>
          <p className={style.Description}>Popular Varanasi Tour Packages</p>
          <div className={style.cardSection}>
            <section className={style.item1}>
              <p>Spain</p>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section className={style.item2}>
              <p>Thailand</p>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section className={style.item1}>
              <p>Africa</p>
              <img
                src="https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section className={style.item3}>
              <p>England</p>
              <img
                src="https://images.unsplash.com/photo-1559910369-3924e235c1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section className={style.item3}>
              <p>Australia</p>
              <img
                src="https://images.unsplash.com/photo-1574509322729-fdbcea67df6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
          </div>
        </div>
      </section>

      {/* Section 3 No Padding */}
      <div className={style.section4}>
        <section className={style.item1}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Kashi_Vishwanath_Renovated_Mandir.jpg/220px-Kashi_Vishwanath_Renovated_Mandir.jpg"
            alt=""
          />
          <div>
            <h1 className={style.Heading}>30%</h1>
            <p className={style.Heading}>Discount</p>
          </div>
        </section>
        <section className={style.item2}>
          <h1>About Temple</h1>
          <p>
            Kashi Vishwanath Temple is one of the most famous temple in
            Varanasi, also known as the Golden temple dedicated to the Lord
            Shiva. It was constructed in the year 1780 by the Maratha monarch,
            Maharani Ahilyabai Holkar of the Indore.
          </p>
          <Button variant="contained" size="large" color="error">
            Start your tour now
          </Button>
        </section>
      </div>
      <div className={style.section5}>
        <h1 className={style.Heading}>Featured tours</h1>
        <p className={style.Description}>POPULAR DOMESTIC DESTINATIONS</p>
        <section style={{ padding: "60px 0" }}>
          <Slider />
        </section>
      </div>
      <div className={style.section6}>
        <section className={style.item1}>
          <div>
            <YouTubeIcon style={{ fontSize: "120px", color: "red" }} />
          </div>
          <h1 className={style.Heading}>Are you ready to travel?</h1>
          <p className={style.Description} style={{ color: "white" }}>
            Tevily is a World Leading Online Tour Booking Platform
          </p>
        </section>
        <section className={style.item2}>
          <div>
            <ParaglidingIcon className={style.TripIcon} />
            <h3>Paragliding</h3>
          </div>
          <div>
            <TourIcon className={style.TripIcon} />
            <h3>Tour</h3>
          </div>
          <div>
            <FlightTakeoffIcon className={style.TripIcon} />
            <h3>Flight</h3>
          </div>
          <div>
            <HikingIcon className={style.TripIcon} />
            <h3>Hiking</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
