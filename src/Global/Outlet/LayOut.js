import React from 'react';
import {Outlet} from 'react-router-dom';
import ResponsiveAppBar from '../Navbar/Navbar';

const LayOut = () => {
  return (
    <div>
    {/* <ResponsiveAppBar /> */}
        <Outlet/>
    </div>
  )
}

export default LayOut