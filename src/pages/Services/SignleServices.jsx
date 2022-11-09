import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SignleServices = ({ product }) => {
    const { image, _id, price, description, name } = product;
    return (
        <div className="w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className="object-cover cursor-pointer object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description.length > 100 ? description.slice(0, 100) + '....' : description}</p>
                    <p><strong>Price: </strong>${price}</p>
                </div>
                <Link to={`/services/${_id}`} className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-primary'>View Details</Link>

            </div>
        </div>
    );
};

export default SignleServices;