import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#363A3A] text-neutral-content md:p-14 font-hankenGrotesk">
            <div className='w-[80%] mx-auto md:w-full lg:w-10/12 footer text-xl flex flex-col lg:grid lg:grid-cols-3 gap-2'>
                <nav className='mx-auto md:mx-0'>
                    <h6 className="text-3xl text-white my-5 mx-auto md:mx-0">Navigate</h6>
                    <Link href="/ventures" className="link link-hover mx-auto md:mx-0">Seaya Ventures</Link>
                    <Link href="/andromeda" className="link link-hover mx-auto md:mx-0">Seaya Andromeda</Link>
                    <Link href="/cathay-latam" className="link link-hover mx-auto md:mx-0">Seaya Cathay Latam</Link>
                    <Link href="/portfolio" className="link link-hover mx-auto md:mx-0">Portfolio</Link>
                    <Link href="/team" className="link link-hover mx-auto md:mx-0">Team</Link>
                </nav>

                <nav className='mt-20 lg:-ml-20 mx-auto md:mx-0'>
                    <Link href="/impact" className="link link-hover mx-auto md:mx-0">ESG/Impact</Link>
                    <Link href="/news" className="link link-hover mx-auto md:mx-0">News</Link>
                    <Link href="" className="link link-hover mx-auto md:mx-0">Talent</Link>
                    <Link href="/investor" className="link link-hover mx-auto md:mx-0">Investor Area</Link>
                    <Link href="/contact" className="link link-hover mx-auto md:mx-0">Contact</Link>
                    <Link href="/channel" className="link link-hover mx-auto md:mx-0">Whistleblower Channel</Link>
                </nav>

                <nav className='w-full lg:w-[650px] relative  mx-auto lg:-ml-32 grid grid-cols-1 my-5'>
                    <label htmlFor="" className='text-3xl mx-auto md:mx-0'>Join our newsletter</label>
                    <input type="email" name="" className='w-[94%] mx-auto md:w-full form-control p-2' placeholder='Enter your email address' />

                    <div className='text-lg lg:ml-4'>
                        <div className='flex justify-start gap-3 mt-4 '>
                            <input type="checkbox" className="bg-white checkbox" />
                            <p className='text-center md:text-start'>I have read and accept the Privacy Policy and Legal Notice of this Website.</p>
                        </div>

                        <div className='flex justify-center gap-3 mt-4'>
                            <input type="checkbox" className="bg-white checkbox" />
                            <p className='text-center md:text-start'>I expressly request that you send me commercial communications by electronic means.</p>
                        </div>

                    </div>

                    <p className='text-sm p-2 text-center md:text-start'>The personal data collected through this form will be processed by Seaya Capital Gestión SGEIC, S.A. with an address at C/ Alcalá 54, 28014 Madrid, based on your query and in order to provide you with a response. If you wish to exercise your rights of access, rectification, deletion, opposition, portability, limitation of processing, or those recognized by the regulations at any time, you can request it to the Data Protection Delegate at: lopd@seaya.vc.You can find complete information about the treatment of the data in https://seaya.vc/privacy-policy/﻿</p>

                    <button className='mx-auto md:mx-0 m-2 btn bg-black text-white border-none'>Submit</button>
                </nav>

            </div>

            <div className=" lg:navbar border-t-2 p-4 text-center md:text-start">
                <div className="flex-1">
                    <a className="btn btn-ghost text-sm lg:text-xl">© 2024 Seaya · Designed by WSC</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg flex flex-col items-center lg:flex-row ">
                        <li> <Link href="/legal-notice" className="relative flex items-center group">
                            {/* Static Text */}
                            <span className="relative">
                                Legal Notice

                                {/* Underline that animates when hovered */}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                ></span>
                            </span>
                        </Link></li>
                        <li> <Link href="/privacy-policy" className="relative flex items-center group">
                            {/* Static Text */}
                            <span className="relative">
                                Privacy policy

                                {/* Underline that animates when hovered */}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                ></span>
                            </span>
                        </Link></li>
                        <li> <Link href="/cookie-policy" className="relative flex items-center group">
                            {/* Static Text */}
                            <span className="relative">
                                Cookie policy

                                {/* Underline that animates when hovered */}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
                                ></span>
                            </span>
                        </Link></li>

                        {/* <li><Link href="/legal-notice">Legal Notice</Link></li>
                        <li><Link href="/privacy-policy">Privacy policy</Link></li>
                        <li><Link href="/cookie-policy">Cookie policy</Link></li> */}

                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


