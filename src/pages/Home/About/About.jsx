import React from 'react';
import womanFood from '../../../assets/images/aboutLogo.png';
import tomato from '../../../assets/images/tomato copy.png';
import vagitables from '../../../assets/images/vegitables.png';
import '../About/About.css'


const About = () => {
    return (
        <div className='flex w-full flex-col-reverse md:flex-row  md:w-4/5 mx-auto items-center justify-between bg-gray-200 rounded-xl shadow-xl px-5 py-10 my-20 relative'>
            {/* LEFT */}
            <div className='hidden lg:block lg:absolute lg:-bottom-10 w-32 h-32'>
                <img src={tomato} alt="tomato" />
            </div>

            <div className='hidden lg:block lg:absolute lg:-right-0 top-0 w-48 h-48'>
                <img src={vagitables} alt="tomato" />
            </div>

            <div className='text-left w-full'   style={{width: "55%"}}>
                <h3 className='text-3xl font-semibold my-3 primary-color '>ABOUT US</h3>
                <p>I am a professional maid. I always love to create new dishes and present these beautiful items to you. I can cook very well. Also I have delivered a lot of food. Client gave me very good response.</p>
                <hr className='border border-orange-500 w-1/2 my-8' />
                <div>
                    <p>My food is one of the many dishes of Bangladesh. Here are the pies that are celebrated during the winter festival. Hope you will like it very much. Vapa pitha, chitai pitha etc. many other pithas are made in Bangladesh. These pies are again popular. Pies which are very tasty and look beautiful are served here.</p>
                    <button className='px-8 py-3 my-8 btn-primary'>READ MORE..</button>
                </div>
            </div>
            {/* RIGHT */}
            <div  style={{width: "40%", height: "500px"}} className='about-right-container hidden lg:block'>
                
            </div>
        </div>
    );
};

export default About;