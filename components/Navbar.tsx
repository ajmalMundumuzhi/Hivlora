import Image from "next/image"

export default function Navbar () {
    return (
        <nav className="relative container mx-auto p-5">
            <div className="flex items-center justify-between">

                <div className="pt-2">
                    <Image
                        alt="icon"
                        loading="eager"
                        src="/images/logo png.png"
                        width={100}
                        height={100}
                     />
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-600 font-mono">Discover</a>
                    <a href="#" className="hover:text-blue-600 font-mono">Services</a>
                    <a href="#" className="hover:text-blue-600 font-mono">Projects</a>
                    <a href="#" className="hover:text-blue-600 font-mono">Products</a>
                    <a href="#" className="hover:text-blue-600 font-mono">Contact</a>
                </div>

                <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-500 ">
                    Get Started
                </a>

            </div>
        </nav>
    )
}