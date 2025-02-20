import clsx from "clsx";
import React, { ReactNode } from "react";

const MainPageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MainPageContainer;
