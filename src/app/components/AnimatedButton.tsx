import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type AnimationType = "ping" | "spin" | "pulse" | "none" | "bounce";
const AnimatedButton = ({
  text,
  icon,
  animationType,
}: {
  text: string;
  icon?: ReactNode;
  animationType?: AnimationType;
}) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      transition={{ ease: "linear", duration: 0.3 }}
      className="group flex items-center gap-4 w-[40%] justify-center border-primary border-2 px-6 py-2 text-primary-text rounded-3xl transition-all duration-300 hover:bg-primary"
    >
      <motion.div className={`group-hover:animate-${animationType}`}>
        {icon}
      </motion.div>
      <span className="font-extralight uppercase text-lg lg:text-2xl  ">
        {text}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
