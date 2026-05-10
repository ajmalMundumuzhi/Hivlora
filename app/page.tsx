// import Navbar from "@/components/Navbar";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Services from "@/components/services";
import Testimonial from "@/components/Testimonials";
import Attendance from "@/components/Product";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <Attendance />
    </main>
  )
}
