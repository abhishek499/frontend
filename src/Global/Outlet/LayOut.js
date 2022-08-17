import React from 'react';
import {Outlet} from 'react-router-dom';
import ResponsiveAppBar from '../Navbar/Navbar';
import Navbar2 from '../Navbar/Navbar2';

const LayOut = () => {
  return (
    <div>
    {/* <ResponsiveAppBar /> */}
    {/* <Navbar2 /> */}
        <Outlet/>
    </div>
  )
}

export default LayOut