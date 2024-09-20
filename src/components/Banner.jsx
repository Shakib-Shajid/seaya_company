import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[420px] md:h-screen'>
            <video
                src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Portada_NewVideo_low2.mp4"
                loop
                muted
                autoPlay
                playsInline
                className='w-full mx-auto h-full object-cover'
            ></video>
           
        </div>
    );
};

export default Banner;
