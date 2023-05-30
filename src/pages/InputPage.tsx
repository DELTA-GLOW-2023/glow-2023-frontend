import React, {FC, useState} from "react";
import {BackgroundBlob} from "../components/core/BackgroundBlob.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {BsInputCursorText, BsReverseListColumnsReverse} from "react-icons/all";
import LoadingStep from "../components/steps/loading/LoadingStep.tsx";
import {OptionStep} from "../components/steps/option/OptionStep.tsx";

export const InputPage: FC = () => {
    const [step, setStep] = useState('start');
    // const [image, setImage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    // const handlePhotoTaken = async (photoData: string) => {
    //     setImage(photoData);
    //     await handleNextStep(photoData);
    // };

    const reset = () => {
        // setImage(undefined);
        setStep('start');
        setLoading(false);
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
                            <motion.p
                                initial={{opacity: 0, y: -50}}
                                animate={{opacity: 1, y: 0}}
                                className="text-4xl text-white font-bold text-center"
                            >
                                How do you want to contribute?
                            </motion.p>
                        </div>
                        <div className={"flex gap-16 mt-16"}>
                            <motion.button
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="mt-7 z-10 flex items-center justify-center text-white bg-transparent w-48 h-48 rounded-full backdrop-blur-lg"
                                onClick={() => setStep('text')}
                            >
                                <BsInputCursorText className={"text-8xl"}/>
                            </motion.button>
                            <motion.button
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="mt-7 z-10 flex items-center justify-center text-white bg-transparent w-48 h-48 rounded-full backdrop-blur-lg"
                                onClick={() => setStep('icon')}
                            >
                                <BsReverseListColumnsReverse className={"text-8xl"}/>
                            </motion.button>
                        </div>
                    </div>
                );
            case 'text':
                return (
                    <OptionStep variant={'text'} onHandleNext={() => setLoading(true)}/>
                );
            case 'icon':
                return (
                    <OptionStep variant={'icon'} onHandleNext={() => setLoading(true)}/>
                );
        }
    };

    return (
        <div className="relative">
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
