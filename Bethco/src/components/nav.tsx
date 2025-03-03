import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-2">
      <div className="container mx-auto px-4 py-4 flex justify-between md:justify-center items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 md:absolute md:left-4"
        >
          BethCO
        </Link>

        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Programs", "Projects", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-blue-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            )
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {["Home", "About", "Programs", "Projects", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
