import React from 'react';
import { Link } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='errorPage-conatainer h-screen flex items-center justify-center bg-gray-200'>
            <div className='flex flex-col space-y-4'>
                <p className='text-2xl font-semibold text-left'>Oops</p>
                <h1 className='text-8xl font-bold primary-color'>404</h1>
                <p className='text-red-600 font-semibold'>Page Not Found</p>
                <p className='text-2xl text-gray-900'>we are sorry, but the page you requested was not found</p>
                <div className='my-4'>
                    <Link to="/" className='btn btn-primary'>go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;