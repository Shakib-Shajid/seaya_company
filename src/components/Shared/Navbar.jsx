
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // Get the current pathname
    const pathParts = pathname.split('/'); // Split the pathname by '/'
    const pageName = pathParts[pathParts.length - 1] || 'home'; // Get the last part, default to 'home'
    console.log(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to close modal
    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    return (
        <div className={`navbar fixed top-0 left-0 w-full z-10 transition-colors duration-300 font-hankenGrotesk lg:py-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex-1">
                {isScrolled && (
                    <Link href="/" className="btn btn-ghost rounded-none text-lg lg:text-xl border-black border-2 text-black ml-2 lg:ml-4 tracking-widest">
                        SEAYA
                    </Link>
                )}
            </div>
            <div className="flex-none">
                <button className="btn btn-ghost " onClick={() => document.getElementById('my_modal_3').showModal()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 md:h-10 md:w-10 relative left-2 md:left-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="bg-gray-200 w-full h-full p-8 md:p-28 lg:p-32 overflow-y-auto md:overflow-y-hidden text-2xl lg:text-3xl">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 md:right-12 top-6 md:top-12 text-base">✕</button>
                        </form>
                        <div className='flex md:flex-row flex-col md:gap-24 lg:gap-96'>
                            <div>
                                <ul className='space-y-3 w-72'>
                                    {/* ............................................................................................ */}
                                    <li>
                                        <Link href="/" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'home' ? 'underline' : ''}`}>
                                                Home
                                                <span className={`${pageName === 'home' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>


                                    {/* ............................................................................................ */}
                                    {/* <li>
                                        <Link href="/" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'home' ? 'underline' : ''}`}>
                                                Home
                                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
                                            </span>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/ventures" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'ventures' ? 'underline' : ''}`}>
                                                Seaya Ventures
                                                <span className={`${pageName === 'ventures' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/andromeda" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'andromeda' ? 'underline' : ''}`}>
                                                Seaya Andromeda
                                                <span className={`${pageName === 'andromeda' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cathay-latam" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'cathay-latam' ? 'underline' : ''}`}>
                                                Seaya Cathay Latam
                                                <span className={`${pageName === 'cathay-latam' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'portfolio' ? 'underline' : ''}`}>
                                                Portfolio
                                                <span className={`${pageName === 'portfolio' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'team' ? 'underline' : ''}`}>
                                                Team
                                                <span className={`${pageName === 'team' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/impact" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'impact' ? 'underline' : ''}`}>
                                                ESG/Impact
                                                <span className={`${pageName === 'impact' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" onClick={closeModal}>
                                            <span className={`relative group ${pageName === 'contact' ? 'underline' : ''}`}>
                                                Contact
                                                <span className={`${pageName === 'contact' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-12 md:mt-32 leading-loose'>
                                <ul className='space-y-3 w-full'>
                                    <li className='font-bold'>
                                        <a href="https://www.linkedin.com/" rel="link" onClick={closeModal}>
                                            <span className="relative group">
                                                in
                                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className='text-2xl'><Link href="/news" onClick={closeModal}>
                                        <span className={`relative group ${pageName === 'news' ? 'underline' : ''}`}>
                                            News
                                            <span className={`${pageName === 'news' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                        </span>
                                    </Link></li>
                                    <li className='text-2xl'><Link href="/" onClick={closeModal}>
                                        <span className={`relative group ${pageName === 'talent' ? 'underline' : ''}`}>
                                            Talent
                                            <span className={`${pageName === 'talent' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                        </span>
                                    </Link></li>
                                    <li className='text-2xl'><Link href="/investor" onClick={closeModal}>
                                        <span className={`relative group ${pageName === 'investor' ? 'underline' : ''}`}>
                                            Investor Area
                                            <span className={`${pageName === 'investor' ? '' : "absolute left-0 bottom-0 w-full h-[2px] bg-black transform transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left"}`}></span>
                                        </span>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Navbar;
