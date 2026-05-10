import Image from "next/image"

export default function Testimonial () {
    return (
        <section id="testimonials">
            <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
                <h1 className="text-4xl font-bold text-center">
                    What`s Our <span className="text-blue-800">Clients Say.</span>
                </h1>
                <div className="flex flex-col mt-10 mb-10 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
                        <Image
                            alt="image"
                            loading="eager"
                            src="/images/QRCode.png"
                            width={68}
                            height={68}
                            className="-mt-14 rounded-full"
                        />
                        <h5 className="text-lg font-semibold text-center">Habeeb Rahman | Creative Head of ustaverse </h5>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem nihil atque itaque impedit assumenda fugit, earum libero molestias officia voluptas cumque obcaecati similique ex ratione minima quas perferendis accusantium.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}