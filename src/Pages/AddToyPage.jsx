import Footer from "../components/shared/Footer";
import TopNav from "../components/shared/TopNav";
import useDynamicTitle from "../components/shared/useDynamicTitle";


const AddToyPage = () => {
    useDynamicTitle("Add Toy");
    return (
        <div>
            <TopNav />
            <Footer />
        </div>
    );
};

export default AddToyPage;