"use client";
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { IoBagOutline } from 'react-icons/io5';

interface NavLinkType {
  name: string;
  href: string;
};

interface DropdownItemType  {
  label: string;
  action?: () => void;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const dropDownRef: RefObject<HTMLDivElement> = useRef(null);

  const links: NavLinkType[] = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "What's Now", href: "/whats-now" },
  ];

  const items: DropdownItemType[] = [
    { label: "Profile" },
    { label: "Dashboard" },
    { label: "Settings" },
    { label: "Log Out", action: () => console.log("Logged out") },
  ];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, []);

  return (
    <nav className="bg-[#F5F3FF] fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-14 flex items-center justify-between h-16">
        <div className="flex gap-4 items-center">
          <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <HiMiniBars3BottomLeft className="text-2xl" />}
          </div>
          <Link href="/" className="text-xl font-bold">
            <Image src="/assets/We5ive.png" width={80} height={40} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link: NavLinkType) => (
            <Link key={link.name} href={link.href} className="hover:text-primary-700 font-manrope">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className={`relative ${isSearchOpen ? "block" : "hidden"} lg:flex items-center`}>
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
          <div className="relative cursor-pointer">
            <IoBagOutline className="text-2xl" />
            <span className="absolute -top-3 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
            <button onClick={() => setOpen((prev) => !prev)}>
              <FaUser className="cursor-pointer text-2xl" />
            </button>
            <ul className={`absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md ${open ? "visible" : "invisible"}`}>
              {items.map((item: DropdownItemType, idx: number) => (
                <li
                  key={idx}
                  className={`rounded-sm px-6 py-2 ${item.label === "Log Out" ? "text-red-500 hover:bg-red-600 hover:text-white" : "hover:bg-slate-300"}`}
                  onClick={item.action}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100">
          {links.map((link: NavLinkType) => (
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
