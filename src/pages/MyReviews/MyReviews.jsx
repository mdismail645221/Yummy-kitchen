import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthConext } from '../../context/AuthProvider';
import MyReviewsTableRows from './MyReviewsTableRows';

const MyReviews = () => {

    const [myReviews, setSetReviews] = useState([]);

    const { user } = useContext(AuthConext);
    // console.log('My reviews', user)

    // query method get the signle email value in database

    useEffect(() => {
        fetch(`http://localhost:5000/allReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSetReviews(data)
            })
    }, [user.email])


    // delete itmes functionality handler
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/allReviews/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.deletedCount > 0){
                toast.success('Successfully Delete. GOOD JOB')
                const remaining = myReviews.filter(review=> review._id !== _id);
                setSetReviews(remaining)
            }
        })
    }



    return (
        <div className="overflow-x-auto container mx-auto my-20">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Reviews</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     myReviews.map(myReview=> <MyReviewsTableRows
                        key={myReview._id}
                        myReview={myReview}
                        handleDelete={handleDelete}
                     ></MyReviewsTableRows>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;