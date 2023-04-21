import { FunctionComponent } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
