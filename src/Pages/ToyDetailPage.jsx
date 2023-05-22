import React, { useEffect, useState } from "react";
import TopNav from "../components/shared/TopNav";
import Footer from "../components/shared/Footer";
import { useParams } from "react-router-dom";

const ToyDetailPage = () => {
  const [toy, setToy] = useState(null);
  const { toyId } = useParams();

  useEffect(() => {
    // Fetch toy data based on the provided ID
    const fetchToyData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/toys/${toyId}`);
        const data = await response.json();
        setToy(data);
      } catch (error) {
        console.log("Error fetching toy data:", error);
      }
    };

    fetchToyData();
  }, [toyId]);

  if (!toy) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const { toyName, description, category, price } = toy;

  return (
    <div>
      <TopNav />

      <div className="bg-neutral2 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{toyName}</h1>
            <p className="text-neutral1 mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Category:</span>
              <span className="text-accent1">{category}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Price:</span>
              <span className="text-accent1">${price}</span>
            </div>
            <div className="flex justify-between">
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-custom-primary">
                Add to Cart
              </button>
              <button className="bg-accent1 text-white py-2 px-4 rounded hover:bg-custom-accent1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToyDetailPage;
