import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [spot, setSpot] = useState({
    name: "",
    country: "",
    location: "",
    price: "",
    season: "",
    image: "",
  });

  // Load current spot data
  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setSpot({ ...spot, [e.target.name]: e.target.value });
  };

  // Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...spotData } = spot; // Remove _id
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spotData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");

      Swal.fire(
        "Updated!",
        "The spot has been updated successfully.",
        "success"
      );
      navigate("/spots"); // Redirect to all spots
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Spot</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={spot.name}
            onChange={handleChange}
            placeholder="Spot Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="country"
            value={spot.country}
            onChange={handleChange}
            placeholder="Country"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="location"
            value={spot.location}
            onChange={handleChange}
            placeholder="Location"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="price"
            value={spot.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="season"
            value={spot.season}
            onChange={handleChange}
            placeholder="Best Season"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="image"
            value={spot.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          >
            Update Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
