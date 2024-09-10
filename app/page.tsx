import Description from "./components/Description";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="md:px-20">
    <Navbar />
    <div className="md:ms-20">
      <Hero />
      <Description />
      <Testimonial />
    </div>
    <Footer />
    </div>
  );
}
