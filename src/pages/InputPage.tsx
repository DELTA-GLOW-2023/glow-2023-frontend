import React, { FC, useState } from "react";
import { CameraStep } from "../components/steps/camera/CameraStep.tsx";
import { OptionStep } from "../components/steps/option/OptionStep.tsx";
import { BackgroundBlob } from "../components/core/BackgroundBlob.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { ProcessImage } from "../services/processImageService.ts";
import { actors, settings, styles } from "../assets/options.json";

export const InputPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [setting, setSetting] = useState<string>();
  const [actor, setActor] = useState<string>();
  const [style, setStyle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const handlePhotoTaken = async (photoData: string) => {
    setImage(photoData);
    await handleNextStep();
  };

  const handleNextStep = async () => {
    if (step + 1 === 4) {
      if (!setting || !actor || !style || !image) return;
      setStep(step + 1);
      const imageCropped = image.split(",")[1];
      try {
        setLoading(true);
        const response = await ProcessImage(
          imageCropped,
          actor,
          setting,
          style
        );
        console.log(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
      reset();
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
        return <CameraStep onPhotoTaken={handlePhotoTaken} image={image} />;
      case 1:
        return (
          <OptionStep
            optionArray={settings}
            onSelected={setSetting}
            onHandleNext={handleNextStep}
            title={"Where are you?"}
          />
        );
      case 2:
        return (
          <OptionStep
            optionArray={actors}
            onSelected={setActor}
            onHandleNext={handleNextStep}
            title={"What are you?"}
          />
        );
      case 3:
        return (
          <OptionStep
            optionArray={styles}
            onSelected={setStyle}
            onHandleNext={handleNextStep}
            title={"Select a style"}
          />
        );
    }
  };

  const textVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const textTransition = {
    duration: 0.5,
    yoyo: Infinity,
  };

  return (
    <div className="relative w-screen h-screen">
      <AnimatePresence>
        <BackgroundBlob>
          {loading ? (
            <motion.div>
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={textTransition}
              >
                Generating your image.
              </motion.h2>
            </motion.div>
          ) : (
            showStep()
          )}
        </BackgroundBlob>
      </AnimatePresence>
    </div>
  );
};
