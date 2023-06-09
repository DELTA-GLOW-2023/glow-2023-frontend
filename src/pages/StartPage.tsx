import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StartPage: FC = () => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <div className={"mt-32"}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl text-white font-bold text-center"
        >
          Hello Glow!
        </motion.h1>
      </div>
      <div className={"flex gap-16 mt-16"}>
        <Link to="/input">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-7 z-10 flex items-center justify-center text-white bg-transparent w-48 h-48 rounded-full backdrop-blur-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl text-white font-bold text-center"
          >
            Start
          </motion.p>
        </motion.button>
        </Link>
      </div>
    </div>
  );
};
