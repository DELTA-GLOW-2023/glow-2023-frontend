import {motion, AnimatePresence} from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const LoadingStep = () => {
  const terminalText = [
    'I’ve seen that one before.',
    'Give me a bit',
    'This is going to take a while so hang in tight.',
    'One sheep, two sheep, three shee-',
    'ah sorry I drifted off.',
    'This is taking a while… resource issues :/',
    'Yea, that about fits with your search history.',
    'Go outside and check your results!',
    'Bye bye :)'
  ];

  const blackScreenVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 3}},
    exit: {opacity: 0, transition: {duration: 1}},
  };

  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        color: "#33FF33"
      }}
    >
      <AnimatePresence>
        <motion.div
          className={'w-full flex justify-center bg-black h-full items-center text-4xl'}
          variants={blackScreenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Typewriter
            onInit={(typewriter) => {
              terminalText.map((x, i) => {
                typewriter.typeString(x).start();

                if (i === 1) {
                  for (let j = 0; j < 10; j++) {
                    typewriter.typeString('t').start();
                    typewriter.pauseFor(400);
                  }
                }
                if (i === 3) {
                  for (let j = 0; j < 14; j++) {
                    j < 7 ? typewriter.typeString('<p class="float">z</p>').start() : typewriter.typeString('<p class="float">Z</p>').start()
                    typewriter.pauseFor(600);
                  }
                }
                typewriter.pauseFor(500);
                typewriter.typeString('<br/>').start();
              })
              typewriter.stop();
            }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingStep;
