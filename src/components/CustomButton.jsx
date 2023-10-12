import React from "react";

import { motion } from "framer-motion";
import { btnVariants } from "../utils/variants";

import Loader from "./Loader";

export default function CustomButton({ isSubmitting }) {
  return (
    <motion.button
      className="w-full h-10 font-bold bg-[#4299e1] rounded disabled:opacity-50"
      variants={btnVariants}
      whileHover="whileHover"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Loader /> : "Submit"}
    </motion.button>
  );
}
