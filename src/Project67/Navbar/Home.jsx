import React from "react";
import Common from "./Common";
import Business from '../image/Grow_Business.jpg'

const Home = () => {
    return (
        <>
            <Common
                title = 'Grow Your Business with'
                img = {Business}
                btn= 'Get Started'
                visit = '/service'
            />
        </>
    )
};

export default Home;