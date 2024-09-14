import Link from "next/link";

const Slogan = () => {
    return (
        <div>
            <div className="p-5 md:p-10 lg:p-20 space-y-5">

                <h3 className="text-2xl md:text-3xl lg:text-6xl font-normal w-full md:w-10/12 lg:w-2/3 md:mx-auto lg:mx-0">We invest in exceptional founders building leading tech companies that have a sustainable approach.</h3>

                <p className="text-lg md:w-10/12 lg:w-full font-light pt-10 md:mx-auto hover:underline"><Link href="/"> <span>&minus;</span> Know more about our sustainability commitment</Link></p>
            </div>
            <hr className="border-gray-400 border w-11/12 mx-auto" />
        </div>
    );
};

export default Slogan;