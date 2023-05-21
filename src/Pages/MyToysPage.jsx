import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/shared/TopNav";
import Footer from "../components/shared/Footer";

const MyToysPage = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    // Fetch toys data for the logged-in user
    const fetchToys = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/toys");
        const userToys = response.data.toys.filter(toy => toy.userId === loggedInUserId); // Replace "loggedInUserId" with the ID of the logged-in user
        setToys(userToys);
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);

  const handleUpdate = (toyId) => {
    // Redirect to the update form or modal
    navigate(`/toys/${toyId}/update`);
  };

  const handleDeleteConfirmation = (toyId) => {
    setDeleteConfirmation(toyId);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation(null);
  };

  const handleDelete = async (toyId) => {
    try {
      await axios.delete(`http://localhost:5000/api/toys/${toyId}`);
      setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
      setDeleteConfirmation(null);
    } catch (error) {
      console.error("Error deleting toy:", error);
    }
  };

  return (
    <>
      <TopNav />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Toys</h1>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Seller</th>
              <th className="px-4 py-2 border-b">Toy Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td className="px-4 py-2 border-b">{toy.seller}</td>
                <td className="px-4 py-2 border-b">{toy.name}</td>
                <td className="px-4 py-2 border-b">{toy.price}</td>
                <td className="px-4 py-2 border-b">{toy.quantity}</td>
                <td className="px-4 py-2 border-b">{toy.descriptions}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleUpdate(toy._id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteConfirmation(toy._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {deleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-4">Are you sure you want to delete this toy?</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(deleteConfirmation)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={handleDeleteCancel}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyToysPage;
