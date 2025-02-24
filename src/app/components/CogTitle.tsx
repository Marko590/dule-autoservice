import React from "react";
import RotatingCog from "./RotatingCog";

const CogTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative flex flex-col items-center p-6">
      <span className="base-text font-sans text-4xl">{title}</span>
      <div className="absolute flex top-16 left-0 right-0 justify-center items-start">
        <RotatingCog className="w-10 h-10 mx-[-4px]" />
        <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
        <RotatingCog className="w-10 h-10 mx-[-4px]" />
        <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
        <RotatingCog className="w-10 h-10 mx-[-4px]" />
      </div>
    </div>
  );
};

export default CogTitle;
