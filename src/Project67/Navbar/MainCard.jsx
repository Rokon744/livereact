import React from "react";
import { Link } from "react-router-dom";

const MainCard = (props) => {
    return (
        <>
        
        <div className="col-lg-4 col-xxl-3 col-md-6 col-8 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img width='100%' height='200' src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to=''><button type="button" class="btn btn-outline-primary">Check Now</button></Link>
                </div>
            </div>
            </div>
        </>
    )
};


export default MainCard;
