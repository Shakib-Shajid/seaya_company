import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className='relative'>
                <video
                    src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Andromeda_NewVideo2.mp4"
                    loop
                    muted
                    autoPlay
                    className='w-full h-[500px] lg:h-screen object-cover'
                ></video>

                <div className='absolute top-16 md:top-36 left-4 md:left-24'>
                    <Image src="/logo_3.webp" width="200" height="200" alt="" className='h-20 w-24 md:h-28 md:w-36 lg:h-36 lg:w-52' />
                    <p className='text-2xl md:text-3xl lg:text-5xl text-white lg:w-2/3 mt-7 lg:mt-24 leading-loose lg:leading-tight'>Seaya Andromeda is a ClimateTech fund addressing the global climate challenges through technology.</p>
                </div>
            </section>

            <section className='p-4 md:p-24'>
                <p className='text-2xl lg:w-2/3 mb-5 lg:mb-20'>The climate crisis is one of the greatest challenges we have ever faced, but it is also an opportunity to reshape the world we want to live in. Seaya Andromeda is an Article 9 sustainability-focused fund on a mission to address global sustainability challenges and deliver profits with purpose through investments in technology-driven companies with measurable sustainability impact.</p>
                <Image src="/forest.webp" width="300" height="300" alt="" className='w-full' />
            </section>

            <section className='bg-[#25A897] text-white w-[92%] mx-auto md:mx-0 md:w-full pb-10'>
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
                                            <td className='p-1 lg:p-4 lg:w-1/3'>Stage</td>
                                            <td className='p-1 lg:p-4'>Series A / Series B / Series C+</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4 lg:w-1/3'>Initial ticket</td>
                                            <td className='p-1 lg:p-4'>
                                                €10-40 million</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4 lg:w-1/3'>Fund size</td>
                                            <td className='p-1 lg:p-4'>€300 million</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4 lg:w-1/3'>Focus</td>
                                            <td className='p-1 lg:p-4'>Energy / Decarbonization / Circular Economy / Sustainable Food Value Chain</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr className='border-white'>
                                            <td className='p-1 lg:p-4'>Coverage</td>
                                            <td className='p-1 lg:p-4'>UK & Europe</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='w-full md:w-11/12 mx-auto'>

                    <hr className=" border ml-3 md:ml-0 md:w-full mt-20" />
                    <h2 className='text-3xl md:text-5xl ml-3 md:ml-5 lg:ml-0 md:w-full font-bold my-5'>Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto my-10 ">
                        {/* ............................................................................ */}
                        {/* 1st card */}
                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything.</p>
                            </div>
                        </div>



                        {/* 2nd card */}

                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Wallbox is a leading designer, manufacturer, and distributor of innovative intelligent.</p>

                            </div>
                        </div>


                        {/* 3rd card */}


                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Transforming mobility in Iberia and Latam. Cabify is the leading ride-hailing.</p>

                            </div>
                        </div>

                        {/* 4th card */}


                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything.</p>
                            </div>
                        </div>

                        {/* ............................................................................ */}

                        {/* 2nd card */}

                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Wallbox is a leading designer, manufacturer, and distributor of innovative intelligent.</p>

                            </div>
                        </div>

                        {/* 3rd card */}


                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Transforming mobility in Iberia and Latam. Cabify is the leading ride-hailing.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className='w-full md:w-11/12 mx-auto p-2 lg:p-0'>

                    <hr className=" border ml-3 md:ml-0 md:w-full mt-20" />
                    <h2 className='text-3xl md:text-5xl ml-3 md:ml-0 md:w-full font-bold my-5'>Climate track record</h2>

                    <p className='text-xl lg:w-2/3 mb-5 lg:mb-20'>Over the past decade, we invested in Climate Tech companies driving sustainability solutions and have seen the impact of technology in addressing the world&apos;s most pressing climate challenges. <br /><br />
                    The launch of Seaya Andromeda is a natural progression of Seaya&apos;s continued commitment to sustainability, and is built on our experience as a VC platform. With Seaya Andromeda, we are doubling down on our belief that profit and purpose can and should go hand in hand.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto my-10 ">
                        {/* ............................................................................ */}
                        {/* 1st card */}
                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything.</p>
                            </div>
                        </div>



                        {/* 2nd card */}

                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Wallbox is a leading designer, manufacturer, and distributor of innovative intelligent.</p>

                            </div>
                        </div>


                        {/* 3rd card */}


                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Transforming mobility in Iberia and Latam. Cabify is the leading ride-hailing.</p>

                            </div>
                        </div>

                        {/* 4th card */}


                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything.</p>
                            </div>
                        </div>

                        {/* ............................................................................ */}

                        {/* 2nd card */}

                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Wallbox is a leading designer, manufacturer, and distributor of innovative intelligent.</p>

                            </div>
                        </div>


                        {/* 3rd card */}

                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Transforming mobility in Iberia and Latam. Cabify is the leading ride-hailing.</p>

                            </div>
                        </div>

                        {/* 1st card */}
                        <div className="card w-72 md:w-10/12 lg:w-11/12 flex flex-col mx-auto lg:mx-0 relative group">
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
                                <p className="my-2">Glovo is an on-demand delivery marketplace present in Europe and Latam that allows users to get anything.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-[#EBEBEB]'>
                <div className='md:p-10 lg:p-24 text-center'>
                    <h3 className='text-2xl md:text-3xl p-5 md:p-10'>Seaya Andromeda Sustainable Tech Fund I, FCR.</h3>
                    <p className='text-base md:text-xl underline py-10 lg:py-0'><Link href="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2023/02/20230224_Modelo-PRIIPs_Andromeda_clase-A.pdf" target="_blank">Legal Documents: PRIIPS</Link></p>
                </div>

            </section>

        </div>
    );
};

export default page;





