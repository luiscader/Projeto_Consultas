'use client';
import React, { useState } from 'react';
import { Logo } from './logo';
import { motion } from 'framer-motion'; // Added for animations

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Service', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Blogs', href: '#' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div>
              <Logo width={254} height={50} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 font-medium text-gray-700"
              >
                {item.label}
                <span className="bg-primary absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            <a href="#" className="rounded-full px-5 py-2 font-bold text-[#007E85]">
              Sign Up
            </a>
            <button className="bg-primary rounded-md px-5 py-2 font-bold text-white shadow-md hover:shadow-lg">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
        className="border-t border-gray-100 bg-white lg:hidden"
      >
        <div className="space-y-1 px-2 pb-4 pt-2">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#"
            className="block rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-300 hover:text-indigo-800"
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.a>
          <motion.a
            href="#"
            className="block rounded-lg bg-indigo-600 px-4 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-indigo-700"
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
