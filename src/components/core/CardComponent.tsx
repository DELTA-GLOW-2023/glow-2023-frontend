import React from "react";
import { motion } from "framer-motion";

export const CardComponent: React.FC<{
  onClick: () => void;
  selectedValue: string | null;
  value: string;
}> = ({ onClick, selectedValue, value }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: -45,
        borderRadius: "0.5rem",
      }}
      animate={{
        opacity: 1,
        rotate: -45,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={`flex justify-center w-48 h-48 text-center transition-colors items-center rounded-2xl shadow-lg cursor-pointer ${
        selectedValue === value ? "bg-purple-600" : "bg-white"
      }`}
    >
      <motion.p
        className={`rotate-45 ${
          selectedValue === value ? "text-white" : "text-purple-600"
        } text-2xl`}
      >
        {value}
      </motion.p>
    </motion.div>
  );
};
