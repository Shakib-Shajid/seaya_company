import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoDash } from "react-icons/go";


const page = () => {
    return (
        <div className=''>
            <section className='md:p-24 mt-20 mb-20 md:mb-5 md:mt-0 w-[80%] mx-auto md:w-full'>
                <h3 className='text-3xl md:text-4xl lg:text-6xl'>Our sustainability <br className='visible md:hidden lg:block' /> commitment</h3>
                <p className='text-2xl lg:w-2/4 my-2 space-y-3'>Since we started investing in 2013, we have backed founders and tech companies that have a mission that goes beyond financials. On top of making the world a better place, these companies are more resilient, attract better talent, and provide a better financial return for investors.</p>
                <div className='space-y-4 mt-3'>
                    <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2024/07/Seaya_ESG-and-Impact-Report-2023.pdf" target="_blank"><p className='flex gap-1 my-4'><span className='text-xl'><GoDash /></span> Seaya 2023 ESG & Impact Report</p></Link>
                    <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/06/Seaya-2022-ESG-Impact-Report.pdf" target="_blank"><p className='flex gap-1 my-4'><span className='text-xl'><GoDash /></span> Seaya 2022 ESG & Impact Report</p></Link>
                </div>
            </section>

            <section className='bg-[#97D4CB]'>
                <div className='md:px-24 md:py-16 w-[80%] mx-auto md:w-full'>
                    <div className='pt-8 pb-2'>
                        <hr className='border border-gray-400 w-full' />
                    </div>
                    <h3 className='mt-5 mb-10 text-2xl md:text-4xl lg:text-6xl'>Seaya Andromeda</h3>
                    <p className='text-xl lg:w-2/4 pr-0 md:pr-7 lg:pr-0 my-8 space-y-3'>Seaya’s sustainability commitment has recently entered a new chapter with the launch of Seaya Andromeda, an Article 9 €300M venture capital fund that will promote a sustainable and healthy society by reducing waste and pollution, through investments in top European tech-driven companies focusing on GreenTech, Circular Economy and AgriTech & Sustainable Food Value Chain
                        Find out more here</p>
                    <div className='flex items-center'>
                        <GoDash className='inline-block' />
                        <p>Find out more here</p>
                    </div>
                </div>
            </section>


            <section className='bg-[#97D4CB]'>
                <div className='md:px-24 pb-16 w-[80%] mx-auto md:w-full'>
                    <div className='pt-8 pb-2 w-full'>
                        <hr className='border border-gray-400' />
                    </div>
                    <h3 className='mt-5 mb-10 text-2xl md:text-4xl lg:text-6xl'>Sustainability Strategy</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                        {/* 1st */}
                        <div className="w-full">
                            <figure>
                                <Image src="/impact_1.png" width="300" height="300" alt="" className='w-full' />
                            </figure>
                            <div className="">
                                <h2 className="card-title mt-7 mb-3">Founders</h2>
                                <p className='text-base'>We look for mission driven founders and teams that share our values, with high standards and looking both for prosperity and purpose.</p>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className="w-full">
                            <figure>
                                <Image src="/impact_2.png" width="300" height="300" alt="" className='w-full' />
                            </figure>
                            <div className="">
                                <h2 className="card-title mt-7 mb-3">Trends & Sectors</h2>
                                <p className='text-base'>Solving real problems in sectors with high social and environmental impact like: Mobility, GreenTech, Healthcare, Circular Economy, AgriTech & Sustainable Food Value Chain, Decarbonization, Fintech, Proptech, Industry Tech and Content, among others.</p>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className="w-full">
                            <figure>
                                <Image src="/impact_3.png" width="300" height="300" alt="" className='w-full' />
                            </figure>
                            <div className="">
                                <h2 className="card-title mt-7 mb-3">Our Process</h2>
                                <p className='text-base'>Our investment process follows ESG best practices which allow us to maximize both financial returns and social and environmental impacts.</p>
                            </div>
                        </div>
                        {/* 4th */}
                        <div className="w-full">
                            <figure>
                                <Image src="/impact_1.png" width="300" height="300" alt="" className='w-full' />
                            </figure>
                            <div className="">
                                <h2 className="card-title mt-7 mb-3">A Measurable Impact</h2>
                                <p className='text-base'>In addition to top quartile returns, we have measurable outcomes in social inclusion, job creation and reduction of environmental footprint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#363A3A]'>
                <div className='md:px-24 w-[80%] mx-auto md:w-full'>
                    <div className='pt-8 pb-2 w-full'>
                        <hr className='border border-gray-400' />
                    </div>
                    <h3 className='text-2xl md:text-4xl lg:text-6xl my-3 text-white'>Responsible Investment</h3>
                    <div className='flex flex-col lg:flex-row gap-4 text-white'>
                        <p className='w-full lg:w-2/5 text-2xl space-y-5'>We believe in companies working with sustainable behaviors, striving to make the world a better place and creating long-term value for society. That is why integrating responsible investment policies in our processes came so naturally.</p>

                        <div className='space-y-3'>
                            <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/03/Seaya-VC_Responsible-Investment-Policy_vFeb2023-4.pdf" target="_blank">
                                <div className='flex gap-2 items-center'>
                                    <GoDash className='text-3xl' />
                                    <p>Read more about our sustainable investment policy</p>
                                </div>
                            </Link>

                            <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/07/GENERAL-DISCLOSURE-OBLIGATIONS-AT-MANAGER-LEVEL-SEAYA-JUNE.pdf" target="_blank">
                                <div className='flex gap-2 items-center'>
                                    <GoDash className='text-3xl' />
                                    <p>General disclosure obligations at manager level</p>
                                </div>
                            </Link>

                            <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/07/Seaya-III-website-disclosures-EN-20230629.pdf" target="_blank">
                                <div className='flex items-center'>
                                    <GoDash className='text-3xl mr-1 md:mr-2' />
                                    <p>Seaya III disclosures</p>
                                </div>
                            </Link>

                            <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/07/SEAYA-ANDROMEDA-website-disclosures-EN-20230629.pdf" target="_blank">
                                <div className='flex gap-2 items-center'>
                                    <GoDash className='text-3xl' />
                                    <p className='-ml-1 md:ml-0'>Seaya Andromeda disclosures</p>
                                </div>
                            </Link>

                            <Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2024/07/PIAS-Seaya-2023.pdf" target="_blank">
                                <div className='flex gap-2 items-center'>
                                    <GoDash className='text-3xl' />
                                    <p>Seaya Principal Adverse Impact indicators</p>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className='flex md:flex-row flex-wrap md:flex-nowrap justify-center md:justify-start md:gap-16 py-20 items-center md:w-2/3'>
                        <Image src="/icon_3.png" width="150" height="100" alt="" />
                        <Image src="/icon_2.png" width="100" height="100" alt="" />
                        <Image src="/icon_1.png" width="150" height="100" alt="" />
                    </div>
                </div>

            </section>

            <section className='h-full'>
            <div className='md:px-24 w-[80%] mx-auto md:w-full'>
                    <div className='pt-16 pb-2 w-full'>
                        <hr className='border border-gray-400' />
                    </div>
                    <h3 className='text-2xl md:text-4xl lg:text-6xl my-7'>Selected Case Studies</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                        {/* 1st */}

                        <div className="w-full mb-3">
                            <figure>
                                <Image src="/client_2.png" width="300" height="300" alt="" className='w-full md:w-80' />
                            </figure>
                            <div>
                                <p className='text-base t mt-7 mb-3 text-[#363A3A]'>Bringing societal impact to markets and energy</p>
                                <h2 className="card-title font-normal">Clarity AI</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className="w-full mb-3">
                            <figure>
                                <Image src="/client_3.png" width="300" height="300" alt="" className='w-full md:w-80' />
                            </figure>
                            <div>
                                <p className='text-base t mt-7 mb-3 text-[#363A3A]'>Smart charging and energy
                                    management solutions</p>
                                <h2 className="card-title font-normal">Wallbox</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>


                        {/* 3rd */}

                        <div className="w-full mb-3">
                            <figure>
                                <Image src="/client_2.png" width="300" height="300" alt="" className='w-full md:w-80' />
                            </figure>
                            <div>
                                <p className='text-base t mt-7 mb-3 text-[#363A3A]'>Enabling Global <br />
                                    Sustainable Farming</p>
                                <h2 className="card-title font-normal">Biome Makers</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>

                        {/* 4th */}

                        <div className="w-full mb-3">
                            <figure>
                                <Image src="/client_3.png" width="300" height="300" alt="" className='w-full md:w-80' />
                            </figure>
                            <div>
                                <p className='text-base t mt-7 mb-3 text-[#363A3A]'>Transform Electronic Medical Records into deep Real-World Evidence</p>
                                <h2 className="card-title font-normal">Savana</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;