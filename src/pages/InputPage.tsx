import React, { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "../components/core/CardComponent.tsx";
import { options } from "../config/options.tsx";
import { ProcessImage } from "../services/processImageService.ts";
import Carousel from "../components/core/Carousel.tsx";
import "react-simple-keyboard/build/css/index.css";
import { KeyboardComponent } from "../components/core/KeyboardComponent.tsx";

export const InputPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [showKeyBoard, setShowKeyBoard] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const handleClick = async (prompt: string) => {
    localStorage.setItem("lastPrompt", prompt);
    setLoading(true);
    await ProcessImage(prompt);
    setLoading(false);
  };

  const activateKeyBoard = () => {
    setShowKeyBoard((prev) => !prev);
    // textarea element class h-20 remove
    // texAREA ELEMENT class h-40 add
  };

  const showCards = (): ReactNode[] => {
    let counter = 0;
    let currentSlide = 0;
    const slides: ReactNode[][] = [[]];

    options.map((option) => {
      if (localStorage.getItem("lastPrompt") === option.prompt) return null;

      if (slides[currentSlide] === undefined) slides[currentSlide] = [];

      slides[currentSlide].push(
        <CardComponent
          key={option.prompt}
          onClick={async () => {
            await handleClick(option.prompt);
          }}
        >
          <img className={"h-30"} alt={"Emoji"} src={option.emoji} />
        </CardComponent>
      );

      counter++;
      if (counter % 16 === 0) {
        currentSlide++;
      }
    });

    return slides.map((slide, i) => {
      return (
        <div
          className="flex-none w-full grid grid-cols-4 grid-rows-2 gap-8 bg-clip-text mr-8"
          key={i + 1}
        >
          {slide.map((card, j) => (
            <div
              className="flex items-center justify-center w-full"
              key={j + 1}
            >
              {card}
            </div>
          ))}
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <div className={"flex flex-col justify-center items-center"}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl text-white font-bold text-center"
          >
            Look up!
          </motion.h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-8xl text-white font-bold text-center mt-64 mb-8"
      >
        What would you like to add?
      </motion.h1>

      <div className="glass p-16 m-8 rounded-xl flex justify-center w-[90vw]">
        <div className={"w-4/5"}>
          <div className={"w-full mb-8"}>
            {!showKeyBoard ? (
              <button
                className={
                  "w-full h-20 bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white px-14 text-opacity-50"
                }
                onClick={() => activateKeyBoard()}
              >
                Write your own prompt here...
              </button>
            ) : (
              <div className={"flex flex-col items-center"}>
                <textarea
                  className={
                    "transition-all ease-in-out delay-300 focus:outline-none w-full h-20 bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white px-14 pt-4 text-opacity-50"
                  }
                  readOnly={true}
                  placeholder="Write your own prompt here..."
                  value={customPrompt}
                />
                <button
                  className={
                    "h-20 mt-20 focus:outline-none bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white px-14 text-opacity-50"
                  }
                  onClick={async () => {
                    await handleClick(customPrompt);
                  }}
                >
                  Enter
                </button>
              </div>
            )}
          </div>
          <div>
            {showKeyBoard ? (
              <div>
                <KeyboardComponent onChangeValue={setCustomPrompt} />
              </div>
            ) : (
              <Carousel>{showCards()}</Carousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
