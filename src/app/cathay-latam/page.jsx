import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='relative'>
                <video
                    src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Latam_NewVideo_low.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className='w-full h-[500px] lg:h-screen object-cover'
                ></video>

                <div className='absolute top-16 md:top-36 left-4 md:left-24'>
                    <div className='w-[80%] mx-auto md:w-full'>
                        <Image src="/logo_2.webp" width="200" height="200" alt="" className='h-20 w-24 md:h-28 md:w-36 lg:h-36 lg:w-52' />
                    </div>
                    <p className='text-2xl md:text-3xl lg:text-5xl text-white w-[80%] mx-auto md:w-full lg:w-2/3 mt-7 lg:mt-24 leading-loose lg:leading-tight'>Seaya Cathay Latam is a multi-sector fund for startups redefining industry and society across Latin America.</p>
                </div>
            </section>

            <section className='p-4 md:p-24 w-[80%] mx-auto md:w-full'>
                <p className='text-2xl lg:w-2/3 mb-5 lg:mb-20'>Latam is approaching its tipping point in tech development, giving startups the opportunity to adapt innovation to local market needs and build inclusive, digital-first industries from the ground up. <br /><br />
                    Based out of Mexico City, this fund, created in partnership with Cathay Innovation, combines local expertise with a global platform under a single fund. We want to be the direct link for local, purpose-driven entrepreneurs to the worldwide resources needed to build and sale resilient businesses leading markets on the regional or global stage.</p>
                <Image src="/hill.webp" width="300" height="300" alt="" className='w-full' />
            </section>

            <section className='bg-[#D85D4A] text-white w-full mx-auto md:mx-0 pb-10'>
                <div className='p-1 md:p-24'>
                    <hr className='border-white mb-5 md:mb-10 w-[80%] mx-auto md:w-full mt-10 md:mt-0' />
                    <div className='flex flex-col lg:flex-row gap-5 w-[80%] mx-auto md:w-full'>
                        <h3 className='text-xl lg:text-5xl font-bold w-2/6'>Details</h3>

                        <div className='w-full '> {/* Set this container to full width */}
                            <div className="overflow-x-auto">
                                <table className="table w-full lg:w-2/3 text-lg lg:text-2xl"> {/* Set the table to full width */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Stage</td>
                                            <td className='pl-5 md:pl-36 lg:pl-44 p-1 lg:p-4'>Series A </td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Initial ticket</td>
                                            <td className='pl-5 md:pl-36 lg:pl-44 p-1 lg:p-4'>€2-8 million</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Focus</td>
                                            <td className='pl-5 md:pl-36 lg:pl-44 p-1 lg:p-4'>Multi-sector</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Coverage</td>
                                            <td className='pl-5 md:pl-36 lg:pl-44 p-1 lg:p-4'>Latin America</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default page;



