// import Navbar from "@/components/Navbar";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Services from "@/components/services";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
    </main>
  )
}
