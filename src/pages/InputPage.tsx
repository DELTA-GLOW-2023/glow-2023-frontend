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
          <img className={"h-[64px]"} alt={"Emoji"} src={option.emoji} />
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
      <div className={"flex flex-col h-screen"}>
        <div className={"flex flex-col mt-[518px]"}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="basic-font text-[160px] text-white font-bold text-center"
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
        className="basic-font text-6xl text-white font-bold text-center mt-32 mb-4"
      >
        What would you like to add?
      </motion.h1>

      <div className={`glass mt-2 rounded-xl flex justify-center ${ showKeyBoard ? "py-16 w-[90vw]" : "p-16 w-[90vw]"} `}>
        <div className={`${ showKeyBoard ? "" : "w-4/5"}`}>
          <div className={"w-full mb-8"}>
            {!showKeyBoard ? (
              <button
                className={
                  "secondary-font w-full h-20 bg-white bg-opacity-20 rounded-lg text-4xl text-left text-white px-8 text-opacity-50"
                }
                onClick={() => activateKeyBoard()}
              >
                Write your own prompt here...
              </button>
            ) : (
              <div className={"flex flex-col items-center"}>
                <div className={"w-full flex justify-center px-10"}>
                    <div className={"absolute right-8 top-0 mt-16 w-20"}>
                        <button
                            className={
                                "flex justify-center items-center h-20 w-full focus:outline-none bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white"
                            }
                            onClick={ () => {
                                setShowKeyBoard(false);
                            }}
                        >
                          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff"/>
                          </svg>
                        </button>
                    </div>

                  <textarea
                      className={
                        "secondary-font transition-all ease-in-out delay-300 focus:outline-none w-4/5 h-40 bg-white bg-opacity-20 rounded-lg text-4xl text-left text-white px-8 pt-4 text-opacity-50"
                      }
                      readOnly={true}
                      placeholder="Write your own prompt here..."
                      value={customPrompt}
                  />
                </div>
                <button
                  className={
                    "secondary-font glass h-20 mt-10 focus:outline-none bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white px-14"
                  }
                  onClick={async () => {
                    if(customPrompt === "") return;
                    await handleClick(customPrompt);
                  }}
                >
                  ENTER
                </button>
              </div>
            )}
          </div>
          <div>
            {showKeyBoard ? (
              <div className={""}>
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
