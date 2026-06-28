"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Pleasant Studio
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="#services"
            className="transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="#portfolio"
            className="transition hover:text-blue-600"
          >
            Portfolio
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Button */}
        <Link
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:block"
        >
          Get Quote
        </Link>

      </div>
    </nav>
  );
}