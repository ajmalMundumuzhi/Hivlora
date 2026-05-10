import Image from "next/image"

export default function Hero() {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">

                <div className="flex flex-col mt-10 space-y-6 md:w-1/2">
                    <h1 className="max-w-150 text-4xl font-bold text-center md:text-6xl md:text-left">
                        <span className="text-purple-800">Hivlora</span> The Hub Of Creative Solutions.
                    </h1>
                    <p className="max-w-md text-center text-gray-600 md:text-left">
                        Hivlora transforms ideas into powerful digital experiences through innovative solutions, creative design, and modern technology.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-500 ">
                            Get Started
                        </a>
                    </div>

                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Image
                        alt="icon"
                        loading="eager"
                        src="/images/logo png.png"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>

            </div>
        </section>
    )
}