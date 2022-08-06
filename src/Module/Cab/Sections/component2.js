import { Button } from "@mui/material";
import React from "react";
import style from "../Cab.module.css";
const Component2 = () => {
  return (
    <section className={style.FlexComponent}>
      <section className={style.FlexItem1}>
        <img
          src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </section>
      <section className={style.FlexItem2}>
        <div>
          <h1 className={style.Heading}>HIRE HONDA CITY IN VARANASI</h1>
          <p className={style.Paragraph}>Unmatched Luxury Cars Available</p>
        </div>
        <p className={style.Bio}>
          Balaji’s travels Honda City is always available for the pick-up and
          drop facility for the airport, railway station, & Bus station. Honda
          City is a 4 seater Sedan car. You can book Honda City from Balaji’s
          travels, Varanasi. Honda City is a luxury car in Varanasi. Suitable
          car for the long trips from Varanasi or for whole Buddhist pilgrimage
          tour. Book a <b>Honda City car @ Rs. 20/Km.</b>
        </p>
        <h1 className={style.Paragraph} style={{fontSize:"20px", textAlign:"left"}}>Starting From INR 2500/-</h1>
        <Button variant="contained" size="large" color="error">
          Book Now
        </Button>
      </section>
    </section>
  );
};

export default Component2;
