import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-[80%] mx-auto md:w-full'>
            <section className='md:p-16 mt-20 my-20 md:my-0 md:mt-10 lg:mt-24 ml-2 md:ml-8'>
                <h3 className='text-3xl md:text-4xl lg:text-6xl'>Contact</h3>
            </section>

            <section>
                <div className='md:pl-24 lg:pt-16 ml-2 md:ml-0'>
                    <hr className='border mb-5 border-gray-400 md:w-11/12' />
                    <div className='flex gap-3 flex-col lg:flex-row md:w-11/12 my-10 md:my-5 lg:my-20'>
                        <h3 className='text-3xl md:text-4xl lg:text-6xl w-full md:w-1/3 my-5'>Reach out</h3>
                        <div className='w-full lg:w-2/3'>
                            <div className='flex flex-col lg:flex-row lg:gap-40'>
                                <div>
                                    <p className='text-xl md:text-2xl'>Press inquiries</p>
                                    {/* <p className='text-base'>press@seaya.vc</p> */}
                                    <p className='text-base'>
                                        <Link href="mailto:press@seaya.vc" className="relative group">
                                            {/* Static Text */}
                                            <span className="relative">
                                                press@seaya.vc

                                                {/* Underline that animates when hovered */}
                                                <span
                                                    className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-black transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                                ></span>
                                            </span>
                                        </Link>
                                    </p>
                                </div>

                                <div>
                                    <p className='text-xl md:text-2xl'>Contact us</p>
                                    <p className='text-base'>
                                        <Link href="mailto:info@seaya.vc" className="relative group">
                                            {/* Static Text */}
                                            <span className="relative">
                                                info@seaya.vc

                                                {/* Underline that animates when hovered */}
                                                <span
                                                    className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-black transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                                ></span>
                                            </span>
                                        </Link>
                                    </p>
                                </div>

                                <div>
                                    <p className='text-xl md:text-2xl'>Send your Pitch</p>
                                    <p className='text-base'>
                                        <Link href="#contact" className="relative group">
                                            {/* Static Text */}
                                            <span className="relative">
                                                Click here

                                                {/* Underline that animates when hovered */}
                                                <span
                                                    className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-black transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                                ></span>
                                            </span>
                                        </Link>
                                    </p>

                                </div>
                            </div>
                            <Image src="/reach.webp" width="300" height="300" alt="" className='w-full my-5 lg:my-20' />
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className='md:pl-24 md:pt-12 ml-2 md:ml-0'>
                    <hr className='border mb-5 border-gray-400 md:w-11/12' />
                    <div className='flex flex-col lg:flex-row gap-3 md:w-11/12 my-10 md:my-5 lg:my-20'>
                        <h3 className='text-3xl md:text-4xl lg:text-6xl w-1/3 my-5'>Offices</h3>
                        <div className='lg:w-2/3'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                <Link target="_blank" href="https://www.google.com/maps/place/C.+de+Alcal%C3%A1,+54,+28014+Madrid/data=!4m2!3m1!1s0xd42289b6d799abd:0x3a64fb5ed6169dde?sa=X&ved=2ahUKEwiRsZ2-yoD6AhUSahoKHSHNBh0Q8gF6BAgTEAE">
                                    <div className="w-80 md:w-full lg:w-96 group overflow-hidden">
                                        <Image
                                            src="/location_1.png"
                                            width="300"
                                            height="300"
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                                        />
                                        <div className="space-y-2 text-lg">
                                            {/* Heading */}
                                            <div className="font-bold mt-5">
                                                <span className="relative group text-xl">
                                                    Madrid
                                                    {/* Underline that animates when hovered */}
                                                    <span
                                                        className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"
                                                    ></span>
                                                </span>
                                            </div>
                                            {/* Address Information */}
                                            <p>Calle Alcalá, 54 – 1º dcha</p>
                                            <p>28014 Madrid</p>
                                            <p>+34 91 110 8697</p>
                                        </div>
                                    </div>

                                </Link>

                                <div className='w-80 md:w-full lg:w-96 group overflow-hidden'>
                                    <Image src="/location_2.png" width="300" height="300" alt="" className='h-52 object-cover w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
                                    <div className='font-bold mt-5'>
                                        <span className="relative group text-xl ">
                                            London
                                            {/* Underline that animates when hovered */}
                                            <span
                                                className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left`}
                                            ></span>
                                        </span>
                                    </div>
                                </div>

                                <Link target="_blank" href="https://www.google.com/maps/place/C.+Montes+Urales+424,+Lomas+-+Virreyes,+Lomas+de+Chapultepec,+Miguel+Hidalgo,+11000+Ciudad+de+M%C3%A9xico,+CDMX,+Mexico/data=!4m2!3m1!1s0x85d20149ae280b97:0xa4e0add1deaa7f0e?sa=X&ved=2ahUKEwiO_ue7kIX6AhVrgP0HHSISAgkQ8gF6BAglEAE">
                                    <div className="w-80 md:w-full lg:w-96 group overflow-hidden">
                                        <Image
                                            src="/location_3.png"
                                            width="300"
                                            height="300"
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                                        />
                                        <div className="space-y-2 text-lg">
                                            <div className="font-bold mt-5">
                                                <span className="relative group text-xl">
                                                    CDMX
                                                    {/* Underline that animates when hovered */}
                                                    <span
                                                        className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"
                                                    ></span>
                                                </span>
                                            </div>
                                            <p>Calle Montes Urales 424,</p>
                                            <p>Lomas de Chapultepec,</p>
                                            <p>CDMX, Mexico</p>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='md:pl-24 md:pt-12 ml-2 md:ml-0' id="contact">
                    <hr className='border mb-5 border-gray-400 md:w-11/12' />
                    <div className='flex flex-col lg:flex-row gap-3 md:w-11/12 my-10 md:my-5 lg:my-20'>
                        <h3 className='text-3xl md:text-4xl lg:text-6xl w-1/3 my-5'>Pitch</h3>
                        <div className='lg:w-2/3 border border-gray-400'>
                            <div className='flex justify-center mx-auto overflow-y-scroll h-screen my-5'>
                                <div className='w-8/12'>
                                    <h3 className='text-2xl font-bold mt-10'>Send us your project</h3>
                                    <p>Please note that due to the high volume of submissions we receive, we may not be able to respond individually to every inquiry. Rest assured that each submission will be carefully reviewed by our team.
                                        If your startup aligns with our investment focus and criteria, we will make every effort to reach out for further discussions</p>
                                    {/* form */}
                                    <div className='mb-10'>
                                        <form action="">
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Company Name <span className='text-red-500'>*</span></span>
                                                </div>
                                                <input type="text" className="input input-bordered w-full" />
                                            </label>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Website <span className='text-red-500'>*</span></span>
                                                </div>
                                                <input type="text" className="input input-bordered w-full" />
                                            </label>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>One-liner of the company <span className='text-red-500'>*</span></span>
                                                </div>
                                                <input type="text" className="input input-bordered w-full" />
                                            </label>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Description of the opportunity <span className='text-red-500'>*</span></span>
                                                </div>
                                                <textarea
                                                    className="textarea textarea-bordered textarea-md w-full"></textarea>
                                            </label>

                                            <label className="form-control w-full">
                                                <div className="label block">
                                                    <p>What fund(s) are most relevant to you?<span className='text-red-500'>*</span></p>
                                                    <p className='text-sm text-[#363A3A] mt-2'>You can find information about each fund (investment stages, ticket size, focus areas, etc.) at:</p>
                                                    <Link href="" className='text-sm btn-link'><p>seaya.vc/seaya-ventures/</p></Link>
                                                    <Link href="" className='text-sm btn-link'><p>seaya.vc/seaya-andromeda/</p></Link>
                                                    <Link href="" className='text-sm btn-link'><p>seaya.vc/seaya-cathay-latam/</p></Link>
                                                </div>
                                                <div className='block'>
                                                    <label className='flex items-center my-2 gap-1 cursor-pointer'>
                                                        <input type="checkbox" className="checkbox checkbox-xs" />
                                                        <span>Seaya Ventures</span>
                                                    </label>
                                                    <label className='flex items-center my-2 gap-1 cursor-pointer'>
                                                        <input type="checkbox" className="checkbox checkbox-xs" />
                                                        <span>Seaya Andromeda</span>
                                                    </label>
                                                    <label className='flex items-center my-2 gap-1 cursor-pointer'>
                                                        <input type="checkbox" className="checkbox checkbox-xs" />
                                                        <span>Seaya Cathay Latam</span>
                                                    </label>
                                                </div>

                                            </label>

                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Contact person<span className='text-red-500'>*</span></span>
                                                </div>
                                                <input type="text" className="input input-bordered w-full" />
                                            </label>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Contact email <span className='text-red-500'>*</span></span>
                                                </div>
                                                <input type="text" className="input input-bordered w-full" />
                                            </label>


                                            <label className="form-control w-full">
                                                <div className="label block">
                                                    <p>What fund(s) are most relevant to you?<span className='text-red-500'>*</span></p>
                                                    <p className='text-sm text-[#363A3A] mt-2'>Please note that to successfully submit your project, you are required to add extra material (e.g. a detailed presentation)</p>
                                                </div>
                                                <input type="file" className="file-input file-input-bordered file-input-xs my-2 md:my-0 md:file-input-md w-full max-w-xs" />
                                            </label>

                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span>Additional comments <span className='text-red-500'>*</span></span>
                                                </div>
                                                <textarea
                                                    className="textarea textarea-bordered textarea-md w-full"></textarea>
                                            </label>

                                            <label className="form-control w-full">
                                                <div className="label block">
                                                    <p>Disclaimer <span className='text-red-500'>*</span></p>
                                                    <p className='text-sm text-[#363A3A] mt-2'>The personal data collected through this form will be processed by Seaya Capital Gestión SGEIC, S.A. with an address at C/ Alcalá 54, 28014 Madrid, based on your query and in order to provide you with a response.
                                                        If you wish to exercise your rights of access, rectification, deletion, opposition, portability, limitation of processing, or those recognized by the regulations at any time, you can request it to the Data Protection Delegate at: lopd@seaya.vc. You can find complete information about the treatment of the data in https://seaya.vc/privacy-policy/</p>
                                                </div>

                                                <input type="checkbox" className="checkbox" />

                                            </label>

                                            <button className='btn btn-info text-white mt-5 mb-2'>Submit</button>
                                            <p className='text-xs text-[#363A3A]'>Do not submit passwords through Airtable forms. Report malicious form</p>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;