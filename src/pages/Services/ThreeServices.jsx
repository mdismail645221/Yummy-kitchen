import React, { useEffect, useState, useContext } from 'react';
import SignleServices from './SignleServices';
import {Link} from 'react-router-dom'

const ThreeServices = () => {
    const [kitchenProducts, setKitchenProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setKitchenProducts(data)
                setLoading(false)
            })
    }, [])
    // console.log(kitchenProducts)

    if(loading){
        return <><div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
                <img className='w-12 h-12' src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt='log'/>
            </div>
        </div></>
    }

    return (
        <section className='w-4/5 mx-auto mt-24'>
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