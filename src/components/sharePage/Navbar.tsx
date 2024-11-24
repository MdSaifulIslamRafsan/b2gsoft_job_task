"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { IoBagOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigation links
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "What's Now", href: "/whats-now" },
  ];

  return (
    <nav className="bg-[#F5F3FF] fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-14 flex items-center justify-between h-16">
        <div className="flex gap-4 items-center">
          {/* Menu Icon - Small Screens */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <HiMiniBars3BottomLeft className="text-2xl" />}
          </div>
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image src="/assets/We5ive.png" width={60} height={20} alt="logo" />
          </Link>
        </div>

        {/* Links - Large Screens */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-primary-700">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search - Large Screens */}
          <div className={`relative ${isSearchOpen ? 'block' : 'hidden'} lg:flex items-center`}>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-2 pl-10 pr-2 w-40 lg:w-60 focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
          </div>
          {!isSearchOpen && (
            <FaSearch
              className="lg:hidden text-2xl cursor-pointer"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            />
          )}

          {/* Cart */}
          <div className="relative cursor-pointer">
            <IoBagOutline className="text-2xl" />
            <span className="absolute -top-3 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          {/* User Icon */}
          <FaUser className="cursor-pointer text-2xl" />
        </div>
      </div>

      {/* Links - Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="block px-4 py-2 hover:bg-gray-200">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
