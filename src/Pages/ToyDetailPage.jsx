import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import Spinner from "../components/shared/Spinner";
import TopNav from "../components/shared/TopNav";
import Footer from "../components/shared/Footer";

const ToyDetailPage = () => {
  const [toy, setToy] = useState(null);
  const { toyId } = useParams();

  console.log(toyId);

  useEffect(() => {
    // Fetch toy data based on the provided ID
    const fetchToyData = async () => {
      try {
        const response = await fetch(`https://marvel-mart-m-sabid.vercel.app/api/toys/${toyId}`);
        const data = await response.json();
        setToy(data);
      } catch (error) {
        console.log("Error fetching toy data:", error);
      }
    };

    fetchToyData();
  }, [toyId]);

  if (!toy) {
    return (
      <div>
        <Spinner />{" "}
      </div>
    ); // Show a loading state while data is being fetched
  }

  const {
    toyName,
    descriptions,
    sellerEmail,
    seller,
    quantity,
    price,
    photoURL,
  } = toy.toy;

  console.log(toy);

  // Hardcoded rating for demonstration
  const rating = 4.5;

  return (
    <div>
      <TopNav />

      <div className="bg-neutral2 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-4">
              <img
                src={photoURL}
                alt={toyName}
                className="w-full h-80 object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4">{toyName}</h1>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Seller:</span>
              <span className="text-primary">{seller}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Seller Email:</span>
              <span className="text-primary">{sellerEmail}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Price:</span>
              <span className="text-primary">${price}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Rating:</span>
              <span className="text-primary">{rating}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-neutral1 mr-2">Available Quantity:</span>
              <span className="text-primary">{quantity}</span>
            </div>
            <p className="text-neutral1 mb-4">{descriptions}</p>
            <div className="flex justify-between">
              <div className="flex items-center">
                <button className="text-primary mr-2">
                  <FaHeart className="text-xl" />
                </button>
                <button className="text-primary">
                  <FaShareAlt className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToyDetailPage;
