import Link from 'next/link'

const Footer = () => {
    
    return (
        <div className="flex justify-between bg-[#4b554f] border border-solid border-black rounded-md ">
            <Link href="social-media-plugins" className="rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 ">Social Media Plugins</Link>
            <Link href="building-this-app" className="rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 ">Building This App</Link>
            <Link href="about-me" className="rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 ">About Me</Link>
            <Link href="contact" className="rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 ">Contact</Link>
            <Link href="help" className="rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 ">Help</Link>
        </div>
    );
};

export default Footer;