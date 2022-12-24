import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesLink from "./RoutesLink";


const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <RoutesLink />
            </BrowserRouter>
        </>
    )
}

export default Navbar;
