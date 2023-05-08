import React, { FC, useState } from "react";
import { CameraStep } from "../components/steps/camera/CameraStep.tsx";
import { SettingStep } from "../components/steps/setting/SettingStep.tsx";
import { GradientBackgroundComponent } from "../components/core/GradientBackgroundComponent.tsx";
import { ActorStep } from "../components/steps/actor/ActorStep.tsx";
import { ActionStep } from "../components/steps/action/ActionStep.tsx";
import { ObjectStep } from "../components/steps/object/ObjectStep.tsx";
import { AnimatePresence } from "framer-motion";
import { UploadImage } from "../services/uploadImageService.ts";
import { ImagePreviewStep } from "../components/steps/imagePreview/ImagePreview.tsx";

export const InputPage: FC = () => {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState<string>();
  const [setting, setSetting] = useState<string>();
  const [actor, setActor] = useState<string>();
  const [action, setAction] = useState<string>();
  const [object, setObject] = useState<string>();
  const [processedImage, setProcessedImage] = useState<string>();
  const [error, setError] = useState<string>();

  const handlePhotoTaken = async (photoData: string) => {
    setImage(photoData);
    await handleNextStep();
  };

  const handleNextStep = async () => {
    if (step + 1 === 5) {
      if (!setting || !actor || !action || !object || !image) return;
      setStep(step + 1);
      const imageCropped = image.split(",")[1];
      try {
        const response = await UploadImage(
          imageCropped,
          `I am ${actor}, ${setting}, ${action},  wearing ${object}`
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
            <SettingStep
              onSettingSelected={setSetting}
              onHandleNext={handleNextStep}
            />
          )}
          {step === 2 && (
            <ActorStep
              onActorSelected={setActor}
              onHandleNext={handleNextStep}
            />
          )}
          {step === 3 && (
            <ActionStep
              onActionSelected={setAction}
              onHandleNext={handleNextStep}
            />
          )}
          {step === 4 && (
            <ObjectStep
              onObjectSelected={setObject}
              onHandleNext={handleNextStep}
            />
          )}
          {step === 5 && (
            <ImagePreviewStep
              error={error}
              image={processedImage}
              handleDenyImage={() => {
                setImage(undefined);
                setSetting(undefined);
                setActor(undefined);
                setAction(undefined);
                setObject(undefined);
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
