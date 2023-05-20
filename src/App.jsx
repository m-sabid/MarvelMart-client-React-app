import HeaderSlider from "./components/HomePage/HeaderSlider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/TopNav";
import UserList from "./components/UserList";
import useDynamicTitle from "./components/shared/useDynamicTitle";

function App() {
  useDynamicTitle("Home");
  return (
    <>
      <Navbar />
      <HeaderSlider />
      <UserList />
      <Footer />
    </>
  );
}

export default App;
