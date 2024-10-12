import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Funds = () => {
    return (
        <div className='w-[80%] md:w-11/12 mx-auto font-hankenGrotesk'>
            <hr className='mt-14 md:mt-32 lg:mt-40 border-gray-400 w-11/12 mx-auto md:w-full' />


            <h2 className='text-3xl md:text-5xl w-[92%] mx-auto md:w-full font-bold my-3'>Funds</h2>
            <p className='text-xl lg:text-5xl font-normal w-[92%] md:w-10/12 lg:w-3/4 mx-auto'>
                We accelerate growth by working with founders to enhance their strategic vision, putting an international platform at their disposal:
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 my-10 gap-5 w-full lg:w-3/4 mx-auto'>
                {/* 1st card */}
                <Link href="/ventures">
                    <div className="card w-[92%] md:w-10/12 lg:w-full h-[26rem] relative flex flex-col justify-between mx-auto lg:mx-0 ">
                        {/* Background image with opacity */}
                        <div className="absolute inset-0 bg-cover bg-no-repeat " style={{
                            backgroundImage: "url('/SEA_Apartado_03.webp')"
                        }}></div>

                        {/* Semi-transparent overlay for text clarity */}
                        <div className="absolute inset-0 bg-black opacity-40"></div>

                        {/* Content of the card */}
                        <div className="relative z-10 flex flex-col h-full justify-between mx-auto lg:mx-0">
                            <figure className="px-10 pt-10">
                                <Image
                                    src="/SEA_Logo_03.webp"
                                    alt="Shoes"
                                    width="100"
                                    height="100"
                                    className="rounded-xl bg-transparent" />
                            </figure>
                            <div className="text-white card-body items-center text-center">
                                <p>Seaya Ventures is a technology-first fund investing in outstanding and mission-driven founders of European companies.</p>
                            </div>
                            <div className="card-actions justify-center pb-5">
                                <button className="btn bg-transparent text-white">More Info</button>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* 2nd card */}
                <Link href="/andromeda">
                    <div className="card w-[92%] md:w-10/12 lg:w-full h-[26rem] relative flex flex-col justify-between mx-auto lg:mx-0">
                        {/* Background image with opacity */}
                        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
                            backgroundImage: "url('/SEA_Apartado_02.webp')"
                        }}></div>

                        {/* Semi-transparent overlay for text clarity */}
                        <div className="absolute inset-0 bg-black opacity-40"></div>

                        {/* Content of the card */}
                        <div className="relative z-10 flex flex-col h-full justify-between mx-auto lg:mx-0">
                            <figure className="px-10 pt-10">
                                <Image
                                    src="/SEA_Logo_02.webp"
                                    alt="Shoes"
                                    width="100"
                                    height="100"
                                    className="rounded-xl bg-transparent" />
                            </figure>
                            <div className="text-white card-body items-center text-center">
                                <p>Seaya Andromeda is a sustainability fund addressing the global climate challenges through technology.</p>
                            </div>
                            <div className="card-actions justify-center pb-5">
                                <button className="btn bg-transparent text-white">More Info</button>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* 3rd card */}
                <Link href="/cathay-latam">
                    <div className="card w-[92%] md:w-10/12 lg:w-full h-[26rem] relative flex flex-col justify-between  mx-auto lg:mx-0">
                        {/* Background image with opacity */}
                        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
                            backgroundImage: "url('/SEA_Apartado_01.webp')"
                        }}></div>

                        {/* Semi-transparent overlay for text clarity */}
                        <div className="absolute inset-0 bg-black opacity-40"></div>

                        {/* Content of the card */}
                        <div className="relative z-10 flex flex-col h-full justify-between  mx-auto lg:mx-0">
                            <figure className="px-10 pt-10">
                                <Image
                                    src="/SEA_Logo_01.webp"
                                    alt="Shoes"
                                    width="100"
                                    height="100"
                                    className="rounded-xl bg-transparent" />
                            </figure>
                            <div className="text-white card-body items-center text-center">
                                <p>Seaya Cathay Latam is a multi-sector fund for startups redefining industry and society across Latin America.</p>
                            </div>
                            <div className="card-actions justify-center pb-5">
                                <button className="btn bg-transparent text-white">More Info</button>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Funds;
