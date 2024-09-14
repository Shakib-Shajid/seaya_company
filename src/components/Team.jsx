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

const Team = () => {
    return (
        <div className=' bg-[#8a8a8c] w-full mb-5'>
            <div className='w-full md:w-10/12 mx-auto'>
                <h3 className='text-3xl md:text-5xl ml-3 md:ml-0 md:w-full pt-10'>Our team</h3>
                <div className='w-full md:w-11/12 mx-auto text-white'>
                    <p className='text-3xl py-20'>Multidisciplinary team, engaged and supportive</p>
                    <p className='text-2xl underline'><Link href="/">Meet the team</Link></p>
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
                        <Image src="/group_1.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_2.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_3.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_1.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_2.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_3.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_1.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_2.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/group_3.jpg" width="300" height="300" alt="" className='w-full h-80' />
                    </SwiperSlide>
                    
                </Swiper>
                <div className="custom-pagination mt-[30px] flex justify-center pb-10"></div>

                {/* Custom Pagination below the swiper */}
            </div>
        </div>
    );
};

export default Team;
