import React, { useState } from 'react';
import toast from 'react-hot-toast';


const AddService = () => {
    const [name, setName] = useState(null);
    const [url, setURL] = useState(null);
    const [price, setPrice] = useState(null);
    const [info, setInfo]= useState(null)


    const addService = {
        name: name,
        image: url,
        price: price,
        description: info
    }

    

    const addSubmitHandler = (event) => {
        event.preventDefault();
        // add the mondodb database store
        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/Allservices`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res=> res.json())
        .then(data=> {
            toast.success('successfully')
            // console.log(data)
        })
        
    }




    return (
        <section className="pb-20 dark:bg-gray-800 dark:text-gray-50 bg-gray-200">
            <form onSubmit={addSubmitHandler}  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid form-control">
                <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className='text-center py-10'>
                        <h3 className='text-3xl font-bold primary-color'>Add Services</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="w-full form-control">
                            <label htmlFor="firstname" className="text-sm">Name</label><br/>
                            <input onChange={(e)=> setName(e.target.value)} name='name' id="name" type="name" placeholder="name" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <div className="w-full form-control">
                            <label htmlFor="lastname" className="text-sm">PhotoURL</label><br/>
                            <input onChange={(e)=> setURL(e.target.value)} name='url' id="url" type="url" placeholder="photoURL" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <div className="w-full form-control">
                            <label htmlFor="lastname" className="text-sm">Price</label><br/>
                            <input onChange={(e)=> setPrice(e.target.value)} name='price' defaultValue="0" id="lastname" type="number" placeholder="Price" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                    </div>
                    <div className='w-full my-10 form-control'>
                        <textarea onChange={(e)=> setInfo(e.target.value)} rows="5" name='info' className="w-full textarea textarea-bordered" placeholder="description" required></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type='submit' className='btn btn-primary'>ADD SERVICE</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;