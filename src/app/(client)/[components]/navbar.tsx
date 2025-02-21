"use client";
import React, { useState } from "react";
import { Logo } from "./logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Logo width={254} height={50} />
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Service
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Help
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Blogs
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 px-4 py-2 text-sm font-medium transition duration-300"
            >
              Sign Up
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Service
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Help
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </a>
          <a
            href="#"
            className="block text-indigo-600 hover:text-indigo-800 px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
