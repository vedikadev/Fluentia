import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "../styles.css"
function LandingPage() {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setOffset(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Languages />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;