import React, {FC, useState} from "react";
import {CameraStep} from "../components/steps/camera/CameraStep.tsx";
import {OptionStep} from "../components/steps/option/OptionStep.tsx";
import {GradientBackgroundComponent} from "../components/core/GradientBackgroundComponent.tsx";
import {AnimatePresence} from "framer-motion";
import {ProcessImage} from "../services/processImageService.ts";
import {styles, actors, settings} from "../assets/options.json";

export const InputPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [setting, setSetting] = useState<string>();
  const [actor, setActor] = useState<string>();
  const [style, setStyle] = useState<string>();
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
        const response = await ProcessImage(
          imageCropped,
          actor,
          setting,
          style
        );
        console.log(response)
      } catch (e) {
        console.log(e)
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
  }

  return (
    <div className="relative w-screen h-screen">
      <AnimatePresence>
        <GradientBackgroundComponent>
          {step === 0 && (
            <CameraStep onPhotoTaken={handlePhotoTaken} image={image}/>
          )}
          {step === 1 && (
            <OptionStep
              optionArray={settings}
              onSelected={setSetting}
              onHandleNext={handleNextStep}
              title={"Where are you?"}
            />
          )}
          {step === 2 && (
            <OptionStep
              optionArray={actors}
              onSelected={setActor}
              onHandleNext={handleNextStep}
              title={"What are you?"}
            />
          )}
          {step === 3 && (
            <OptionStep
              optionArray={styles}
              onSelected={setStyle}
              onHandleNext={handleNextStep}
              title={"Select a style"}
            />
          )}
        </GradientBackgroundComponent>
      </AnimatePresence>
    </div>
  );
};
