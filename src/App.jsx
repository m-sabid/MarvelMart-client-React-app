import HeaderSlider from "./components/HomePage/HeaderSlider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/TopNav";
import useDynamicTitle from "./components/shared/useDynamicTitle";
import GallerySection from "./components/HomePage/GallerySection";

function App() {
  useDynamicTitle("Home");
  return (
    <>
      <Navbar />
      <HeaderSlider />
      <GallerySection />
      <Footer />
    </>
  );
}

export default App;
