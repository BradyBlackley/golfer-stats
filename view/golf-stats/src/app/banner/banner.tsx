import Image from "next/image";
import logoFilePath from "./tempLogo.jpg"

const Banner = () => {
    return (
        <div className="flex justify-center bg-[#b4c593] border border-solid border-black rounded-md ">
            <div className="mr-auto  ">
                <Image src={logoFilePath} alt="logo" className="h-20 w-auto " />
            </div>
            <div className="mr-auto  mt-auto mb-auto text-2xl font-bold text-gray-800 ">
                <p>Golf Stats</p>
            </div>
        </div>
    );
};

export default Banner;