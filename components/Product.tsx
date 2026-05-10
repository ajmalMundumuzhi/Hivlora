export default function Product () {
    return (
        <section id="product" className="bg-red-400">
            <div className="container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-6 md:py-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold leading-tight text-center text-white nd:text-4xl md:max-w-xl md:text-left">
                    Still Managing Attendance Manually!
                </h2>
                <div className="flex justify-center md:justify-start">
                    <a href="#" className="p-3 px-5 pt-2 text-red-500 bg-white rounded-full baseline hover:bg-gray-200 ">
                        Book A Demo
                    </a>
                </div>
            </div>
        </section>
    )
}