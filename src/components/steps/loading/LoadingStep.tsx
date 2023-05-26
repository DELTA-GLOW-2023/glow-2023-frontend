import {motion, AnimatePresence} from "framer-motion";
import React, {useState, useEffect} from "react";
import Typewriter from "typewriter-effect";

const LoadingStep = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalText = [
    'I’ve seen that one before.',
    'Give me a bit',
    'This is gonna take a while so hang in tight.',
    'One sheep, two sheep, three shee-',
    'ah sorry I drifted off.',
    'This is taking a while… resource issues :/',
    'Yea, that about fits with your search history.',
    'Go outside and check your results!',
    'Bye bye :)'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTerminal(true);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  const textVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  };

  const textTransition = {
    duration: 0.5,
    yoyo: Infinity,
  };

  const circleVariants = {
    initial: {scale: 0.01, rotate: 0, opacity: 4},
    animate: {scale: 1, rotate: 360, transition: {duration: 2}},
    exit: {scale: 0, opacity: 0, transition: {duration: 1}},
  };

  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "black",
        color: "white"
      }}
    >
      {!showTerminal && (
        <motion.svg
          variants={circleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          width="150"
          height="150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="75" cy="75" r="75" fill="white"/>
        </motion.svg>
      )}

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={textTransition}
            className={'w-full flex justify-center'}
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
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingStep;
