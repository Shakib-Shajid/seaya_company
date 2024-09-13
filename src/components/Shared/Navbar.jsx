import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent fixed">
            <div className="flex-1">
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white">
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
