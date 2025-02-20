import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-md min-h-screen flex flex-col bg-background-primary">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
