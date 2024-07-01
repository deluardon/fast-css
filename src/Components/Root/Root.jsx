// import React from 'react';

import { Outlet, } from "react-router-dom";
import Home from "../Home/Home";

const Root = () => {
    return (
       <>
       <Home></Home>
       <Outlet></Outlet>
       
       </>
    );
};

export default Root;