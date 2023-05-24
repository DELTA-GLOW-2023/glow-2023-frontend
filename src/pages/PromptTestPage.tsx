import React, { FC, useState } from "react";
import { CameraStep } from "../components/steps/camera/CameraStep.tsx";
import { AnimatePresence } from "framer-motion";
import { OptionStepTest } from "../components/steps/test/OptionStepTest";
import { actors, settings, styles } from "../assets/options.json";
import { ImagePreviewStepTest } from "../components/steps/test/ImagePreviewTest";
import { ProcessImage } from "../services/processImageService";

export type ImageMeta = {
  image: string;
  title: string;
};
export const PromptTestPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [selectedSettings, setSelectedSettings] = useState<string[]>();
  const [selectedActors, setSelectedActors] = useState<string[]>();
  const [selectedStyles, setSelectedStyles] = useState<string[]>();
  const [processedImage, setProcessedImage] = useState<ImageMeta[]>([]);
  const [counterTotal, setCounterTotal] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [error, setError] = useState<string>();

  const handlePhotoTaken = async (photoData: string) => {
    setImage(photoData);
    await handleNextStep();
  };

  const handleNextStep = async () => {
    if (step + 1 === 4) {
      if (!selectedSettings || !selectedActors || !selectedStyles || !image)
        return;
      setStep(step + 1);
      const imageCropped = image.split(",")[1];
      try {
        const images: ImageMeta[] = [];
        setCounterTotal(
          selectedSettings.length *
            selectedStyles.length *
            selectedActors.length
        );
        let step = 0;
        for (let i = 0; i < selectedActors.length; i++) {
          const actor = selectedActors[i];
          for (let x = 0; x < selectedSettings?.length; x++) {
            const setting = selectedSettings[x];
            for (let y = 0; y < selectedStyles?.length; y++) {
              const style = selectedStyles[y];
              const response = await ProcessImage(
                imageCropped,
                actor,
                setting,
                style
              );
              images.push({
                image: response.image,
                title: `${actor} ${setting} ${style}`,
              } as ImageMeta);
              step++;
              console.log("processed images: " + step.toString());
              setCounter(step);
            }
          }
        }
        setProcessedImage(images);
      } catch (e) {
        setError("Whoops Something went wrong!");
      }
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="overflow-auto min-h-screen flex flex-col items-center justify-center">
      <AnimatePresence>
        {step === 0 && (
          <CameraStep onPhotoTaken={handlePhotoTaken} image={image} />
        )}
        {step === 1 && (
          <OptionStepTest
            optionArray={settings}
            onSelected={setSelectedSettings}
            onHandleNext={handleNextStep}
            title={"Where are you?"}
          />
        )}
        {step === 2 && (
          <OptionStepTest
            optionArray={actors}
            onSelected={setSelectedActors}
            onHandleNext={handleNextStep}
            title={"What are you?"}
          />
        )}
        {step === 3 && (
          <OptionStepTest
            optionArray={styles}
            onSelected={setSelectedStyles}
            onHandleNext={handleNextStep}
            title={"Select a style"}
          />
        )}
        {step === 4 && (
          <ImagePreviewStepTest
            error={error}
            images={processedImage}
            counterTotal={counterTotal}
            counter={counter}
            handleDenyImage={() => {
              setImage(undefined);
              setSelectedSettings(undefined);
              setSelectedActors(undefined);
              setSelectedStyles(undefined);
              setProcessedImage([]);
              setError(undefined);
              setStep(0);
            }}
            handleApproveImage={console.log}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
