import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as gfg } from "../assets/gfg.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-8">
      <div className="flex items-center justify-between py-4">

        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src={gfg} alt="Logo" className="w-10 h-10" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Products
          </Link>
          <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Resources
          </Link>
          <Link to="/developers" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Developers
          </Link>
          <Link to="/app" className="px-4 py-2 bg-black text-white rounded-full transition-colors duration-200 hover:bg-gray-800 flex items-center justify-center" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Open App
          </Link>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                Products
              </Link>
              <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                Resources
              </Link>
              <Link to="/developers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                Developers
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 bg-black text-white rounded-full transition-colors duration-200 hover:bg-gray-800 flex items-center justify-center">
                Open App
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
