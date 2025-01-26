import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <nav className="bg-indigo-950 text-white py-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold ml-2">
            My Portfolio
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white text-xl"></i>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className="flex items-center text-white hover:text-gray-300 transition mx-1"
            >
              <i className="far fa-copy mr-2"></i>Home
            </Link>
            <Link
              to="/about"
              className="flex items-center text-white hover:text-gray-300 transition mx-1"
            >
              <i className="far fa-clone mr-2"></i>About
            </Link>
            <Link
              to="/contact"
              className="flex items-center text-white hover:text-gray-300 transition mx-1 pr-5"
            >
              <i className="far fa-calendar-alt mr-2"></i>Contact
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
