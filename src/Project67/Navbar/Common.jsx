import React from "react";
import { NavLink } from "react-router-dom";
import Grow_image from '../image/Grow_Business.jpg'

const Common = (props) => {
    return (
        <>
            <div className="container">
                <div className="row align-items-start home_hgt">
                    <div className="col-lg-6 mb-5">
                        <div className="grow_business text-lg-start text-center">
                            <h1>{props.title}</h1>
                            <h1 className="rokon_developer">Rokon Developer</h1>
                            <div>
                                <p>We are talented team of making websites</p>
                                <button type="button" className="btn btn-outline-primary"><NavLink to={props.visit}>{props.btn}</NavLink></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image_area text-center">
                            <img width='100%' height='400px' src={props.img} alt="Grow_Business" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Common;