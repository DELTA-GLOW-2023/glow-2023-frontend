import React, { FC } from "react";
import { BackgroundBlob } from "../components/core/BackgroundBlob.tsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../assets/StartScreenExplanation.png";

export const StartPage: FC = () => {
  return (
    <BackgroundBlob>
      <div className={"glass-light justify-center w-screen h-screen absolute"}>
        <img
          alt={"icon"}
          src={image}
          className={"w-screen h-screen"}
          style={{ strokeWidth: 6 }}
        />
      </div>
      <div className={"grid h-screen w-screen z-30 absolute"}>
        <div className={"flex flex-col items-center mt-64 p-4"}>
          <Link className={"mt-[10rem]"} to="/input">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-10 flex items-center justify-center text-white bg-cyan-600 w-64 h-64 rounded-full backdrop-blur-lg"
            >
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="secondary-font text-7xl text-white text-center"
              >
                Start
              </motion.p>
            </motion.button>
          </Link>
          <div />
        </div>
      </div>
    </BackgroundBlob>
  );
};
