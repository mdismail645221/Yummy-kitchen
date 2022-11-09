import React, { useEffect, useState } from 'react';
import SignleServices from './SignleServices';
import {Link} from 'react-router-dom'

const ThreeServices = () => {


    const [kitchenProducts, setKitchenProducts] = useState([]);
    useEffect(() => {
        fetch(`https://test-server-eight.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setKitchenProducts(data)
            })
    }, [])
    console.log(kitchenProducts)



    return (
        <section className='w-4/5 mx-auto py-18'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold primary-color'>Services</h3>
                <p className='text-gray-500 space-5 pt-8 pb-16 text-lg'>Many new food recipes are shown here daily.<br/> All are my own food. Hope you will like my food items very much. I like whoever you like. You will know by commenting.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                {
                    kitchenProducts.map(product => <SignleServices
                        key={product._id}
                        product={product}
                    ></SignleServices>)
                }
            </div>
            
            <Link to='/allServicesItems'  className='btn-primary btn my-11 '>See More</Link>
            
        </section>
    );
};

export default ThreeServices;