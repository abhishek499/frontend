import React from 'react';
import style from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={style.Container}>
        <img src="http://tirupatitravels.org/images/logo.png" alt="logo" />
    </div>
  )
}

export default Logo