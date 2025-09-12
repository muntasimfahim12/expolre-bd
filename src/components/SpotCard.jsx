import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { data } from "react-router-dom";
const SpotCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    location: "",
    description: "",
    image: "",
    price: "",
    season: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // send data to the server or API here
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    Swal.fire({
      title: "success!",
      text: "users added successfully",
      icon: "success",
      confirmButtonText: "Cool",
    }).catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
          ✨ Add a New Travel Spot
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Spot Name */}
          <div className="col-span-2">
            <label className="text-white font-medium">Spot Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter spot name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-white font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-white font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="text-white font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 h-28"
              required
            />
          </div>

          {/* Image URL */}
          <div className="col-span-2">
            <label className="text-white font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-white font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Season */}
          <div>
            <label className="text-white font-medium">Best Season</label>
            <input
              type="text"
              name="season"
              placeholder="e.g. Summer, Winter"
              value={formData.season}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-white/40 bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-lg hover:opacity-90 transition-all"
            >
              🚀 Add Spot
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SpotCard;
