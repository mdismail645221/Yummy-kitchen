import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';

const Services = () => {

    const [userReviewMsg, setUserReviewMsg] = useState('')
    const { user } = useContext(AuthConext)

    const singleServiceItmes = useLoaderData();
    // console.log(singleServiceItmes)
    const { description, _id } = singleServiceItmes;


    // console.log(userReviewMsg)
    const reviews = {
        serviceInfo: userReviewMsg,
        useEmail: user?.email,
        userName: user?.displayName,
        serviceId : _id,
        userImg: user?.photoURL,
    }
    // console.log(reviews)




    return (
        <section className='container mx-auto'>
            {/* // service details info */}
            <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 border-spacing-0 border-gray-100 shadow-lg my-20">
                <div className="flex justify-between p-4">
                    <h2 className='text-lg md:text-2xl font-semibold lg:font-bold'>Services details</h2>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>{description}</p>
                </div>
            </div>
            {/* // review fot that service--- */}
            <div>
                <article className="container mx-auto  dark:bg-gray-800 dark:text-gray-50 bg-gray-200 mb-20">
                    <div className="border-t dark:border-gray-700 my-10 border-spacing-1 border-gray-300 rounded-lg shadow-lg">
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row px-5 py-3">
                            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                                <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <div>
                    {
                        user ?
                            <>
                                <form className="flex flex-col  shadow-sm rounded-xl mb-20 dark:bg-gray-900 dark:text-gray-100">
                                    <div className="flex flex-col items-center w-full">
                                        <h2 className="text-3xl font-semibold text-center my-5">Your opinion Reviews!</h2>
                                        <div className="flex flex-col w-4/5 mx-auto">
                                            <textarea onChange={(e)=> setUserReviewMsg(e.target.value)} rows="5" className="textarea textarea-warning" placeholder="Write Your Review"></textarea>
                                            <button type="button" className="inline-block W-20  py-4 my-8 font-semibold rounded-md dark:text-gray-900 btn-primary btn">Send feedback</button>
                                        </div>
                                    </div>
                                </form>
                            </>
                            :
                            <>
                                <div className='flex justify-center pt-10 pb-20'>
                                    <p className='text-3xl'>Please <Link to='/login' className='primary-color'>login</Link> to add a review</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>


    );
};

export default Services;