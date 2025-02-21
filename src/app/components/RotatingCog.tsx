"use client";
import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Cog } from "lucide-react";
import React from "react";

const RotatingCog = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div style={{ rotate }} className="flex justify-center items-center">
      <Cog className={clsx("origin-center text-primary", className)} />
    </motion.div>
  );
};

export default RotatingCog;
