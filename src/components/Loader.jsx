import React from "react";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center space-x-1.5">
      <motion.span
        className="inline-block w-3 h-3 bg-white rounded-full"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></motion.span>
      <motion.span
        className="inline-block w-3 h-3 bg-white rounded-full"
        animate={{
          scale: [1.15, 0.85],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></motion.span>
      <motion.span
        className="inline-block w-3 h-3 bg-white rounded-full"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></motion.span>
    </div>
  );
}
