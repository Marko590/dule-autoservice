"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-full flex flex-wrap items-center md:items-start justify-between absolute top-0 left-0 right-0 p-4 pb-0 md:p-8 md:pb-0 z-10">
        <div className="flex gap-2 items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl md:text-3xl font-semibold whitespace-nowrap text-primary-text">
            Dule Autoservis
          </span>
        </div>
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-soft-gray rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="w-8 h-8" />
        </button>

        {/* Navbar Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex gap-4 flex-col md:flex-row text-l font-extrabold p-4 mt-4 border border-gray-700 rounded-lg bg-deep-grayish-blue md:bg-transparent  md:mt-0 md:border-0 uppercase">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary-text rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary-text rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary-text rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary-text rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
