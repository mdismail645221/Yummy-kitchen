import React from 'react';
import Services from '../Services/Services';
import Slider from '../shared/Sliders/Slider';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;