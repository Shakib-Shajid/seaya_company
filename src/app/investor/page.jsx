"use client"
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col md:flex-row gap-none w-[94%] lg:w-full mx-auto'>
            <div
                className="hero min-h-screen w-1/2 opacity-50 hidden lg:grid"
                style={{
                    backgroundImage: "url(https://webintra.net/pix/calltoinnovation/252736/login_background.png?t=1654013233&quot)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">We invest in exceptional founders building leading tech companies with a sustainable approach</h1>

                    </div>
                </div>
            </div>

            <div className='lg:flex lg:items-center lg:justify-center w-[94%] mx-auto md:w-1/2 my-20 lg:0' >
                <div className='space-y-5'>
                    <Image src="/main_logo.png" width="250" height="250" alt="" className='h-16 w-32 md:h-20 md:w-40 lg:h-28 lg:w-64 mx-auto lg:mx-0'/>
                    <p className='w-full lg:w-96'>Accuracy, Performance and Monitoring using a single point of access.</p>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Your Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-blue-500" onClick={() => document.getElementById('my_modal_4').showModal()}>I forgot my password</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box  max-w-sm">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5">✕</button>
                            </form>
                            <p className="text-[#6e7070]">Recover password</p>
                            <h2 className="font-bold text-lg mt-10">Enter your email address.</h2>
                            <p className="text-[#6e7070] text-sm">We will send you an email to reset your password.</p>

                            <label className="form-control w-full mt-5">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" placeholder="Enter your user email" className="input input-bordered w-full" />
                                <button className="btn btn-info text-center text-white uppercase my-5">Restore Password</button>
                            </label>
                        </div>
                    </dialog>

                    <button className="btn btn-info text-center w-full text-white">Sign in</button>



                </div>
            </div>
        </div>
    );
};

export default page;

//  access page img