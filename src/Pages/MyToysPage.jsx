import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TopNav from "../components/shared/TopNav";
import Footer from "../components/shared/Footer";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { BsFilter } from "react-icons/bs";

const MyToysPage = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [toyToDelete, setToyToDelete] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateToyId, setUpdateToyId] = useState(null);
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateDescriptions, setUpdateDescriptions] = useState("");
  const [updateAvailableQuantity, setUpdateAvailableQuantity] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order is ascending

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get(
          `https://marvel-mart-m-sabid.vercel.app/api/my-toys?email=${user.email}`
        );
        setToys(response.data.toys);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching toys:", error);
        setIsLoading(false);
      }
    };

    fetchToys();
  }, [user.email]);

  const handleDelete = (id) => {
    setShowModal(true);
    setToyToDelete(id);
  };

  const confirmDelete = () => {
    axios
      .delete(`https://marvel-mart-m-sabid.vercel.app/api/toys/${toyToDelete}`)
      .then(() => {
        const remaining = toys.filter((toy) => toy._id !== toyToDelete);
        setToys(remaining);
        setShowModal(false);
        setToyToDelete(null);
        toast.warn("Deleted toy...");
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
        setShowModal(false);
        setToyToDelete(null);
      });
  };

  const cancelDelete = () => {
    setShowModal(false);
    setToyToDelete(null);
  };

  const handleUpdate = (id) => {
    const toy = toys.find((toy) => toy._id === id);
    setUpdateToyId(id);
    setUpdatePrice(toy.price);
    setUpdateDescriptions(toy.descriptions);
    setUpdateAvailableQuantity(toy.quantity);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const updatedToy = {
      price: updatePrice,
      descriptions: updateDescriptions,
      quantity: updateAvailableQuantity,
    };

    try {
      await axios.patch(
        `https://marvel-mart-m-sabid.vercel.app/api/toys/${updateToyId}`,
        updatedToy
      );

      setToys((prevToys) =>
        prevToys.map((toy) =>
          toy._id === updateToyId ? { ...toy, ...updatedToy } : toy
        )
      );

      setIsUpdateModalOpen(false);
      toast.success("Toy updated successfully");
    } catch (error) {
      console.error("Error updating toy:", error);
      setIsUpdateModalOpen(false);
    }
  };

  const handleSort = () => {
    const sortedToys = [...toys].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setToys(sortedToys);
  };

  return (
    <>
      <TopNav />
      <ToastContainer />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Toys</h1>

        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="loader"></div>
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Seller</th>
                <th className="px-4 py-2 border-b">Toy Name</th>
                <th className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <button
                      className="text-blue-500 underline mr-1"
                      onClick={handleSort}
                    >
                      Price
                    </button>
                    <BsFilter className="text-gray-500" />
                  </div>
                </th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} className="text-center">
                  <td className="px-4 py-2 border-b">{toy.seller}</td>
                  <td className="px-4 py-2 border-b">{toy.toyName}</td>
                  <td className="px-4 py-2 border-b">{toy.price}</td>
                  <td className="px-4 py-2 border-b">{toy.quantity}</td>
                  <td className="px-4 py-2 border-b">
                    {toy.descriptions.slice(0, 10)}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                      onClick={() => handleUpdate(toy._id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                      onClick={() => handleDelete(toy._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-4">Are you sure you want to delete this toy?</p>
              <div className="flex justify-end">
                <button
                  onClick={() => confirmDelete(showModal)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {isUpdateModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Update Toy</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    value={updatePrice}
                    onChange={(e) => setUpdatePrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="descriptions"
                  >
                    Descriptions
                  </label>
                  <textarea
                    id="descriptions"
                    value={updateDescriptions}
                    onChange={(e) => setUpdateDescriptions(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={updateAvailableQuantity}
                    onChange={(e) => setUpdateAvailableQuantity(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleUpdateSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyToysPage;
