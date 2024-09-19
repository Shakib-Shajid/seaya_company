import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-[80%] mx-auto md:w-full'>
            <section className='md:py-24 mt-20 md:mt-24 ml-2 md:ml-0'>
                <div className='w-full md:w-10/12 mx-auto'>
                    <h3 className='text-3xl md:text-4xl lg:text-6xl'>Portfolio</h3>
                    <p className='text-xl lg:text-3xl lg:w-2/4 my-2 lg:my-5 space-y-3 mt-10'>We back outstanding and mission-driven founders of European and Latin American tech companies with global ambition.</p>
                </div>

            </section>

            <section className='w-full md:w-11/12 mx-auto'>
                <div className='pt-24 w-full md:w-10/12 lg:w-11/12 mx-auto'>
                    <hr className='border-gray-400 mx-auto' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:w-11/12 mx-auto my-10">
                    {/* ............................................................................ */}
                    {/* 1st card */}
                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-10/12 flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link>


                    {/* 2nd card */}

                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-10/12 flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div>
                    </Link>


                    {/* 3rd card */}


                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-10/12 flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div>
                    </Link>

                </div >
            </section >






            <section className='w-full md:w-11/12 mx-auto '>

                <div className='w-full md:w-10/12 lg:w-11/12 mx-auto'>
                    <hr className='border-gray-400 mx-auto' />
                </div>

                <div>

                    <ul className='flex flex-wrap gap-5 justify-center text-[#9faaaa] my-10 w-full'>
                        <li className='hover:text-black font-bold'><Link href="/">All</Link></li>
                        <li className='hover:text-black font-bold'><Link href="/">Seaya Andromeda</Link></li>
                        <li className='hover:text-black font-bold'><Link href="/">Seaya Cathay LatamSeaya</Link></li>
                        <li className='hover:text-black font-bold'><Link href="/">Seaya Ventures</Link></li>
                    </ul>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10 w-full md:w-11/12 ">
                    {/* ............................................................................ */}
                    {/* 1st card */}
                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link>


                    {/* 2nd card */}

                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div>
                    </Link>


                    {/* 3rd card */}


                    <Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >

                    {/* 1st card */}
                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_4.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Glovo</h2>
                                <p className="my-2">Glovo flies to deliver to you whatever you want from your city</p>
                            </div>
                        </div>

                    </Link >


                    {/* 2nd card */}

                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_5.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Wallbox</h2>
                                <p className="my-2">Smart electric car charging stations</p>

                            </div>
                        </div >
                    </Link >


                    {/* 3rd card */}


                    < Link href={`/portfolio/abc`}>
                        <div className="card w-full md:w-10/12 lg:w-full flex flex-col mx-auto lg:mx-0 relative group rounded-none">
                            {/* Container for the image */}
                            <div className="relative w-full h-72 transition-shadow duration-300 hover:shadow-2xl">
                                <Image
                                    src="/group_6.webp"
                                    alt="Shoes"
                                    width="300"
                                    height="300"
                                    className="absolute object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 rounded-lg"
                                />
                            </div>

                            <div className="py-4 flex flex-col">
                                <h2 className="card-title text-xl font-bold">Cabify</h2>
                                <p className="my-2">Transforming mobility in Iberia and LatAm</p>

                            </div>
                        </div >
                    </Link >


                </div >
            </section >

        </div >
    );
};

export default page;