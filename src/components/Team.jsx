"use client";

import Link from 'next/link';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

const Team = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className=' bg-[#8a8a8c] w-full mb-5'>
            <div className='w-full md:w-10/12 mx-auto'>
                <h3 className='text-3xl md:text-5xl ml-3 md:ml-0 md:w-full pt-10'>Our team</h3>
                <div className='w-full md:w-11/12 mx-auto text-white'>
                    <p className='text-3xl py-20'>Multidisciplinary team, engaged and supportive</p>

                    <Link href="/team" className="relative flex items-center group text-2xl">
                        {/* Static Text */}
                        <span className="relative">
                            Meet the team

                            {/* Underline that animates when hovered */}
                            <span
                                className={`absolute left-0 bottom-0 w-full h-[2px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                            ></span>
                        </span>
                    </Link>
                </div>



                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination', // Target the custom pagination element
                    }}
                    modules={[Pagination]}
                    className="mySwiper md:w-11/12 my-16"

                    breakpoints={{
                        // Mobile view (up to 768px)
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // Tablet view (768px and above)
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // Desktop view (1024px and above)
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_1.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_2.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_3.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_1.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_2.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_3.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_1.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_2.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="relative group w-full h-80">
                                <Image src="/group_3.jpg" width="300" height="300" alt="Team Member" className="w-full h-80" />

                                {/* Overlay with name and position, hidden by default */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start pb-10 pl-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xl font-bold">John Doe</p>
                                    <p className="text-white text-md">Software Engineer</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>


                </Swiper>
                <div className="custom-pagination mt-[30px] flex justify-center pb-10"></div>

                {/* Custom Pagination below the swiper */}
            </div>
        </div>
    );
};

export default Team;
