import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Backdrop from "./components/Backdrop";
import IconSection from "./components/Icons";
import HeroCarousel from "./components/HeroCarousel";
import StyleGallery from "./components/StyleInspo";
import Testimonies from "./components/Testimonies";
import Collections from "./components/Collection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Backdrop />
      <IconSection />
      <HeroCarousel />
      <StyleGallery />
      <Collections />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default App;
