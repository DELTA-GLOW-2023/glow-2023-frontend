import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const BackgroundBlob: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <motion.div className="overflow-x-hidden inset-0 container-background">
      {children}
    </motion.div>
  );
};
