import React from "react";
import Common from "./Common";
import world from '../image/world.jpg'


const About = () => {
    return (
        <>
            <Common
                title= 'Welcome to About page'
                img = {world}
                btn= 'Contact Here'
                visit = '/contact'
            />
        </>
    )
};

export default About;