"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar fixed top-0 left-0 w-full transition-colors duration-300 lg:py-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex-1">
                {
                    isScrolled &&
                    <Link href="/" className="btn btn-ghost rounded-none text-lg lg:text-xl border-black border-2 text-black ml-2 lg:ml-4 tracking-widest">SEAYA</Link>
                }
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={isScrolled ? 'black' : 'white'}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
