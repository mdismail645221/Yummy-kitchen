import React from 'react';
import womanFood from '../../../assets/images/aboutLogo.png';
import tomato from '../../../assets/images/tomato copy.png';
import vagitables from '../../../assets/images/vegitables.png';


const About = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row  w-4/5 mx-auto items-center justify-between bg-gray-200 px-3 py-8'>
            {/* LEFT */}
            <div className='text-left'  style={{width: "58%"}}>
                <h3 className='text-2xl font-semibold my-3'>ABOUT US</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan.</p>
                <hr className='border border-orange-500 w-1/2 my-8' />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id.</p>
                    <button className='px-8 py-3 my-3 btn-primary'>READ MORE..</button>
                </div>
            </div>
            {/* RIGHT */}
            <div style={{width: "38%"}}>
                <img src={womanFood} alt="womanFood" className='w-full' style={{height: "600px"}} />
            </div>
        </div>
    );
};

export default About;