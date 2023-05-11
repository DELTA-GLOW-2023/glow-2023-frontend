import React, { FC, useState } from "react";
import { CameraStep } from "../components/steps/camera/CameraStep.tsx";
import { OptionStep } from "../components/steps/option/OptionStep.tsx";
import { GradientBackgroundComponent } from "../components/core/GradientBackgroundComponent.tsx";
import { AnimatePresence } from "framer-motion";
import { UploadImage } from "../services/uploadImageService.ts";
import { ImagePreviewStep } from "../components/steps/imagePreview/ImagePreview.tsx";
import {styles, actors, settings} from "../assets/options.json";

export const InputPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [setting, setSetting] = useState<string>();
  const [actor, setActor] = useState<string>();
  const [style, setStyle] = useState<string>();
  const [processedImage, setProcessedImage] = useState<string>();
  const [error, setError] = useState<string>();

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
        const response = await UploadImage(
          imageCropped,
          actor,
          setting,
          style
        );
        setProcessedImage(response.image);
      } catch (e) {
        setError("Whoops Something went wrong!");
      }
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="relative w-screen h-screen">
      <AnimatePresence>
        <GradientBackgroundComponent>
          {step === 0 && (
            <CameraStep onPhotoTaken={handlePhotoTaken} image={image} />
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
          {step === 4 && (
            <ImagePreviewStep
              error={error}
              image={processedImage}
              handleDenyImage={() => {
                setImage(undefined);
                setSetting(undefined);
                setActor(undefined);
                setStyle(undefined);
                setProcessedImage(undefined);
                setError(undefined);
                setStep(0);
              }}
              handleApproveImage={console.log}
            />
          )}
        </GradientBackgroundComponent>
      </AnimatePresence>
    </div>
  );
};
