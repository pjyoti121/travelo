import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
  

export default function App() {
  return (
  <div>
  <ScrollToTop/>
  <Navbar/>
  <Hero/>
  <Services/>
  <Recommend/>
  <Testimonials/>
  <Footer/>
 
  </div>
  );

}