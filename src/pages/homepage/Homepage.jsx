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
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Testimonial />
      <div id="team">
        <Team />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Faq />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
