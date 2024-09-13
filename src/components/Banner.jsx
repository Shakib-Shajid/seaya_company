import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-screen'>
            <video
                src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Portada_NewVideo_low2.mp4"
                loop
                muted
                autoPlay
                className='w-full h-full object-cover'
            ></video>
            <svg className="" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
                <path className="" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76 c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
            </svg>
        </div>
    );
};

export default Banner;
