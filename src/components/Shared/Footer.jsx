import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#363A3A] text-neutral-content lg:p-10 ">
            <div className='footer text-xl flex flex-col lg:grid lg:grid-cols-3 gap-2 w-full lg:w-10/12 mx-auto my-20'>
                <nav className='mx-auto md:mx-0'>
                    <h6 className="text-3xl text-white my-5 mx-auto md:mx-0">Navigate</h6>
                    <a className="link link-hover mx-auto md:mx-0">Seaya Ventures</a>
                    <a className="link link-hover mx-auto md:mx-0">Seaya Andromeda</a>
                    <a className="link link-hover mx-auto md:mx-0">Seaya Cathay Latam</a>
                    <a className="link link-hover mx-auto md:mx-0">Portfolio</a>
                    <a className="link link-hover mx-auto md:mx-0">Team</a>
                </nav>

                <nav className='mt-20 lg:-ml-20 mx-auto md:mx-0'>
                    <a className="link link-hover mx-auto md:mx-0">ESG/Impact</a>
                    <a className="link link-hover mx-auto md:mx-0">News</a>
                    <a className="link link-hover mx-auto md:mx-0">Talent</a>
                    <a className="link link-hover mx-auto md:mx-0">Investor Area</a>
                    <a className="link link-hover mx-auto md:mx-0">Contact</a>
                    <a className="link link-hover mx-auto md:mx-0">Whistleblower Channel</a>
                </nav>

                <nav className='w-full lg:w-[650px] relative  mx-auto lg:-ml-32 grid grid-cols-1 my-5'>
                    <label htmlFor="" className='text-3xl mx-auto md:mx-0'>Join our email</label>
                    <input type="email" name="" className='w-full md:w-96 form-control p-2 rounded-xl' placeholder='Enter your email address' />
                    
                    <div className='text-lg lg:ml-4'>
                        <div className='flex justify-start gap-3 mt-4 '>
                            <input type="checkbox" className="bg-white checkbox" />
                            <p>I have read and accept the Privacy Policy and Legal Notice of this Website.</p>
                        </div>

                        <div className='flex justify-center gap-3 mt-4'>
                            <input type="checkbox" className="bg-white checkbox" />
                            <p>I expressly request that you send me commercial communications by electronic means.</p>
                        </div>

                    </div>

                    <p className='text-sm p-2'>The personal data collected through this form will be processed by Seaya Capital Gestión SGEIC, S.A. with an address at C/ Alcalá 54, 28014 Madrid, based on your query and in order to provide you with a response. If you wish to exercise your rights of access, rectification, deletion, opposition, portability, limitation of processing, or those recognized by the regulations at any time, you can request it to the Data Protection Delegate at: lopd@seaya.vc.You can find complete information about the treatment of the data in https://seaya.vc/privacy-policy/﻿</p>

                    <button className='m-2 btn bg-black text-white border-none'>Submit</button>
                </nav>

            </div>

            <div className=" lg:navbar border-t-2 p-4 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-sm lg:text-xl">© 2024 Seaya · Designed by WSC</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg grid md:flex grid-cols-1">
                        <li><a>Legal Notice</a></li>
                        <li><a>Privacy policy</a></li>
                        <li><a>Cookie policy</a></li>
                       
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


