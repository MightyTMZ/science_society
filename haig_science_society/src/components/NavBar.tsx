"use client";

import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          className="text-xl font-bold text-gray-800"
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "32px",
          }}
        >
          <Link href="/" className="px-5 "><MdHome /></Link>
          {/* <Link href="/chemistry" className="px-5 "><MdOutlineScience /></Link>
          <Link href="/physics" className="px-5 "><GiCatapult /></Link>
          <Link href="/engineering" className="px-5 "><MdEngineering /></Link>
          <Link href="/biology" className="px-5 "><FaDna /></Link> */}
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        {/* <div className="hidden lg:flex space-x-6">
          {departments.map((department) => (
            <a
              key={department.id}
              href={department.reference}
              className="text-gray-700 hover:text-gray-900"
            >
              {department.name}
            </a>
          ))}
        </div> */}
      </div>

      {/* Mobile Navigation Links */}
      {/* <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        {departments.map((department) => (
          <a
            key={department.id}
            href={department.reference}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {department.name}
          </a>
        ))}
      </div> */}
    </nav>
  );
};

export default NavBar;
