import { motion } from "framer-motion";

export const DisplayPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-6xl text-gray-900 font-bold text-center mb-12"
      >
        Hello Glow!
      </motion.h1>
    </div>
  );
};

export default DisplayPage;
