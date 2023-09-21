import React from "react";
import { motion } from "framer-motion";

export const CardComponent: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={
        "cursor-pointer w-full h-48 flex justify-center items-center rounded-2xl icon-container"
      }
    >
      {children}
    </motion.div>
  );
};
