import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';
import MyReviewsTableRows from './MyReviewsTableRows';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('my reviews')

    const [myReviews, setSetReviews] = useState([]);

    const { user, logOut } = useContext(AuthConext);
    // console.log('My reviews', user)

    // query method get the signle email value in database

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allReviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('YUMMY-TOKEN')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setSetReviews(data)
            })
    }, [user.email])


    // delete itmes functionality handler
    const handleDelete = (_id) => {
        const agreed = window.confirm('Are you sure Delete your Review');
        if (agreed) {

            fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allReviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Delete. GOOD JOB')
                        const remaining = myReviews.filter(review => review._id !== _id);
                        setSetReviews(remaining)
                    }
                })
        }
    }



    return (
        <div className="overflow-x-auto container mx-auto my-20">
            {
                myReviews?.length === 0 ?
                    <>
                        <div className='h-screen flex flex-col justify-center items-center'>
                            <h2 className='text-5xl py-3 font-bold'>No reviews were added</h2>
                            <Link to="/" className='btn btn-primary my-5 flex justify-center'>
                                HOME
                                <ChevronRightIcon className="h-6 w-10 text-white font-bold" />
                            </Link>
                        </div>
                    </>
                    :
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Reviews</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myReviews?.map(myReview => <MyReviewsTableRows
                                    key={myReview._id}
                                    myReview={myReview}
                                    handleDelete={handleDelete}
                                ></MyReviewsTableRows>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyReviews;