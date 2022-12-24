import React from "react";
import MainFrom from "./MainFrom";

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="contact_head text-center"><h1>Contact US</h1></div>
                <div className="row justify-content-center m-auto w-75">
                    <MainFrom/>
                </div>
            </div>
        </>
    )
};

export default Contact;