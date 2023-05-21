import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Shared/Spinner";
import useDynamicTitle from "../components/shared/useDynamicTitle";
import Footer from "../components/shared/Footer";
import TopNav from "../components/shared/TopNav";

const AllToyPage = () => {
  useDynamicTitle("All Toy");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/toys");
        const data = await response.json();
        setToys(data.toys);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching toys:", error);
        setIsLoading(false);
      }
    };

    fetchToys();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in
    const isLoggedIn = true; // Replace with your actual logic to check if the user is logged in

    if (isLoggedIn) {
      // User is logged in, navigate to Details Page
      navigate(`/toys/${toyId}`);
    } else {
      // User is not logged in, navigate to Login Page
      navigate("/login");
    }
  };

  const filteredToys = searchQuery
    ? toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : toys;

  return (
    <div className="bg-gray-100">
      <TopNav />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">All Toys</h1>

        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by toy name"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        {!isLoading ? (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2">Seller</th>
                <th className="py-2">Toy Name</th>
                <th className="py-2">Sub-category</th>
                <th className="py-2">Price</th>
                <th className="py-2">Available Quantity</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredToys?.map((toy) => {
                console.log(toy);
                return (
                  <tr key={toy._id} className="text-center">
                    <td className="py-2">{toy.seller}</td>
                    <td className="py-2">{toy.toyName}</td>
                    <td className="py-2">{toy.subCategory}</td>
                    <td className="py-2">{toy.price}</td>
                    <td className="py-2">{toy.quantity}</td>
                    <td className="py-2">
                      <button
                        onClick={() => handleViewDetails(toy._id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Spinner />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllToyPage;
