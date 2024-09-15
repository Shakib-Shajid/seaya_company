import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='relative'>
                <div>
                    <video
                        src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Ventures_NewVideo2_low.mp4"
                        loop
                        muted
                        autoPlay
                        className='w-full h-full object-cover'
                    ></video>

                </div>
                <div className='absolute top-36 left-24'>
                    <Image src="/logo_1.webp" width="200" height="200" alt="" />
                    <p className='text-5xl text-white w-2/3 mt-24 leading-tight'>Seaya Ventures is a technology-first fund investing in outstanding and mission driven founders of European companies.</p>
                </div>
            </section>

            <section className='p-24 '>
                <p className='text-2xl w-2/3 mb-20'>We are convinced that companies with a long-term mission provide better financial returns, attract top talent and are more resilient in the face of adversity. We look for impact-driven leaders with high standards seeking out both prosperity and purpose; long-term thinkers focused on responsible scaling, who are solving real problems, redefining industries, and promoting sustainable development.</p>
                <Image src="/water.webp" width="300" height="300" alt="" className='w-full' />
            </section>
        </div>
    );
};

export default page;

