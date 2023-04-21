import { motion } from "framer-motion";
import Button from "../components/Button.tsx";

export const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-6xl font-bold text-center mb-12"
      >
        Hello Glow!
      </motion.h1>
      <Button
        label="Click me!"
        onClick={() => console.log("Button clicked!")}
      />
    </div>
  );
};

export default HomePage;
