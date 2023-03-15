import React from 'react';
import '../HomeApps/HomeApps.css'

const HomeApps = () => {
    return (
        <section className='home-apps-container'>
            <div className='home-apps-full-container container mx-auto grid grid-cols-1 md:grid-cols-2 '>
                <div className='home-apps-content z-10'>
                    <h3 className='text-4xl  py-3'>Download the food and groceries you love</h3>
                    <p>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                </div>
                <div className='home-app-img-container'>
                   <div className='apps-img'>
                        <img src='https://i.ibb.co/s5MC63Y/app-section-img.png'/>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default HomeApps;