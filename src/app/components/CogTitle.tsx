import React from "react";
import RotatingCog from "./RotatingCog";

const CogTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative flex flex-col items-center p-6">
      <span className="base-text font-sans text-5xl md:text-6xl">{title}</span>
      <div className="absolute flex top-16 md:top-20 left-0 right-0 justify-center items-start">
        <RotatingCog className="w-12 md:w-14 h-12 md:h-14 mx-[-4px] md:mx-[-5px]" />
        <RotatingCog
          className="w-12 md:w-14 h-12 md:h-14 mx-[-4px] md:mx-[-5px]"
          reverse
        />
        <RotatingCog className="w-12 md:w-14 h-12 md:h-14 mx-[-4px] md:mx-[-5px]" />
        <RotatingCog
          className="w-12 md:w-14 h-12 md:h-14 mx-[-4px] md:mx-[-5px]"
          reverse
        />
        <RotatingCog className="w-12 md:w-14 h-12 md:h-14 mx-[-4px] md:mx-[-5px]" />
      </div>
    </div>
  );
};

export default CogTitle;
