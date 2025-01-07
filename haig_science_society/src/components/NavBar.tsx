"use client";

import React, { useState } from "react";
import { departments } from "./departments";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { MdOutlineBiotech } from "react-icons/md";
import { FcBiotech } from "react-icons/fc";
import { GiCatapult } from "react-icons/gi";
import { GiNuclearBomb } from "react-icons/gi";

import Link from "next/link";
import { SlChemistry } from "react-icons/sl";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800"
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "32px",
          }}
        >
          <GiMaterialsScience />
          <MdOutlineScience />
          <GiCatapult />
          <MdEngineering />
          <MdOutlineBiotech />
          <GiNuclearBomb />
          <FcBiotech />
          <SlChemistry />
        </Link>

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
        <div className="hidden lg:flex space-x-6">
          {departments.map((department) => (
            <a
              key={department.id}
              href={department.reference}
              className="text-gray-700 hover:text-gray-900"
            >
              {department.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        {departments.map((department) => (
          <a
            key={department.id}
            href={department.reference}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {department.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
