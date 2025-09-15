import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AllSpots = () => {
  const spots = useLoaderData();

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`https://explore-bd-server-phi.vercel.app/users/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Delete failed");
        Swal.fire("Deleted!", data.message, "success");
        window.location.reload();
      } catch (error) {
        Swal.fire("Error!", error.message, "error");
      }
    }
  };

  const handleUpdate = (id) => (window.location.href = `/update-spot/${id}`);
  const handleViewDetails = (id) => (window.location.href = `/view-spot/${id}`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-teal-600">
        🌍 All Tourist Spots ({spots.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot) => (
          <motion.div
            key={spot._id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden border border-white/20"
          >
            <div className="h-56 overflow-hidden rounded-t-3xl">
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
                {spot.name}
              </h2>

              <div className="flex flex-col gap-2 mt-3">
                {/* View Details */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleViewDetails(spot._id)}
                  className="w-full py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  🔍 View
                </motion.button>

                {/* Update */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleUpdate(spot._id)}
                  className="w-full py-1.5 rounded-md bg-yellow-500 text-white text-sm font-semibold hover:bg-yellow-600 transition"
                >
                  ✏️ Update
                </motion.button>

                {/* Delete */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(spot._id)}
                  className="w-full py-1.5 rounded-md bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
