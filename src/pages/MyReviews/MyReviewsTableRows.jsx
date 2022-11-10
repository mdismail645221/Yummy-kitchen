import React, { useState } from 'react';
import {TrashIcon, PencilIcon  } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const MyReviewsTableRows = ({ myReview, handleDelete }) => {
    // console.log(myReview)
    const { userImg, userName, serviceInfo, _id } = myReview;



    // console.log(upUserReviewMsg)


    const UpdateUser = (event ) => {
        event.preventDefault();

        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allReviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })


    }



    return (
        <tr>
            <th>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={userImg} alt="Avatar Tailwind CSS Component" className='w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-orange-600 ring-offset-gray-800' />
                </div>
            </th>
            <td>{userName}</td>
            <td>
                <textarea  className="textarea textarea-bordered w-full" defaultValue={serviceInfo} readOnly></textarea>
            </td>
            <td>
                <Link to={`/updateUpser/${_id}`}  className="btn w-1/2 px-3 btn-outline flex items-center py-1 pl-0 space-x-1">
                    <PencilIcon className="h-6 w-6 text-green-600 font-bold " />
                    <span className='text-green-600 font-bold '>Update</span>
                </Link>
            </td>
            <td>
                <button onClick={()=>handleDelete(_id)} type="button" className="btn btn-outline flex items-center px-2 py-1 pl-0 space-x-1">
                    <TrashIcon className="h-6 w-6 text-red-600 font-bold" />
                    <span className='text-red-600 font-bold'>Remove</span>
                </button>
            </td>
        </tr>
    );
};

export default MyReviewsTableRows;