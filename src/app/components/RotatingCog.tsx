"use client";
import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Cog } from "lucide-react";
import React from "react";

const RotatingCog = ({
  className,
  reverse,
}: {
  className?: string;
  reverse?: boolean;
}) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [720, 0] : [15, 735],
  );

  return (
    <motion.div
      style={{ rotate }}
      initial={{ scale: 0, y: 0 }}
      whileInView={{ scale: 1, y: [0, 150, -150, -150, 0] }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        times: [0, 0.25, 0.5, 0.65, 1],
      }}
      className="flex justify-center items-center"
    >
      <Cog className={clsx("origin-center text-primary", className)} />
    </motion.div>
  );
};

export default RotatingCog;
