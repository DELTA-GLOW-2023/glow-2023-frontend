import React, {FC} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const StartPage: FC = () => {
  return (
    <div className={"grid h-screen"}>
      <div className={'flex flex-col items-center mt-32'}>
        <motion.h1
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          className="text-[170px] text-white font-bold text-center"
        >
          Hello Glow!
        </motion.h1>
        <Link className={"mt-[32rem]"} to="/input">
          <motion.button
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className="z-10 flex items-center justify-center text-white bg-transparent w-64 h-64 rounded-full backdrop-blur-lg"
          >
            <motion.p
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              className="text-6xl text-white font-bold text-center"
            >
              Start
            </motion.p>
          </motion.button>
        </Link>
        <div/>
      </div>

    </div>
  );
};
