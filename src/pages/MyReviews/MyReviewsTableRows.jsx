import React from 'react';
import {TrashIcon, PencilIcon  } from '@heroicons/react/24/solid'

const MyReviewsTableRows = ({ myReview }) => {
    console.log(myReview)
    const { userImg, userName, serviceInfo } = myReview;
    return (
        <tr>
            <th>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={userImg} alt="Avatar Tailwind CSS Component" className='w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-orange-600 ring-offset-gray-800' />
                </div>
            </th>
            <td>{userName}</td>
            <td>
                <textarea className="textarea textarea-bordered w-full" defaultValue={serviceInfo} disabled></textarea>
            </td>
            <td>
                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <PencilIcon className="h-6 w-6 text-green-600 font-bold" />
                    <span className='text-green-600 font-bold'>Edit</span>
                </button>
            </td>
            <td>
                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <TrashIcon className="h-6 w-6 text-red-600 font-bold" />
                    <span className='text-red-600 font-bold'>Remove</span>
                </button>
            </td>
        </tr>
    );
};

export default MyReviewsTableRows;