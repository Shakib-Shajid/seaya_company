"use client"
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col md:flex-row gap-none w-full'>
            <div
                className="hero min-h-screen w-1/2 opacity-50"
                style={{
                    backgroundImage: "url(https://webintra.net/pix/calltoinnovation/252736/login_background.png?t=1654013233&quot)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">We invest in exceptional founders building leading tech companies with a sustainable approach</h1>

                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center mx-auto' >
                <div className='space-y-5'>
                    <Image src="/main_logo.png" width="250" height="250" alt="" />
                    <p className='w-96'>Accuracy, Performance and Monitoring using a single point of access.</p>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Your Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-blue-500" onClick={() => document.getElementById('my_modal_4').showModal()}>I forgot my password</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
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