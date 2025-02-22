import { MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex flex-col p-4">
          <a
            href="#"
            className="flex justify-start text-left space-x-3 hover:underline"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="base-text text-2xl font-semibold whitespace-nowrap ">
              Dule's Repair Shop
            </span>
          </a>
          <p className="base-text p-4">
            This is some text inside a paragraph box.
          </p>
        </div>
        <div className="flex flex-col p-4 items-center">
          <span className="base-text font-extralight text-xl">Contact us</span>
          <ul className="flex flex-col gap-4 py-4 items-center">
            <li>
              <a
                href="https://maps.app.goo.gl/XwrXwk6V96PLvS4W9"
                className="flex items-center"
              >
                <MapPin />

                <span className="base-text text-center font-semibold hover:underline">
                  Miljakovačke Staze, Beograd
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/XwrXwk6V96PLvS4W9"
                className="flex items-center"
              >
                <Phone />
                <span className="base-text text-center font-semibold hover:underline">
                  Miljakovačke Staze, Beograd
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
