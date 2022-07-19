import React from 'react';
import web from "../src/imgs/logo.webp";
import Common from './Common';

const Home = ()=>{
    return(
        <>
            <Common
                title = "Grow your Business with"
                content = "we are the team of talented developer making websites"
                btn = "Get Started"
                src= "/services"
                img = {web}
            />
        </>
    );
}

export default Home;