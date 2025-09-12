import React from "react";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div className="relative bg-gray-50">
      {/* Background Pattern */}
   <Navbar/>
   

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Explore the World Your Way
              </h1>
              <p className="mt-4 text-lg text-gray-600 sm:mt-6">
                Discover magical destinations, plan your dream trips, and create
                memories that last forever. TravelExplore makes travel
                effortless and unforgettable.
              </p>

              {/* Email Signup */}
              <form action="#" method="POST" className="mt-8 sm:mt-10">
                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-teal-500">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent outline-none sm:border-none sm:focus:ring-0 sm:focus:border-transparent rounded-xl"
                    required
                  />
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <button
                      type="submit"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </form>

              {/* Stats */}
              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    150+
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Destinations <br /> Explored
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    $5M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Trips <br /> Booked
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Travel Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


