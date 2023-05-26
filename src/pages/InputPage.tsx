import React, {FC, useState} from "react";
import {CameraStep} from "../components/steps/camera/CameraStep.tsx";
import {OptionStep} from "../components/steps/option/OptionStep.tsx";
import {BackgroundBlob} from "../components/core/BackgroundBlob.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {ProcessImage} from "../services/processImageService.ts";
import {options} from "../config/options.ts";
import {MdOutlineNavigateNext} from "react-icons/all";
import LoadingStep from "../components/steps/loading/LoadingStep.tsx";

export const InputPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [setting, setSetting] = useState<string>();
  const [actor, setActor] = useState<string>();
  const [style, setStyle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const handlePhotoTaken = async (photoData: string) => {
    setImage(photoData);
    await handleNextStep(photoData);
  };

  const handleNextStep = async (photoData?: string) => {
    if (step + 1 === 5) {
      if (!setting || !actor || !style || !photoData) return;
      setStep(step + 1);
      const imageCropped = photoData.split(",")[1];
      try {
        setLoading(true);
        const response = await ProcessImage(
          imageCropped,
          actor,
          setting,
          style
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      return;
    }
    setStep(step + 1);
  };

  const reset = () => {
    setImage(undefined);
    setSetting(undefined);
    setActor(undefined);
    setStyle(undefined);
    setStep(0);
    setLoading(false);
  };
  const showStep = () => {
    switch (step) {
      case 0:
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
              <motion.p
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                className="text-4xl text-white font-bold text-center"
              >
                Come on in!
              </motion.p>
            </div>
            <motion.button
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className="mt-7 z-10 flex items-center justify-center text-white bg-transparent w-48 h-48 rounded-full backdrop-blur-lg"
              onClick={async () => await handleNextStep()}
            >
              <MdOutlineNavigateNext className={"text-8xl"}/>
            </motion.button>
          </div>
        );
      case 1:
        return (
          <OptionStep
            optionArray={options["actors"]}
            onSelected={setActor}
            onHandleNext={handleNextStep}
            title={"What are you?"}
          />
        );
      case 2:
        return (
          <OptionStep
            optionArray={options["settings"]}
            onSelected={setSetting}
            onHandleNext={handleNextStep}
            title={"Where are you?"}
          />
        );
      case 3:
        return (
          <OptionStep
            optionArray={options["styles"]}
            onSelected={setStyle}
            onHandleNext={handleNextStep}
            title={"Select a style"}
          />
        );
      case 4:
        return <CameraStep onPhotoTaken={handlePhotoTaken} image={image}/>;
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <AnimatePresence>
        <BackgroundBlob>
          {loading ? (
              <LoadingStep reset={reset}/>
          ) : (
            showStep()
          )}
        </BackgroundBlob>
      </AnimatePresence>
    </div>
  );
};
