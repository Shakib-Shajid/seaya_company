import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='p-24'>
                <h3 className='text-6xl '>Our sustainability <br /> commitment</h3>
                <p className='text-xl w-2/4 my-2 space-y-3'>Since we started investing in 2013, we have backed founders and tech companies that have a mission that goes beyond financials. On top of making the world a better place, these companies are more resilient, attract better talent, and provide a better financial return for investors.</p>
                <div className='space-y-4 mt-3'>
                    <p className='flex gap-1'><span className='text-xl'>&minus;</span> Seaya 2023 ESG & Impact Report</p>
                    <p className='flex gap-1'><span className='text-xl'>&minus;</span> Seaya 2022 ESG & Impact Report</p>
                </div>
            </section>

            <section className='bg-[#97D4CB] max-w-full'>
                <div className='pl-24 pt-24'>
                    <hr className='border mb-5 border-gray-400' />
                    <h3 className='text-6xl'>Seaya Andromeda</h3>
                    <p className='text-xl w-2/4 my-10 space-y-3'>Seaya’s sustainability commitment has recently entered a new chapter with the launch of Seaya Andromeda, an Article 9 €300M venture capital fund that will promote a sustainable and healthy society by reducing waste and pollution, through investments in top European tech-driven companies focusing on GreenTech, Circular Economy and AgriTech & Sustainable Food Value Chain
                        Find out more here</p>

                    <p>&minus;Find out more here</p>
                </div>
            </section>


            <section className='bg-[#97D4CB] max-w-full'>
                <div className='pl-24 pt-24'>
                    <hr className='border mb-5 border-gray-400' />
                    <h3 className='text-6xl my-10'>Sustainability Strategy</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4'>

                        {/* 1st */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/impact_1.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Founders</h2>
                                <p className='text-base'>We look for mission driven founders and teams that share our values, with high standards and looking both for prosperity and purpose.</p>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/impact_2.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Trends & Sectors</h2>
                                <p className='text-base'>Solving real problems in sectors with high social and environmental impact like: Mobility, GreenTech, Healthcare, Circular Economy, AgriTech & Sustainable Food Value Chain, Decarbonization, Fintech, Proptech, Industry Tech and Content, among others.</p>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/impact_3.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Our Process</h2>
                                <p className='text-base'>Our investment process follows ESG best practices which allow us to maximize both financial returns and social and environmental impacts.</p>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/impact_1.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">A Measurable Impact</h2>
                                <p className='text-base'>In addition to top quartile returns, we have measurable outcomes in social inclusion, job creation and reduction of environmental footprint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#363A3A] h-screen'>
                <div className='pl-24 pt-24'>
                    <hr className='border mb-5 border-gray-400 w-11/12' />
                    <h3 className='text-6xl my-10 text-white'>Responsible Investment</h3>
                    <div className='flex gap-4 text-white'>
                        <p className='w-2/5 text-2xl space-y-5'>We believe in companies working with sustainable behaviors, striving to make the world a better place and creating long-term value for society. That is why integrating responsible investment policies in our processes came so naturally.</p>

                        <div className='space-y-3'>
                            <p>&minus; Read more about our sustainable investment policy</p>
                            <p>&minus; General disclosure obligations at manager level</p>
                            <p>&minus; Seaya III disclosures</p>
                            <p>&minus; Seaya Andromeda disclosures</p>
                            <p>&minus; Seaya Principal Adverse Impact indicators</p>
                        </div>
                    </div>

                    <div className='flex gap-16 my-20 items-center w-2/3'>
                        <Image src="/icon_3.png" width="150" height="100" alt="" />
                        <Image src="/icon_2.png" width="100" height="100" alt="" />
                        <Image src="/icon_1.png" width="150" height="100" alt="" />
                    </div>
                </div>

            </section>

            <section className='h-screen'>
                <div className='pl-24 pt-24'>
                    <hr className='border mb-5 border-gray-400 w-11/12' />
                    <h3 className='text-6xl my-10'>Selected Case Studies</h3>

                    <div className='grid grid-cols-2 lg:grid-cols-4'>

                        {/* 1st */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/client_2.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <p className='text-base text-[#363A3A]'>Bringing societal impact to markets</p>
                                <h2 className="card-title font-normal">Clarity AI</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/client_3.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <p className='text-base text-[#363A3A]'>Smart charging and energy
                                    management solutions</p>
                                <h2 className="card-title font-normal">Wallbox</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/client_4.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <p className='text-base text-[#363A3A]'>Enabling Global <br />
                                    Sustainable Farming</p>
                                <h2 className="card-title font-normal">Biome Makers</h2>
                                <p className='text-xl'>&rarr;</p>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className="card card-compact bg-transparent w-80">
                            <figure>
                                <Image src="/client_1.png" width="300" height="300" alt="" />
                            </figure>
                            <div className="card-body">
                                <p className='text-base text-[#363A3A]'>Transform Electronic Medical Records into deep Real-World Evidence</p>
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