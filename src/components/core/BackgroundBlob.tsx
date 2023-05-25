// GradientBackgroundComponent.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const BackgroundBlob: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <motion.div className="fixed inset-0 flex items-center justify-center container-background">
      {children}
    </motion.div>
  );
};
