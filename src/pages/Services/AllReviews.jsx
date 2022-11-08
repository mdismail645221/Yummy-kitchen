import React from 'react';

const AllReviews = ({ review }) => {
    const { serviceInfo, userImg, userName } = review;
    return (
        <div className="border-t dark:border-gray-700 my-10 border-spacing-1 border-gray-300 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row px-5 py-3">
                <img src={userImg} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col text-left">
                    <h4 className="text-lg font-semibold">{userName}</h4>
                    <p className="dark:text-gray-400"><strong>Feedback: </strong>{serviceInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;