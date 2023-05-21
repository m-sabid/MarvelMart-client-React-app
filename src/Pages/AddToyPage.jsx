import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/shared/Footer";
import TopNav from "../components/shared/TopNav";
import { AuthContext } from "../providers/AuthProvider";

const AddToyPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const [toy, setToy] = useState({
    seller: user.displayName,
    toyName: "",
    subCategory: "",
    price: "",
    quantity: "",
    descriptions: "",
    photoURL: "",
    sellerEmail: user.email,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setToy((prevToy) => ({ ...prevToy, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/toys", toy);
      const newToy = response.data.toy;
      console.log("Toy added successfully:", newToy);
      navigate(`/toys/${newToy._id}`);
    } catch (error) {
      console.error("Error adding toy:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <TopNav />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Toy</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="seller" className="block font-medium text-gray-700">
              Seller
            </label>
            <input
              type="text"
              id="seller"
              name="seller"
              value={toy.seller}
              onChange={handleInputChange}
              placeholder="Enter seller name"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={toy.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Toy Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={toy.name}
              onChange={handleInputChange}
              placeholder="Enter toy name"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="subCategory"
              className="block font-medium text-gray-700"
            >
              Sub-category
            </label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              value={toy.subCategory}
              onChange={handleInputChange}
              placeholder="Enter sub-category"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="price" className="block font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={toy.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={toy.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="descriptions"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="descriptions"
              name="descriptions"
              value={toy.descriptions}
              onChange={handleInputChange}
              placeholder="Enter description"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="photoURL"
              className="block font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={toy.photoURL}
              onChange={handleInputChange}
              placeholder="Enter photo URL"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddToyPage;
