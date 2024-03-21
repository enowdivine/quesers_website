import React from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Gallery from "../../components/gallery/Gallery";
import Testimonial from "../../components/testimonial/Testimonial";
import Team from "../../components/team/Team";
import Pricing from "../../components/pricing/Pricing";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Testimonial />
      <Team />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
};

export default Homepage;
