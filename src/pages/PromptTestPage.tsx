import React, { FC, useState } from "react";
import { CameraStep } from "../components/steps/camera/CameraStep.tsx";
import { GradientBackgroundComponent } from "../components/core/GradientBackgroundComponent.tsx";
import { AnimatePresence } from "framer-motion";
import {StyleStepTest} from "../components/steps/test/StyleStepTest";
import {ActorStepTest} from "../components/steps/test/ActorStepTest";
import {SettingStepTest} from "../components/steps/test/SettingStepTest";
import {UploadImage} from "../services/uploadImageService";
import {ImagePreviewStep} from "../components/steps/imagePreview/ImagePreview";


export const PromptTestPage: FC = () => {
    const [step, setStep] = useState(0);
    const [image, setImage] = useState<string>();
    const [settings, setSettings] = useState<string[]>();
    const [actors, setActors] = useState<string[]>();
    const [styles, setStyles] = useState<string[]>();
    const [processedImage, setProcessedImage] = useState<string[]>([]);
    const [error, setError] = useState<string>();

    const handlePhotoTaken = async (photoData: string) => {
        setImage(photoData);
        await handleNextStep();
    };

    const handleNextStep = async () => {
        if (step + 1 === 4) {
            if (!settings || !actors || !styles || !image) return;
            setStep(step + 1);
            const imageCropped = image.split(",")[1];
            console.log(actors, settings, styles)
            try {
                for(let i = 0; i <= actors.length; i++){
                    const actor = actors[i];
                    for(let x = 0; x <= settings?.length; x++){
                        const setting = settings[x];
                        for(let y = 0; y <= styles?.length; y++){
                            const style = styles[y];
                            console.log(actor, setting, style)
                            console.log(i,x,y)
                            const response = await UploadImage(imageCropped, actor, setting, style);
                            setProcessedImage((prev) => {
                                prev.push(response.image);
                                return prev;
                            });
                        }
                    }
                }
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
                        <SettingStepTest
                            onSettingSelected={setSettings}
                            onHandleNext={handleNextStep}
                        />
                    )}
                    {step === 2 && (
                        <ActorStepTest
                            onActorSelected={setActors}
                            onHandleNext={handleNextStep}
                        />
                    )}
                    {step === 3 && (
                        <StyleStepTest
                            onActionSelected={setStyles}
                            onHandleNext={handleNextStep}
                        />
                    )}
                    {step === 4 && (
                        <ImagePreviewStep
                            error={error}
                            image={processedImage[0]}
                            handleDenyImage={() => {
                                setImage(undefined);
                                setSettings(undefined);
                                setActors(undefined);
                                setStyles(undefined);
                                setProcessedImage([]);
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
