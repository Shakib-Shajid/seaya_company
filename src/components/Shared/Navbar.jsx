// "use client"

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className={`navbar fixed top-0 left-0 w-full transition-colors duration-300 lg:py-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
//             <div className="flex-1">
//                 {
//                     isScrolled &&
//                     <Link href="/" className="btn btn-ghost rounded-none text-lg lg:text-xl border-black border-2 text-black ml-2 lg:ml-4 tracking-widest">SEAYA</Link>
//                 }
//             </div>
//             <div className="flex-none">
//                 <button className="btn btn-ghost">
//                     {/* You can open the modal using document.getElementById('ID').showModal() method */}

//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-10 w-10"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke={isScrolled ? 'black' : 'white'}>
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1"
//                             d="M4 6h16M4 12h16M4 18h7" />
//                     </svg>
//                 </button>
//             </div>

//             <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
//                     <dialog id="my_modal_3" className="modal">
//                         <div className="modal-box">
//                             <form method="dialog">
//                                 {/* if there is a button in form, it will close the modal */}
//                                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                             </form>
//                             <h3 className="font-bold text-lg">Hello!</h3>
//                             <p className="py-4">Press ESC key or click on ✕ button to close</p>
//                         </div>
//                     </dialog>
//         </div>
//     );
// };

// export default Navbar;


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
        <div className={`navbar fixed top-0 left-0 w-full z-10 transition-colors duration-300 lg:py-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex-1">
                {isScrolled && (
                    <Link href="/" className="btn btn-ghost rounded-none text-lg lg:text-xl border-black border-2 text-black ml-2 lg:ml-4 tracking-widest">
                        SEAYA
                    </Link>
                )}
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={() => document.getElementById('my_modal_3').showModal()}>
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
                <dialog id="my_modal_3" className="modal">
                    <div className="bg-gray-200 w-full h-full p-8 md:p-28 lg:p-32 overflow-y-auto md:overflow-y-hidden text-2xl lg:text-3xl">
                        <form method="dialog">
                            {/* Closing button inside the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 md:right-8 top-4 text-base">✕</button>
                        </form>
                        {/* <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                        <div className='flex md:flex-row flex-col md:gap-24 lg:gap-96'>
                            <div>
                                <ul className='space-y-3 w-72'>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">Seaya Ventures</Link></li>
                                    <li><Link href="/">Seaya Andromeda</Link></li>
                                    <li><Link href="/">Seaya Cathay Latam</Link></li>
                                    <li><Link href="/">Portfolio</Link></li>
                                    <li><Link href="/">Team</Link></li>
                                    <li><Link href="/">ESG/Impact</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                </ul>

                            </div>
                            <div className='mt-12 md:mt-32 leading-loose'>
                                <ul className='space-y-3 w-full'>
                                    <li className='font-bold'><Link href="/">in</Link></li>
                                    <li className='text-2xl'><Link href="/">News</Link></li>
                                    <li className='text-2xl'><Link href="/">Talent</Link></li>
                                    <li className='text-2xl'><Link href="/">Investor Area</Link></li>
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
