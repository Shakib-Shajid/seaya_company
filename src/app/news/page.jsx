import Image from "next/image";

const page = () => {
    return (
        <div className="w-[80%] mx-auto md:w-full">
            <section className='md:p-24 mt-20 md:mt-0 lg:mt-20 ml-2 md:ml-0'>
                <h3 className='text-3xl md:text-4xl lg:text-6xl'>Newsroom</h3>
            </section>
            <section className='md:pt-0 md:p-24 mt-20 md:mt-0 ml-2 md:ml-0'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* 1st */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_1.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">23/07/2024</p>
                            <h2 className="text-start text-xl">Seaya Ventures Invests $9M in PassionFruit, a Platform for Independent Work</h2>
                            <p className="text-[#6e7070]">London, UK, July 23rd, 2024 Passionfruit, a platform that empowers businesses to grow via collaboration with independent workers</p>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_2.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">17/07/2024</p>
                            <h2 className="text-start text-xl">Quatt Secures €25 Million in Growth Funding led by Blue Earth Capital and Seaya Andromeda</h2>
                            <p className="text-[#6e7070]">Amsterdam, July 17th, 2024 Quatt, an Amsterdam-based scale-up specializing in smart heat pumps, today announces €25 million in a growth equity funding round led</p>
                        </div>
                    </div>
                    
                    {/* 3rd */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_3.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">10/07/2024</p>
                            <h2 className="text-start text-xl">Seaya Ventures invests €5 million in Shalion to propel its international expansion</h2>
                            <p className="text-[#6e7070]">Madrid, July 10th Shalion, the Big Data platform that provides brands and CPGs with real-time eCommerce Intelligence and analytics.</p>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_1.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">23/07/2024</p>
                            <h2 className="text-start text-xl">Seaya Ventures Invests $9M in PassionFruit, a Platform for Independent Work</h2>
                            <p className="text-[#6e7070]">London, UK, July 23rd, 2024 Passionfruit, a platform that empowers businesses to grow via collaboration with independent workers</p>
                        </div>
                    </div>

                    {/* 5th */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_2.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">17/07/2024</p>
                            <h2 className="text-start text-xl">Quatt Secures €25 Million in Growth Funding led by Blue Earth Capital and Seaya Andromeda</h2>
                            <p className="text-[#6e7070]">Amsterdam, July 17th, 2024 Quatt, an Amsterdam-based scale-up specializing in smart heat pumps, today announces €25 million in a growth equity funding round led</p>
                        </div>
                    </div>
                    
                    {/* 6th */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_3.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">10/07/2024</p>
                            <h2 className="text-start text-xl">Seaya Ventures invests €5 million in Shalion to propel its international expansion</h2>
                            <p className="text-[#6e7070]">Madrid, July 10th Shalion, the Big Data platform that provides brands and CPGs with real-time eCommerce Intelligence and analytics.</p>
                        </div>
                    </div>

                    {/* 7th */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_1.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">23/07/2024</p>
                            <h2 className="text-start text-xl">Seaya Ventures Invests $9M in PassionFruit, a Platform for Independent Work</h2>
                            <p className="text-[#6e7070]">London, UK, July 23rd, 2024 Passionfruit, a platform that empowers businesses to grow via collaboration with independent workers</p>
                        </div>
                    </div>

                    {/* 8th */}
                    <div className="card bg-base-100 w-full border rounded-none">
                        <figure>
                            <Image
                                src="/news_2.png"
                                width="300"
                                height="300"
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10 py-10 lg:px-20 lg:py-20">
                            <p className="text-[#6e7070]">17/07/2024</p>
                            <h2 className="text-start text-xl">Quatt Secures €25 Million in Growth Funding led by Blue Earth Capital and Seaya Andromeda</h2>
                            <p className="text-[#6e7070]">Amsterdam, July 17th, 2024 Quatt, an Amsterdam-based scale-up specializing in smart heat pumps, today announces €25 million in a growth equity funding round led</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default page;