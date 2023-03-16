import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { toast } from 'react-hot-toast';
import '../PopularResturantSection/PopularResturantSection.css'

const PopularResturantSection = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/resturentFoods.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let emoji = <span>&#128512;</span>
    const handleBooking = () => {
        toast.success(<><span>Functionality will coming soon. {emoji}</span></>)
    }

    return (
        <section>
            <Carousel
                // swipeable={true}
                // draggable={false}
                className='container mx-auto'
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={1000}
            // containerClass="carousel-container"
            // customTransition="all .5"

            >
                {
                    items?.map(item => {
                        return (
                            <div className="card w-full bg-base-100 shadow-xl">
                                <div className='h-[250px] relative card-image'>
                                    <figure><img className='w-full h-full absolute top-0 left-0 object-cover' src={item?.image} alt="Shoes" /></figure>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">{item?.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>;
        </section>
    );
};

export default PopularResturantSection;