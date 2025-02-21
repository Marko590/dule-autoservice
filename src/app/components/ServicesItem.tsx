import { Wrench } from "lucide-react";
import React, { ReactNode } from "react";

const ServicesItem = ({
  icon,
  content,
}: {
  icon: ReactNode;
  content: string;
}) => {
  return (
    <div className="flex h-full flex-col gap-4 p-4 items-center bg-background-primary opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out">
      {icon}
      <p className="text-center font-sans">{content}</p>
    </div>
  );
};

export default ServicesItem;
