import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ServicesItem = ({
  icon,
  content,
}: {
  icon: ReactNode;
  content: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-xl flex flex-col gap-4 p-4 items-center bg-background-primary flex-grow "
    >
      {icon}

      <p className="text-center lg:text-xl font-sans">{content}</p>
    </motion.div>
  );
};

export default ServicesItem;
