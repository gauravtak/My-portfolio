"use client";

import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" style={{ borderBottom: '2px solid #1e3a8a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link className="flex items-center space-x-2 text-gray-900 hover:text-gray-700 font-bold text-xl" href="/">
            <TiHome className="text-2xl" />
            <span>Gaurav</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors">
              Contact
            </Link>
            <Link href="/blogs" className="text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors">
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-900 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-gray-700 font-medium text-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-900 hover:text-gray-700 font-medium text-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-900 hover:text-gray-700 font-medium text-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link 
                href="/blogs" 
                className="text-gray-900 hover:text-gray-700 font-medium text-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
