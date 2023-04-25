import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button.tsx";

export const InputPage: FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-6xl font-bold text-center mb-12"
      >
        Hello Glow!
      </motion.h1>
      <Button onClick={console.log}>Click me</Button>
    </div>
  );
};
