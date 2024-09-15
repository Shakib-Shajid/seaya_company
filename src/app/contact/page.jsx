import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='md:p-24 mt-20 md:mt-0 ml-2 md:ml-0'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl'>Contact</h3>

            </section>

            <section className='ax-w-full '>
                <div className='md:pl-24 md:pt-24 ml-2 md:ml-0'>
                    <hr className='border mb-5 border-gray-400 md:w-11/12' />
                    <div className='flex gap-3 md:w-11/12 my-20'>
                        <h3 className='text-2xl md:text-4xl lg:text-6xl w-1/3'>Reach out</h3>
                        <div className='w-2/3'>
                            <div className='flex gap-40'>
                                <div>
                                    <p className='text-2xl'>Press inquiries</p>
                                    <p className='text-base'>press@seaya.vc</p>
                                </div>

                                <div>
                                    <p className='text-2xl'>Contact us</p>
                                    <p className='text-base'>info@seaya.vc</p>
                                </div>

                                <div>
                                    <p className='text-2xl'>Send your Pitch</p>
                                    <p className='text-base'>Click here</p>
                                </div>
                            </div>
                            <Image src="/reach.webp" width="300" height="300" alt="" className='w-full my-20' />
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className='md:pl-24 md:pt-24 ml-2 md:ml-0'>
                    <hr className='border mb-5 border-gray-400 md:w-11/12' />
                    <div className='flex gap-3 md:w-11/12 my-20'>
                        <h3 className='text-2xl md:text-4xl lg:text-6xl w-1/3'>Offices</h3>
                        <div className='w-2/3'>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='w-96'>
                                    <Image src="/location_1.png" width="300" height="300" alt="" className='w-full' />
                                    <div className='space-y-2 text-lg'>
                                        <h3 className='text-xl font-bold mt-5'>Madrid</h3>
                                        <p>Calle Alcalá, 54 – 1º dcha</p>
                                        <p>28014 Madrid</p>
                                        <p>+34 91 110 8697</p>
                                    </div>
                                </div>

                                <div className='w-96'>
                                    <Image src="/location_2.png" width="300" height="300" alt="" className='w-full' />
                                    <h3 className='text-xl font-bold mt-5'>London</h3>
                                </div>

                                <div className='w-96'>
                                    <Image src="/location_3.png" width="300" height="300" alt="" className='w-full' />
                                    <div className='space-y-2 text-lg'>
                                        <h3 className='text-xl font-bold mt-5'>CDMX</h3>
                                        <p>Calle Montes Urales 424,</p>
                                        <p>Lomas de Chapultepec,</p>
                                        <p>CDMX, Mexico</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;