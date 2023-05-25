import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

export const CardComponent: React.FC<{
  onClick: () => void;
  icon: IconType;
}> = ({ onClick, icon }) => {
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
      className={
        "cursor-pointer backdrop-blur-lg w-48 h-36 flex justify-center items-center rounded-2xl border-2"
      }
    >
      {React.createElement(icon, { className: "text-6xl text-white" })}
    </motion.div>
  );
};
