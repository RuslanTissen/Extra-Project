import React from "react";
import { Route, Routes } from "react-router-dom";
import OpenPage from "./OpenPage.jsx";
import Videos from "./Videos.jsx";
import Forum from "./Forum.jsx";
import Project from "./Project.jsx";

export default function Main(){


    return(
        <Routes>
            <Route path="/" element={<OpenPage/>}/>
            <Route path="Videos" element={<Videos/>}></Route>
            <Route path="Forum" element={<Forum/>}></Route>
            <Route path="Project" element={<Project/>}></Route>
        </Routes>
    )
}

