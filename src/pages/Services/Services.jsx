// import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';
import AllReviews from './AllReviews';

const Services = () => {

    const [userReviewMsg, setUserReviewMsg] = useState('')
    const [allReviews, setAllReviews] = useState([]);
    const { user } = useContext(AuthConext)

    const singleServiceItmes = useLoaderData();
    // console.log(singleServiceItmes)
    const { description, _id } = singleServiceItmes;


    // console.log(userReviewMsg)
    // console.log(reviews)
    
    
    const handleReviewSubmit = (event) => {
        event.preventDefault()

        console.log()

        
        const singleRiviews = {
            serviceInfo: userReviewMsg,
            email: user?.email,
            userName: user?.displayName,
            serviceId : _id,
            userImg: user?.photoURL,
        }


        if(userReviewMsg.length <= 40 && userReviewMsg.length <= 0){
            toast.error('please added the 40 characters.')
            return
        }else{
            toast.success('Successfully added your revies. GOOD JOB')
            event.target.form.reset()
        }

        // console.log(singleRiviews)

        fetch(`http://localhost:5000/allReviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleRiviews)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })

    }


    // all reviews data load in database
    useEffect(()=>{
        fetch( `http://localhost:5000/allReviews`)
        .then(res=> res.json())
        .then(data=> {
            // console.log(data)
            setAllReviews(data)
        })
    },[userReviewMsg]) 

    




    return (
        <section className='container mx-auto'>
            {/* // service details info */}
            <div className="container flex flex-col w-full px-5 py-10 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 border-spacing-0 border-gray-100 shadow-lg my-20 bg-orange-100">
                <div className="flex justify-between p-4">
                    <h2 className='text-lg md:text-2xl font-semibold lg:font-bold'>Services details</h2>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>{description}</p>
                </div>
            </div>
            {/* // review fot that service--- */}
            <div>
                <article className="container mx-auto  dark:bg-gray-800 dark:text-gray-50  mb-20">
                    <div>
                        <h3 className='text-2xl md:text-5xl text-center py-10 primary-color font-bold'>Peoples Reviews</h3>
                    </div>
                    {
                        allReviews.map(review=> <AllReviews
                            key={review._id}
                            review={review}
                        ></AllReviews>)
                    }
                </article>
                <div>
                    {
                        user ?
                            <>
                                <form className="flex flex-col  shadow-sm rounded-xl mb-20 dark:bg-gray-900 dark:text-gray-100 form-control">
                                    <div className="flex flex-col items-center w-full">
                                        <h2 className="text-3xl font-semibold text-center my-5">Your opinion Reviews!</h2>
                                        <div className="flex flex-col w-4/5 mx-auto form-control">
                                            <textarea onChange={(e)=> setUserReviewMsg(e.target.value)} name='name'  rows="5" className="textarea textarea-warning" placeholder="Write Your Review" required />
                                            <button onClick={handleReviewSubmit} type='submit' className="inline-block W-20  py-4 my-8 font-semibold rounded-md dark:text-gray-900 btn-primary btn">Send feedback</button>
                                        </div>
                                    </div>
                                </form>
                            </>
                            :
                            <>
                                <div  className='flex justify-center pt-10 pb-20'>
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