import React from 'react';
import Reviews from '../Reviews/Reviews';
import ThreeServices from '../Services/ThreeServices';
import Slider from '../shared/Sliders/Slider';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ThreeServices></ThreeServices>
            <About></About>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;