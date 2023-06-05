import React from "react";
import { motion } from "framer-motion";

export const CardComponent: React.FC<{
  onClick: () => void;
  emoji: string;
}> = ({ onClick, emoji }) => {
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
        "cursor-pointer  w-48 h-36 flex justify-center items-center rounded-2xl border-4 border-[#072837]"
      }
    >
      {emoji}
    </motion.div>
  );
};
