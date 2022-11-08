import React from 'react';

const Reviews = () => {
    return (
        <section className='w-4/5 mx-auto bg-gray-50 py-28 px-8'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold primary-color'>Our Reviews</h3>
                <p className='text-gray-500 space-5 pt-8 pb-16 text-lg'> Many people have given beautiful reviews here.<br /> You can give a review if you want. They gave a review of the food they liked.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {/* left */}
                <div className='left-container'>
                    {/* info container */}
                    <div className='bg-gray-100 shadow-lg'>
                        <div className='flex items-center justify-between info-container'>
                            <div className='flex'>
                                <div>
                                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                                <div>
                                    <h4>ISMAIL HOSSAIN</h4>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div>
                                <p>OSAM</p>
                            </div>
                        </div>
                        {/* info-body */}
                        <div className='text-left'>
                            <p>bapa pitha ta onek sundor hoice. samne aro valo valo pitha banaben.</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='left-container'>
                    {/* info container */}
                    <div className='bg-gray-100 shadow-lg'>
                        <div className='flex items-center justify-between info-container'>
                            <div className='flex'>
                                <div>
                                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                                <div>
                                    <h4>ISMAIL HOSSAIN</h4>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div>
                                <p>OSAM</p>
                            </div>
                        </div>
                        {/* info-body */}
                        <div className='text-left'>
                            <p>bapa pitha ta onek sundor hoice. samne aro valo valo pitha banaben.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;