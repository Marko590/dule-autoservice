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
            <span className="base-text text-3xl font-semibold whitespace-nowrap ">
              Dule Autoservis
            </span>
          </a>
          <p className="base-text p-4">
            This is some text inside a paragraph box. It will wrap and break if
            it's too long for the box, preventing overflow. You can add more
            text here to see how it behaves when it exceeds the height of the
            box.
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
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 12 7 12s7-6.75 7-12c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="currentColor"
                  />
                </svg>
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
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 15.5c-1.1 0-2.2-.2-3.2-.6a1.99 1.99 0 0 0-2.1.4l-1.5 1.5c-2.7-1.2-5-3.4-6.2-6.2l1.5-1.5a2 2 0 0 0 .4-2.1c-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H4C2.9 2 2 2.9 2 4c0 9.4 7.6 17 17 17 1.1 0 2-.9 2-2v-2.5c0-.8-.7-1.5-1.5-1.5z"
                    fill="currentColor"
                  />
                </svg>
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
