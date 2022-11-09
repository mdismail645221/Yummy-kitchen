import React, { useEffect, useState } from 'react';
import SingleImg from './SingleImg';

const Reviews = () => {



    const [imgMenu, setImgMenu] = useState([]);
    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                setImgMenu(data)
            })
    }, [])



    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl primary-color">WHAT'S ON THE MENU</h3>
                    <p className="mx-auto max-w-2xl dark:text-gray-400 ">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        imgMenu.map((img, idx)=> <SingleImg
                            key={idx}
                            img={img}
                        ></SingleImg>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;