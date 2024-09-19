import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='w-[80%] mx-auto md:w-full'>
            <section className='md:p-24 mt-20 md:mt-16 p-2 flex lg:gap-10 w-full'>
                <div className='w-full lg:w-[50%] space-y-3 '>
                    <h3 className='text-3xl md:text-4xl lg:text-6xl'>Legal Notice</h3>
                    <p className='text-2xl my-2 space-y-3'>In compliance with the duty of information contained in article 10 of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSICE), the owner of the website informs you of the following:</p>

                    <p className='text-xl text-[#727676]'>&minus; Company name: Seaya SGEIC S.A.</p>
                    <p className='text-xl text-[#727676]'>&minus; VAT NO: A1B12384D</p>
                    <p className='text-xl text-[#727676]'>&minus; Address: A/ Alcalá, 57 5º Derecha, 20862 – Madrid (Madrid)</p>
                </div>
                <Image src="/legal.png" width="300" height="300" alt="" className='w-1/2 hidden lg:grid' />
            </section>

            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-20 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676] flex justify-center ml-2 md:ml-0'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto '>
                    <p>Within the limits established by law, Seaya Capital Gestion SGEIC S.A. assumes no liability for the lack of veracity, completeness, updating and accuracy of the data or information contained in its web pages.</p> <br />

                    <p>The contents and information do not bind Seaya Capital Gestion SGEIC S.A. nor do they constitute opinions, advice or legal advice of any kind as it is merely a service offered for information purposes.</p> <br />

                    <p>The Internet pages of Seaya Capital Gestion SGEIC S.A. may contain links to other pages of third parties that Seaya Capital Gestion SGEIC S.A. cannot control. Therefore, Seaya Capital Gestion SGEIC S.A. cannot assume responsibility for the content that may appear on third party sites.</p> <br />

                    <p>The texts, images, sounds, animations, software and other contents included in this website are the exclusive property of Seaya Capital Gestion SGEIC S.A. or its licensors. Any transmission, distribution, transfer, reproduction, storage or public communication, in whole or in part, must have the express consent of Seaya Capital Gestion SGEIC S.A.</p> <br />

                    <p>Likewise, in order to access some of the services that Seaya Capital Gestion SGEIC S.A. offers through the website, you must provide some personal data. In compliance with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data, we inform you that, by completing these forms, your personal data will be included and processed in the files of Seaya Capital Gestion SGEIC S.A. in order to provide and offer you our services and to inform you of improvements to the website.</p> <br />

                    <p>We also inform you that you may at any time exercise your rights of access, rectification, cancellation, opposition, limitation and portability of your personal data, free of charge, by email to: lopd@seaya.vc or at the following address: C/ Alcalá, 54 1º Derecha, 28014 – Madrid (Madrid).</p> <br />

                    <p>For due compliance with data protection regulations, GRUPO ATICO34 SL has been appointed as external Data Protection Delegate (DPO), who carries out functions related to this matter at Seaya Capital Gestion SGEIC S.A. You can contact us at the following e-mail address: lopd@seayaventures.com</p> <br />
                </div>
            </section>
        </div>
    );
};

export default page;