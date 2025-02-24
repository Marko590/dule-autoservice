import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const AnimatedParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      initial={{ x: -150 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="base-text text-l md:text-xl"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedParagraph;
