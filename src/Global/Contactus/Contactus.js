import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import style from "./Contactus.module.css";

const Contactus = () => {
  return (
    <div className={style.Container}>
        <div className={style.ChildContainer}>
          <CallIcon style={{color:'white'}}/>
        </div>
        <div className={style.ChildContainer2}>
        <h1>Call Now</h1>
        </div>
    </div>
  )
}

export default Contactus