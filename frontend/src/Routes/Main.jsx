import React from "react";
import { Route, Routes } from "react-router-dom";
import OpenPage from "./OpenPage.jsx";
import Videos from "./Videos.jsx";
// import Header from "../Header.jsx";

export default function Main(){


    return(
        <Routes>
            <Route path="/" element={<OpenPage/>}/>
            <Route path="Videos" element={<Videos/>}></Route>
        </Routes>
    )
}

