import React from "react";
import NavBar from "./NavBar";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      <footer className="p-4 bg-gray-200">Footer</footer>
    </div>
  );
};

export default PageWrapper;
