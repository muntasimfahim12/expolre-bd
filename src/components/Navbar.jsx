// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/spots", label: "All Spots" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Travel<span className="text-gray-800">Explore</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-indigo-600 font-medium transition ${
                    isActive ? "text-indigo-600 border-b-2 border-indigo-600 pb-1" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex">
            <Link
              to="/add-spot"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Add Spot
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                    isActive ? "bg-indigo-100 text-indigo-600" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/add-spot"
              onClick={() => setIsOpen(false)}
              className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-center hover:bg-indigo-700 transition"
            >
              Add Spot
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
