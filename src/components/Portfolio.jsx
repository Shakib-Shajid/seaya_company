"use client"
import Image from "next/image";
import Link from "next/link";

import { useState } from 'react';

const Portfolio = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className='w-full md:w-11/12 mx-auto'>
            <h2 className='text-3xl md:text-5xl ml-3 md:ml-0 md:w-full font-bold my-3'>Portfolio</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-3/4 mx-auto my-10 ">


                {/* 1st card */}
                <div className="card w-72 md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative overflow-hidden group">
                    {/* Container for the image */}
                    <div className="relative w-full h-72">
                        <Link href={`/portfolio/abc`}>
                            <Image
                                src="/group_4.webp"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300" />
                            <Image
                                src="/group_1.jpg"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                        </Link>
                    </div>

                    <hr className="my-5 border-2" />
                    <div className="p-4 flex flex-col">
                        <h2 className="card-title text-xl font-bold">Glovo</h2>
                        <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything they need in a short period of time.</p>
                        <div className="flex items-center mt-auto">
                            <button><Link href={`/portfolio/abc`}>&minus; Learn More</Link></button>
                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className="card w-72 md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative overflow-hidden group">
                    {/* Container for the image */}
                    <div className="relative w-full h-72">
                        <Link href={`/portfolio/abc`}>
                            <Image
                                src="/group_5.webp"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300" />
                            <Image
                                src="/group_2.jpg"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                        </Link>
                    </div>

                    <hr className="my-5 border-2" />
                    <div className="p-4 flex flex-col">
                        <h2 className="card-title text-xl font-bold">Wallbox</h2>
                        <p className="my-2">Wallbox is a leading designer, manufacturer, and distributor of innovative intelligent charging solutions for plug-in electric and hybrid cars.</p>
                        <div className="flex items-center mt-auto">
                            <button><Link href={`/portfolio/abc`}>&minus; Learn More</Link></button>
                        </div>
                    </div>
                </div>


                {/* 3rd card */}
                <div className="card w-72 md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative overflow-hidden group">
                    {/* Container for the image */}
                    <div className="relative w-full h-72">
                        <Link href={`/portfolio/abc`}>
                            <Image
                                src="/group_6.webp"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300" />
                            <Image
                                src="/group_3.jpg"
                                alt="Shoes"
                                width="300"
                                height="300"
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                        </Link>
                    </div>

                    <hr className="my-5 border-2" />
                    <div className="p-4 flex flex-col">
                        <h2 className="card-title text-xl font-bold">Cabify</h2>
                        <p className="my-2">Transforming mobility in Iberia and Latam. Cabify is the leading ride-hailing and mobility platform in Iberia and Latam.</p>
                        <div className="flex items-center mt-auto">
                            <button><Link href={`/portfolio/abc`}>&minus; Learn More</Link></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-10 text-lg ml-7 md:ml-0 w-full">
                <p className="md:w-10/12 mx-auto lg:w-3/4">
                    <Link href="/portfolio" className="relative flex items-center group">
                        {/* Static Text */}
                        <span className="relative">
                            View all companies

                            {/* Underline that animates when hovered */}
                            <span
                                className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                            ></span>
                        </span>
                    </Link>
                </p>
            </div>


        </div>
    );
};

export default Portfolio;

