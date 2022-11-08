import React from 'react';
import banner1 from '../../../assets/images/chitoi pitha.png'
import banner2 from '../../../assets/images/banner2.jpg'
import humble from '../../../assets/images/humble pitha.png'
import puliPitha from '../../../assets/images/puliPitha.png'
import '../Sliders/Slider.css'

const Slider = () => {
    return (
        <section className='w-full'>
            <div className="carousel">
                <div id="slide1" className="carousel-item relative w-full" style={{ height: "600px" }}>
                    <div id='img-gradiant' className='w-full h-screen'>
                        <img src={humble} className='w-full' style={{ height: "600px" }} alt='pitha' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 bottom-0 right-1/2">
                        <a href="#slide4" className="btn btn-circle bg-orange-500 ">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-orange-500 ">❯</a>
                    </div>
                    <div className="card w-full md:w-1/2 text-left absolute left-10 top-1/4" >
                        <div className="card-body">
                            <h2 className="card-title text-2xl md:text-5xl text-white font-bold">BINNI CHALER PITHA</h2>
                            <p className='text-gray-50 text-3xl font-semibold'>Binni rice pita is one of the favorite foods in winter. Before the sun rises in the morning, mothers</p>
                            <div className="card-actions my-3">
                                <button className="btn px-10 py-4 btn-primary">SUBSCRIBES NOW!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" style={{ height: "600px" }}>
                    <div id='img-gradiant' className='w-full h-screen'>
                        <img src={banner2} className='w-full' style={{ height: "600px" }} alt='pitha' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 bottom-0 right-1/2">
                        <a href="#slide1" className="btn btn-circle bg-orange-500">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="card w-full md:w-1/2 text-left absolute left-10 top-1/4" >
                        <div className="card-body">
                            <h2 className="card-title text-2xl md:text-5xl text-white font-bold">PIZZA</h2>
                            <p className='text-gray-50 text-3xl font-semibold'>pizza is very interesting fast food. tasty .</p>
                            <div className="card-actions my-3">
                                <button className="btn px-10 py-4 btn-primary">SUBSCRIBES NOW!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full" style={{ height: "600px" }}>
                    <div id='img-gradiant' className='w-full h-screen'>
                        <img src={puliPitha} className='w-full' style={{ height: "600px" }} alt='slider' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 bottom-0 right-1/2">
                        <a href="#slide2" className="btn btn-circle bg-orange-500">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="card w-full md:w-1/2 text-left absolute left-10 top-1/4" >
                        <div className="card-body">
                            <h2 className="card-title text-2xl md:text-5xl text-white font-bold">PULI PITHA</h2>
                            <p className='text-gray-50 text-3xl font-semibold'>Paush-Parban, the festival of Pithe-Puli of Bengali, has just passed. On the auspicious occasion of .</p>
                            <div className="card-actions my-3">
                                <button className="btn px-10 py-4 btn-primary">SUBSCRIBES NOW!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full" style={{ height: "600px" }}>
                    <div id='img-gradiant' className='w-full h-screen' >
                        <img src={banner1} className='w-full' style={{ height: "600px" }} alt='pitha' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 bottom-0 right-1/2">
                        <a href="#slide3" className="btn btn-circle bg-orange-500">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="card w-full md:w-1/2 text-left absolute left-10 top-1/4" >
                        <div className="card-body">
                            <h2 className="card-title text-2xl md:text-5xl text-white font-bold">CHITOI PITHA</h2>
                            <p className='text-gray-50 text-3xl font-semibold'>My favourite combination, however, is the chingri shutki and morich bhorta. The dried shrimp flavour....</p>
                            <div className="card-actions my-3">
                                <button className="btn px-10 py-4 btn-primary">SUBSCRIBES NOW!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;