import React from "react";
import CardData from "./CardData";
import MainCard from "./MainCard";

const Service = () => {
    return (
        <>
            <h1 className="text-center">Our Services</h1>
            <div className="container">
                <div className="row mx-auto justify-content-center m-auto ms-auto gy-3">
                    {
                        CardData.map((val, ind) => {
                            return <MainCard
                                key={ind}
                                title={val.heading}
                                detail={val.para}
                                src={val.image}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default Service;