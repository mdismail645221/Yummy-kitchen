import React from 'react';
import logo from '../../assets/images/favicon.ico';
import { FaFacebookSquare, FaYoutubeSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 primary-bg-color text-white">
            <div className="container flex mx-auto flex-col justify-between py-10  space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                            <img src={logo} alt="logo" />
                        </div>
                        <span className="self-center text-2xl font-semibold">YUMMY KITCHEN</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 text-1xl font-bold">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">My Reviews</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50 text-1xl font-bold">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#">MongoDB API</a>
                            </li>
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">React</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50 text-1xl font-bold">Social media</div>
                        <div className="flex justify-center space-x-3">
                            <a href="#" title="Facebook" className="flex items-center p-1">
                                <FaFacebookSquare className='w-10 h-10 p-2 rounded-full text-white bg-blue-700' />
                            </a>
                            <a href="#" title="Twitter" className="flex items-center p-1">
                                <FaYoutubeSquare className='w-10 h-10 p-2 rounded-full text-white bg-blue-700' />
                            </a>
                            <a href="#" title="Instagram" className="flex items-center p-1">
                                <FaTwitter  className='w-10 h-10 p-2 rounded-full text-white bg-blue-700' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 <strong>YUMMY KITCHEN</strong>. All rights reserved.</div>
        </footer>
    );
};

export default Footer;