import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";


const Slogan = () => {
    return (
        <div className="w-[80%] md:w-full mx-auto font-hankenGrotesk">
            <div className="p-2 mt-3 md:p-10 lg:p-20 space-y-1 md:space-y-5">

                <h3 className="text-[26px] md:text-3xl lg:text-6xl font-normal w-full md:w-10/12 lg:w-2/3 md:mx-auto lg:mx-0 space-y-10">We invest in exceptional founders building leading tech companies that have <br className="visible md:hidden" /> a sustainable approach.</h3>

                {/* <span>&minus;</span>  */}
                {/* <GoDash className="inline-block text-3xl hover:opacity-0"/> */}
                <Link href="/impact">
                    <div className="flex gap-2 md:w-10/12 lg:w-full font-light py-7 md:py-10 md:mx-auto ">
                        <div className="flex mt-3 md:mt-0 ">
                            <IoIosArrowRoundForward className="text-3xl " />
                        </div>
                        <p className="text-lg hover:underline">Know more about our sustainability commitment</p>
                    </div>
                </Link>
            </div>
         </div >
    );
};

export default Slogan;