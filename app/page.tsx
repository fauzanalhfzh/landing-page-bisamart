import { Testimonial } from "@/components/molecules/Testimonial";
import Description from "../components/molecules/Description";
import Footer from "../components/molecules/Footer";
import Hero from "../components/molecules/Hero";
import Navbar from "../components/molecules/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="md:ms-20">
      <Hero />
      <Description />
      <Testimonial />
    </div>
    <Footer />
    </>
  );
}
