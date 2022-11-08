import React, { useEffect, useState } from 'react';
import SignleServices from './SignleServices';

const Services = () => {


    const [kitchenProducts, setKitchenProducts] = useState([]);
    useEffect(() => {
        fetch(`kitchen-items.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setKitchenProducts(data)
            })
    }, [])
    console.log(kitchenProducts)



    return (
        <section className='w-4/5 mx-auto py-24'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                {
                    kitchenProducts.map(product => <SignleServices
                        key={product.id}
                        product={product}
                    ></SignleServices>)
                }
            </div>
        </section>
    );
};

export default Services;