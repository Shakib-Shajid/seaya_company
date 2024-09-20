import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='relative'>
                <video
                    src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Ventures_NewVideo2_low.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className='w-full h-[500px] lg:h-screen object-cover'
                ></video>

                <div className='absolute top-16 md:top-36 left-4 md:left-24 '>
                    <div className='w-[80%] mx-auto md:w-full'>
                        <Image src="/logo_1.webp" width="200" height="200" alt="" className='h-20 w-24 md:h-32 md:w-48 lg:h-40 lg:w-52' />
                    </div>
                    <p className='w-[80%] mx-auto text-2xl md:text-3xl lg:text-5xl text-white md:w-full lg:w-2/3 mt-7 lg:mt-24 leading-loose lg:leading-tight'>Seaya Ventures is a technology-first fund investing in outstanding and mission driven founders of European companies.</p>
                </div>
            </section>

            <section className='p-4 md:p-24 w-[80%] mx-auto md:w-full'>
                <p className='text-2xl lg:w-2/3 mb-5 lg:mb-20'>We are convinced that companies with a long-term mission provide better financial returns, attract top talent and are more resilient in the face of adversity. We look for impact-driven leaders with high standards seeking out both prosperity and purpose; long-term thinkers focused on responsible scaling, who are solving real problems, redefining industries, and promoting sustainable development.</p>
                <Image src="/water.webp" width="300" height="300" alt="" className='w-full' />
            </section>

            <section className='bg-[#5CA5D8] text-white w-full mx-auto md:mx-0 pb-10'>
                <div className='p-1 md:p-24 w-[80%] mx-auto md:w-full'>
                    <hr className='border-white mb-5 md:mb-10 w-[92%] md:w-full mx-auto mt-10 md:mt-0' />
                    <div className='flex flex-col lg:flex-row gap-5  w-[92%] md:w-full mx-auto'>
                        <h3 className='text-xl lg:text-5xl font-bold w-2/6'>Details</h3>

                        <div className='w-full relative lg:-mt-5'> {/* Set this container to full width */}
                            <div className="overflow-x-auto">
                                <table className="table w-full lg:w-2/3 text-base md:text-xl lg:text-2xl"> {/* Set the table to full width */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Stage</td>
                                            <td className='pl-5 md:pl-36 lg:pl-56 p-1 lg:p-4'>Pre-series A / Series A <br className='visible md:hidden' />/ Series B</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Initial ticket</td>
                                            <td className='pl-5 md:pl-36 lg:pl-56 p-1 lg:p-4'>€2-7 million</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Fund size</td>
                                            <td className='pl-5 md:pl-36 lg:pl-56 p-1 lg:p-4'>€165 million</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Focus</td>
                                            <td className='pl-5 md:pl-36 lg:pl-56 p-1 lg:p-4'>Disruptive technology</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Coverage</td>
                                            <td className='pl-5 md:pl-36 lg:pl-56 p-1 lg:p-4'>Europe</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#EBEBEB]'>
                <div className='md:p-10 lg:p-24 text-center'>
                    <h3 className='text-2xl md:text-3xl p-5 md:p-10'>Seaya Ventures III FCR, FCRE</h3>
                    <p className='text-xl py-10 lg:py-0'>
                        <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/09/KIIDPRIIPSSeayaVenturesIIIFCRFCREv20211662103243.pdf" target="_blank" className="relative group text-xl">
                            {/* Static Text */}
                            <span className="relative">
                                Legal Documents: KIID PRIIPS

                                {/* Underline that animates when hovered */}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-black transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                ></span>
                            </span>
                        </Link>
                    </p>


                </div>

            </section>

        </div>
    );
};

export default page;

