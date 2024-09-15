import Image from 'next/image';
import Link from 'next/link';
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

            <section className='bg-[#5CA5D8] text-white'>
                <div className='p-24'>
                    <hr className='border-white mb-10' />
                    <div className='flex gap-5 w-full'>
                        <h3 className='text-5xl font-bold w-2/6'>Details</h3>

                        <div className='w-full'> {/* Set this container to full width */}
                            <div className="overflow-x-auto">
                                <table className="table w-2/3 text-2xl"> {/* Set the table to full width */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-white'>
                                            <td className='p-4'>Stage</td>
                                            <td className='p-4'>Pre-series A / Series A / Series B</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-white'>
                                            <td className='p-4'>Initial ticket</td>
                                            <td className='p-4'>€2-7 million</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className='border-white'>
                                            <td className='p-4'>Fund size</td>
                                            <td className='p-4'>€165 million</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr className='border-white'>
                                            <td className='p-4'>Focus</td>
                                            <td className='p-4'>Disruptive technology</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr className='border-white'>
                                            <td className='p-4'>Coverage</td>
                                            <td className='p-4'>Europe</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#EBEBEB]'>
                <div className='p-24 text-center'>
                    <h3 className='text-3xl'>Seaya Ventures III FCR, FCRE</h3>
                    <p className='text-xl underline my-20'><Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/09/KIIDPRIIPSSeayaVenturesIIIFCRFCREv20211662103243.pdf">Legal Documents: KIID PRIIPS</Link></p>
                </div>

            </section>

        </div>
    );
};

export default page;

