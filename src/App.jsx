import React from "react";
import HeaderSlider from "./components/HomePage/HeaderSlider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/TopNav";
import useDynamicTitle from "./components/shared/useDynamicTitle";
import GallerySection from "./components/HomePage/GallerySection";
import ShopByCategory from "./components/HomePage/ShopByCategory";
import TestimonialsSection from "./components/HomePage/TestimonialsSection";
import FeaturedProductsSection from "./components/HomePage/FeaturedProductsSection";

function App() {
  useDynamicTitle("Home");
  return (
    <>
      <Navbar />
      <HeaderSlider />
      <GallerySection />
      <ShopByCategory />
      <TestimonialsSection />
      <FeaturedProductsSection />
      <Footer />
    </>
  );
}

export default App;
