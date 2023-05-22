import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, photoURL, toyName, price } = toy;
  const fakeRating = Math.floor(Math.random() * 5) + 1;

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (toyId) => {
    if (!user) {
      setShowModal(true);
    } else {
      navigate(`/toys/${toyId}`);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <div className="card bg-base-200 shadow-xl grid grid-cols-2">
      <div>
        <img src={photoURL} alt="Toy" className="object-cover w-full h-48" />
      </div>
      <div className="p-4">
        <h2 className="card-title font-bold">{toyName}</h2>
        <div className="mb-2">
          <p className="text-md font-semibold">Price: ${price}</p>
          <div className="flex items-center gap-2">
            <strong>Rating:</strong>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="text-xs ml-2">{fakeRating.toFixed(1)}</span>
          </div>
        </div>
        <div className="card-actions justify-center items-end">
          <button
            onClick={() => handleViewDetails(_id)}
            className="btn btn-sm btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <p className="mb-4">You have to log in first to view details</p>
            <div className="flex justify-end">
              <button
                onClick={() => closeModal(showModal)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
              >
                Login 
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyCard;
