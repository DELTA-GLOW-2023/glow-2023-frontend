import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

export const CardComponent: React.FC<{
  onClick: () => void;
  selectedValue: string | null;
  value: IconType;
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
    ></motion.div>
  );
};
