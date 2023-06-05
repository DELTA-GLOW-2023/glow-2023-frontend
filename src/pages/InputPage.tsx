import React, {FC, useState} from "react";
import {BackgroundBlob} from "../components/core/BackgroundBlob.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {OptionStep} from "../components/steps/option/OptionStep.tsx";

export const InputPage: FC = () => {
  const [step, setStep] = useState('start');
  // const [image, setImage] = useState<string>();
  // const [loading, setLoading] = useState<boolean>(false);

  // const handlePhotoTaken = async (photoData: string) => {
  //     setImage(photoData);
  //     await handleNextStep(photoData);
  // };

  const reset = () => {
    // setImage(undefined);
    setStep('start');
  };

  const showStep = () => {
    switch (step) {
      case 'start':
        return (
          <div className={"flex flex-col items-center justify-center h-screen"}>
            <div className={"mt-32"}>
              <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                className="text-8xl text-white font-bold text-center"
              >
                Hello Glow!
              </motion.h1>

            </div>
            <div className={"flex gap-16 mt-16"}>
              <motion.button
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="mt-7 z-10 flex items-center justify-center text-white bg-transparent w-48 h-48 rounded-full backdrop-blur-lg"
                onClick={() => setStep('icon')}
              >
                <motion.p
                  initial={{opacity: 0, y: -50}}
                  animate={{opacity: 1, y: 0}}
                  className="text-4xl text-white font-bold text-center"
                >
                  Start
                </motion.p>
              </motion.button>

            </div>
          </div>
        );
      case 'text':
        return (
          <OptionStep variant={'text'} onHandleNext={reset} setStep={setStep}/>
        );
      case 'icon':
        return (
          <OptionStep variant={'icon'} onHandleNext={reset} setStep={setStep}/>
        );
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <BackgroundBlob>
          {showStep()}
        </BackgroundBlob>
      </AnimatePresence>
    </div>
  );
};
