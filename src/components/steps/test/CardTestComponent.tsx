import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

export const CardTestComponent: React.FC<{
  onClick: () => void;
  icon: IconType;
  selectedValue: string;
  value: string;
}> = ({ onClick, icon, selectedValue, value }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={`cursor-pointer  w-48 h-36 flex justify-center items-center rounded-2xl border-4  ${
        selectedValue === value ? "border-blue-500" : "border-white"
      }`}
    >
      {React.createElement(icon, { className: "text-6xl text-white" })}
    </motion.div>
  );
};
