import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
