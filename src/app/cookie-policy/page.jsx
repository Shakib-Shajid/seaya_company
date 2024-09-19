import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-[80%] mx-auto md:w-full'>
            <section className='md:p-24 mt-20 md:mt-16 p-2 flex items-center lg:gap-10 w-full'>
                <div className='w-full lg:w-[50%] space-y-3 '>
                    <h3 className='text-2xl md:text-4xl lg:text-6xl'>Cookie policy</h3>
                    <p className='text-2xl my-2 space-y-3'>Seaya Capital Gestion SGEIC S.A. informs about the use of cookies on its website: www.seayaventures.com</p>
                </div>
                <Image src="/legal.png" width="300" height="300" alt="" className='w-1/2 h-72 hidden lg:grid' />
            </section>


            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-10 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676]  ml-2 md:ml-0 mb-20'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'> ¿What are cookies?</h3>
                    <p> Cookies are files that can be downloaded to your computer by websites. They are tools that play an essential role in the provision of numerous information society services. Among other things, they allow a website to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information obtained, they can be used to recognise the user and improve the service offered.</p>
                </div>
            </section>

            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-10 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676]  ml-2 md:ml-0 mb-20'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Cookies affected by, and cookies exempt from regulations</h3>
                    <p> According to the EU directive, the cookies that require the user’s informed consent are analysis, advertising and affiliation cookies, while technical cookies and those that are necessary for the operation of the website or the provision of services expressly requested by the user are exempt.</p>
                </div>
            </section>

            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-10 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676]  ml-2 md:ml-0 mb-20'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Types of cookies</h3>
                    <p> Depending on the entity that manages the domain from which the cookies are sent and processes the data obtained, two types can be distinguished:</p> <br />

                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Own cookies: </span> Those that are sent to the user’s terminal equipment from a computer or domain managed by the editor itself and from which the service requested by the user is provided.</li>
                        <li><span className='font-bold'>Third-party cookies:</span> Those that are sent to the user’s terminal equipment from a computer or domain that is not managed by the editor, but by another entity that processes the data obtained through the cookies.</li>
                    </ul> <br />

                    <p>In the event that the cookies are installed from a computer or domain managed by the editor itself but the information collected through them is managed by a third party, they cannot be considered as own cookies.</p> <br />

                    <p>There is also a second classification according to the length of time they remain stored in the client’s browser:</p> <br />

                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Session cookies:</span> Designed to collect and store data while the user accesses a website. They are usually used to store information that only needs to be kept for the provision of the service requested by the user on a single occasion (e.g. a list of products purchased).</li>
                        <li><span className='font-bold'>Persistent cookies:</span> The data remains stored in the terminal and can be accessed and processed for a period defined by the party responsible for the cookie, which can range from a few minutes to several years.</li>
                    </ul> <br />

                    <p>Finally, there is another classification with six types of cookies depending on the purpose for which the data obtained are processed:</p><br />

                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Technical cookies:</span> Those that allow the user to browse through a website, platform or application and use the different options or services that exist on it, such as, for example, controlling traffic and data communication, identifying the session, accessing restricted access areas, remembering the elements that make up an order, carrying out the purchase process of an order, making an application for registration or participation in an event, using security elements during browsing, storing content for the broadcasting of videos or sound or sharing content through social networks.</li>
                        <li><span className='font-bold'>Personalisation cookies:</span> These allow the user to access the service with some predefined general characteristics depending on a series of criteria in the user’s terminal, such as the language, the type of browser used to access the service, the regional configuration from which the service is accessed, etc.</li>
                        <li><span className='font-bold'>Analysis cookies:</span> These allow the party responsible for them to monitor and analyse the behaviour of the users of the websites to which they are linked. The information collected through this type of cookies is used to measure the activity of the websites, application or platform and for the elaboration of browsing profiles of the users of these sites, applications and platforms, in order to introduce improvements based on the analysis of the usage data of the users of the service.</li>
                        <li><span className='font-bold'>Advertising Cookies:</span> These allow the management, in the most efficient way possible, of advertising spaces.</li>
                        <li><span className='font-bold'>Behavioural advertising cookies:</span> These store information on user behaviour obtained through continuous observation of their browsing habits, which allows a specific profile to be developed in order to display advertising based on the same.</li>
                        <li><span className='font-bold'>Cookies from external social networks:</span> These are used so that visitors can interact with the content of different social platforms (facebook, youtube, twitter, linkedIn, etc..) and are generated only for users of these social The conditions of use of these cookies and the information collected is regulated by the privacy policy of the corresponding social platform.</li>
                    </ul>
                </div>
            </section>

            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-10 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676]  ml-2 md:ml-0 mb-20'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Disabling and deleting cookies</h3>
                    <p> You have the option to allow, block or delete cookies installed on your computer by configuring the browser options installed on your computer. By disabling cookies, some of the services available may no longer be operational. The way to disable cookies is different for each browser, but can usually be done from the Tools or Options menu. You can also consult the browser’s Help menu where you can find instructions. The user may at any time choose which cookies they want to operate on this website.</p> <br />
                    <p>You can allow, block or delete the cookies installed on your computer by configuring the browser options installed on your computer:</p> <br />

                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Microsoft Internet Explorer or Microsoft Edge:</span><Link href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies</Link></li>
                        <li><span className='font-bold'>Mozilla Firefox:</span> <Link href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">http://support.mozilla.org/es/kb/<br className='visible md:hidden'/>impedir-que-los-sitios-web-guarden-sus-preferencia</Link></li>
                        <li><span className='font-bold'>Chrome:</span><Link href="https://support.google.com/accounts/answer/61416?hl=es">https://support.google.com/accounts/ <br className='visible md:hidden'/>answer/61416?hl=es</Link></li>
                        <li><span className='font-bold'>Safari:</span> <Link href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/">http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/</Link></li>
                        <li><span className='font-bold'>Opera: </span> <Link href="http://help.opera.com/Linux/10.60/es-ES/cookies.html">http://help.opera.com/Linux/10.60/es-ES/cookies.html</Link></li>
                    </ul> <br /><br />

                    <p>In addition, you can also manage the storage of cookies in your browser using tools such as the following:</p>

                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Ghostery:</span> <Link href="https://www.ghostery.com/">ghostery.com</Link></li>
                        <li><span className='font-bold'>Your Online Choices:</span> <Link href="https://www.youronlinechoices.com/es/">youronlinechoices.com/es/</Link></li>
                    </ul>
                </div>
            </section>

            <hr className='border-gray-600 mt-10 md:mt-0 lg:mt-10 max-w-[306px] md:max-w-xl lg:max-w-[1350px] mx-auto mb-10' />
            <section className='text-[#727676]  ml-2 md:ml-0 mb-20'>
                <div className='max-w-4xl md:max-w-xl lg:max-w-6xl mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Cookies used on www.seayaventures.com</h3>
                    <p> The cookies that are being used in this portal are identified below, as well as their type and function:</p> <br />

                    <ul className='list-disc ml-5'>
                        <li>
                            <p>_ga</p>
                            <p><span className='font-bold'>Duration:</span> 2 years</p>
                            <p><span className='font-bold'>Description:</span> Used to distinguish Generated by Google Analytics.
                                Google stores the information collected by cookies on servers located in the United States, complying with European legislation on the protection of personal data and undertakes not to share it with third parties, except where required to do so by law or where necessary for the operation of the system. Google does not associate your IP address with any other information held by Google. If you would like more information about the cookies used by Google Analytics, please go to this address.</p> <br />
                            <p><span className='font-bold'>Type:</span>Third party</p>
                            <p><span className='font-bold'>Purpose:</span>Analytical</p>
                        </li> <br /><br />

                        <li>
                            <p>_gid</p>
                            <p><span className='font-bold'>Duration:</span> 24 hours</p>
                            <p><span className='font-bold'>Description:</span> Generated by Google Analytics. Google stores the information collected by cookies on servers located in the United States, complying with European legislation on the protection of personal data and undertakes not to share it with third parties, except where required to do so by law or where necessary for the operation of the system. Google does not associate your IP address with any other information held by If you would like more information about the cookies used by Google Analytics, please go to this address</p> <br />
                            <p><span className='font-bold'>Type:</span>Third party</p>
                            <p><span className='font-bold'>Purpose:</span>Analytical</p>
                        </li> <br /><br />

                        <li>
                            <p>_gat</p>
                            <p><span className='font-bold'>Duration:</span> 1 minute</p>
                            <p><span className='font-bold'>Description:</span> Used to display our advertising on other pages of the Google network. Generated by Google Analytics. Google stores the information collected by cookies on servers located in the United States, complying with European legislation on the protection of personal data and undertakes not to share it with third parties, except where required to do so by law or where necessary for the operation of the system. Google does not associate your IP address with any other information held by Google. If you would like more information about the cookies used by Google Analytics, please go to this address</p> <br />
                            <p><span className='font-bold'>Type:</span>Third party</p>
                            <p><span className='font-bold'>Purpose:</span>Analytical</p>
                        </li> <br /><br />

                        <li>
                            <p>cookieyes-consent</p>
                            <p><span className='font-bold'>Duration:</span> 1 year</p>
                            <p><span className='font-bold'>Description:</span> CookieYes sets this cookie to remember users’ consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store personal information about site visitors.</p> <br />
                            <p><span className='font-bold'>Type:</span>Own</p>
                            <p><span className='font-bold'>Purpose:</span>Technical</p>
                        </li>
                    </ul><br /><br />

                    <p>www.seayaventures.com displays information about its Cookie Policy at the bottom or top of any page of the portal with each login.</p> <br />

                    <p className='font-bold'>Given this information, the following actions are possible:</p> <br />
                    <ul className='list-disc ml-5'>
                        <li><span className='font-bold'>Accept cookies:</span> This notice will not be displayed again when accessing any page of the portal during the current session.</li>
                        <li><span className='font-bold'>Modify/customise your configuration:</span> You can obtain more information on what cookies are, find out about the Cookies Policy of: seaya.vc and modify the configuration of your browser.</li>
                    </ul>
                </div>
            </section>






        </div>
    );
};

export default page;