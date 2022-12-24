import React from "react";
import { NavLink } from "react-router-dom";

const RouteButton = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="navbar-brand">Rokon Practice</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/service'>Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default RouteButton;