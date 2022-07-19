import React from 'react';
import web from "../src/imgs/logo.webp";
import Common from './Common';

const About = ()=>{
    return(
        <>
            <Common
                title="Welcome to "
                content="For more updates . connect with us "
                btn="Contact Now"
                src="/contact"
                img={web}
            />
        </>
    );
}

export default About;