import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrPage from "./ErrPage";
import Home from "./Home";
import RouteButton from "./RouteButton";
import Service from "./Service";

const RoutesLink = () => {
    return (
        <>
            <RouteButton/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/livereact" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    )
};

export default RoutesLink;
