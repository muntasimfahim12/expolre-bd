// src/pages/ViewSpotDetails.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ViewSpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    fetch(`https://explore-bd-server-phi.vercel.app/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Spot not found");
        return res.json();
      })
      .then((data) => setSpot(data))
      .catch((err) => Swal.fire("Error!", err.message, "error"));
  }, [id]);

  if (!spot) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300">
        <p className="text-gray-700 text-xl animate-pulse">
          Loading magical spot details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-white to-blue-50 py-12 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
      >
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {spot.name}
            </h1>
          </div>
        </div>

        {/* Spot Details */}
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex flex-col gap-4"
          >
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <p className="font-semibold text-gray-700">
                <span className="text-teal-600 font-bold">Country:</span>{" "}
                {spot.country}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <p className="font-semibold text-gray-700">
                <span className="text-purple-600 font-bold">Location:</span>{" "}
                {spot.location}
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <p className="font-semibold text-gray-700">
                <span className="text-yellow-600 font-bold">Price:</span> $
                {spot.price}
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-200 p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <p className="font-semibold text-gray-700">
                <span className="text-green-600 font-bold">Best Season:</span>{" "}
                {spot.season}
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-teal-600 mb-4">
              About this Spot
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {spot.description || "No description available."}
            </p>
          </motion.div>
        </div>

        {/* Go Back Button */}
        <div className="px-8 pb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="w-full md:w-1/3 py-3 bg-teal-500 text-white font-bold rounded-xl shadow-lg hover:bg-teal-600 transition"
          >
            🔙 Go Back
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewSpotDetails;
