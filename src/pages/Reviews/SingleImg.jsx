import React from 'react';

const SingleImg = ({img}) => {
    return (
        <div className="space-y-4">
            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={img.image} />
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{img.name}</h4>
            </div>
        </div>
    );
};

export default SingleImg;