import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">
            Bethsaida Charity Organization
          </h2>
          <p className="mt-2 text-gray-200">
            Empowering orphans, vulnerable children, youth, and women through
            social and capacity-building interventions.
          </p>
          <p className="mt-2">
            📍 Tullu Dimtu, Woreda 13, Akaki Kality, Addis Ababa
          </p>
          <p>📞 +251 911 05 76 06 / 0969 588 131</p>
          <p>
            📧{" "}
            <a
              href="mailto:bethsaida.addis@gmail.com"
              className="text-yellow-300 hover:underline"
            >
              bethsaida.addis@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="hover:text-yellow-300 transition-colors"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="hover:text-yellow-300 transition-colors"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Newsletter</h2>
          <p className="mt-2 text-gray-200 outline-white">
            Subscribe to our newsletter and receive the latest updates.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-500 text-gray-900"
            >
              Subscribe
            </button>
          </form>

          {/* Map (Placeholder, replace with actual location) */}
          <div className="mt-6">
            <iframe
              title="BethCO Location"
              className="w-full h-40 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.817448569392!2d38.7637!3d9.0031"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-blue-600 pt-4 text-gray-300">
        <p>© 2025 Bethsaida Charity Organization. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
