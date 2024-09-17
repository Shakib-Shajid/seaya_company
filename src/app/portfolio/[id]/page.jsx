import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='md:p-10 lg:p-24'>
            <section className='lg:flex gap-5 mt-16 lg:mt-10'>
                <div className='lg:w-[50%]'>
                    <Image src="/glovo.webp" width="300" height="300" alt="" className='w-[60%] md:w-[30%] pl-4 mb-10' />
                    <Image src="/glovo_founder.webp" width="300" height="300" alt="" className='mx-auto w-[94%] rounded-xl' />
                </div>
                <div className='w-[94%] mx-auto lg:w-[50%] flex items-center'>
                    <div className='space-y-5 mt-20'>
                        <h2 className='text-3xl lg:text-5xl font-bold'>Glovo</h2>
                        <p className='text-xl lg:text-3xl text-[#BFBFBF] font-normal lg:font-bold'>Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything they need in a short period of time.</p>
                    </div>
                </div>
            </section>

            <section className='lg:flex lg:gap-20 w-[94%] mx-auto my-10'>
                <div className="overflow-x-auto lg:w-[45%]">
                    <table className="table">

                        <tbody className='text-base'>
                            {/* row 1 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>hq</td>
                                <td className='pl-10 md:pl-20'>Barcelona</td>

                            </tr>
                            {/* row 2 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>born in</td>
                                <td className='pl-10 md:pl-20'>Spain</td>

                            </tr>
                            {/* row 3 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>founders</td>
                                <td className='pl-10 md:pl-20'>Oscar Pierre and Sacha Michaud Swyre</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto lg:w-[45%]">
                    <table className="table">

                        <tbody className='text-base'>
                            {/* row 1 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>website</td>
                                <td className='pl-16 md:pl-20'>glovoapp.com</td>
                            </tr>
                            {/* row 2 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>sector</td>
                                <td className='pl-16 md:pl-20'>On-demand delivery</td>

                            </tr>
                            {/* row 3 */}
                            <tr className='border-t-2 '>
                                <td className='uppercase'>status</td>
                                <td className='pl-16 md:pl-20'>Axquire by delivery Hero (DE: DHER)</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default page;