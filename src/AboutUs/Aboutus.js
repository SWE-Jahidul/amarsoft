import React from 'react';
import About from '../About/About';
import AboutusHeader from '../AboutusHeader/AboutusHeader';
import ReadtoStaerted from "../ReadytoStarted/ReadtoStaerted";

const Aboutus = () => {
    return (
        <div>
            <AboutusHeader></AboutusHeader>
            <About></About>
            <ReadtoStaerted></ReadtoStaerted>
        </div>
    );
};

export default Aboutus;