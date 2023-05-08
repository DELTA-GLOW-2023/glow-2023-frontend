import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <motion.button
      className="z-10 bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
