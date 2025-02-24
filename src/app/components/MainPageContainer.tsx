"use client";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";
const MainPageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={clsx(
        "h-[100vh] w-full shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default MainPageContainer;
