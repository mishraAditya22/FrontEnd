import React from 'react';
import {Route,Routes} from 'react-router-dom';
// eslint-disable-next-line
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

const App = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<Home/>}>Contact</Route>
                <Route exact path="/about" element={<About/>}>Contact</Route>
                <Route exact path="/contact" element={<Contact/>}>Contact</Route>
                <Route exact path="/services" element={<Service/>}>Services</Route>
            </Routes>
            {/* <div className="btn">
                <Button className="mx-0">BUTTON-1</Button>
            </div> */}
            <Footer/>
        </>
    );
}

export default App;