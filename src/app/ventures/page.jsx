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
                        className='w-full h-[500px] lg:h-screen object-cover'
                    ></video>

                <div className='absolute top-16 md:top-36 left-4 md:left-24'>
                    <Image src="/logo_1.webp" width="200" height="200" alt="" className='h-20 w-24 md:h-28 md:w-36 lg:h-40 lg:w-52'/>
                    <p className='text-2xl md:text-3xl lg:text-5xl text-white lg:w-2/3 mt-7 lg:mt-24 leading-loose lg:leading-tight'>Seaya Ventures is a technology-first fund investing in outstanding and mission driven founders of European companies.</p>
                </div>
            </section>

            <section className='p-4 md:p-24'>
                <p className='text-2xl lg:w-2/3 mb-5 lg:mb-20'>We are convinced that companies with a long-term mission provide better financial returns, attract top talent and are more resilient in the face of adversity. We look for impact-driven leaders with high standards seeking out both prosperity and purpose; long-term thinkers focused on responsible scaling, who are solving real problems, redefining industries, and promoting sustainable development.</p>
                <Image src="/water.webp" width="300" height="300" alt="" className='w-full' />
            </section>

            <section className='bg-[#5CA5D8] text-white w-[92%] mx-auto md:mx-0 md:w-full pb-10'>
                <div className='p-1 md:p-24'>
                    <hr className='border-white mb-10' />
                    <div className='flex flex-col lg:flex-row gap-5 w-full'>
                        <h3 className='text-xl lg:text-5xl font-bold w-2/6'>Details</h3>

                        <div className='w-full'> {/* Set this container to full width */}
                            <div className="overflow-x-auto">
                                <table className="table w-full lg:w-2/3 text-lg lg:text-2xl"> {/* Set the table to full width */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Stage</td>
                                            <td className='p-1 lg:p-4'>Pre-series A / Series A / Series B</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Initial ticket</td>
                                            <td className='p-1 lg:p-4'>€2-7 million</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Fund size</td>
                                            <td className='p-1 lg:p-4'>€165 million</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Focus</td>
                                            <td className='p-1 lg:p-4'>Disruptive technology</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Coverage</td>
                                            <td className='p-1 lg:p-4'>Europe</td>
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
                    <h3 className='text-xl md:text-3xl p-10'>Seaya Ventures III FCR, FCRE</h3>
                    <p className='text-base underline py-10 lg:my-20'><Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/09/KIIDPRIIPSSeayaVenturesIIIFCRFCREv20211662103243.pdf">Legal Documents: KIID PRIIPS</Link></p>
                </div>

            </section>

        </div>
    );
};

export default page;

