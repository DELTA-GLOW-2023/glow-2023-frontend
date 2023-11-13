import React, { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "../components/core/CardComponent.tsx";
import { options } from "../config/options.tsx";
import { UploadPrompt } from "../services/promptService.ts";
import Carousel from "../components/core/Carousel.tsx";
import "react-simple-keyboard/build/css/index.css";
import { KeyboardComponent } from "../components/core/KeyboardComponent.tsx";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { BackgroundBlob } from "../components/core/BackgroundBlob.tsx";

export const InputPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showKeyBoard, setShowKeyBoard] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [error, setError] = useState<boolean>();
  const navigate = useNavigate();

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const handleClick = async (prompt: string, method: string) => {
    localStorage.setItem("lastPrompt", prompt);
    setLoading(true);
    try {
      await UploadPrompt(prompt, method);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.data.includes("Vulgar words detected!")) {
          setError(true);
        }
      }
    } finally {
      // Artificial delay to allow for image processing, and to show loading screen
      await sleep(5000);
      setLoading(false);
      navigate("/");
    }
  };
  const activateKeyBoard = () => {
    setShowKeyBoard((prev) => !prev);
  };

  const showCards = (): ReactNode[] => {
    let counter = 0;
    let currentSlide = 0;
    const slides: ReactNode[][] = [[]];

    options.map((option) => {
      if (localStorage.getItem("lastPrompt") === option.prompt) return null;

      if (slides[currentSlide] === undefined) slides[currentSlide] = [];

      if (option.text) {
        slides[currentSlide].push(
          <CardComponent
            key={option.prompt}
            onClick={async () => {
              await handleClick(option.prompt, "icon");
            }}
          >
            <h2 className={"text-white px-4 text-xl text-center font-semibold"}>
              {option.text}
            </h2>
          </CardComponent>
        );
      } else {
        slides[currentSlide].push(
          <CardComponent
            key={option.prompt}
            onClick={async () => {
              await handleClick(option.prompt, "icon");
            }}
          >
            <img className={"h-[64px]"} alt={"Emoji"} src={option.emoji} />
          </CardComponent>
        );
      }

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
      <BackgroundBlob>
        <div className={"flex flex-col h-screen"}>
          <div className={"flex flex-col mt-[200px]"}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              className="basic-font text-[160px] text-white font-bold text-center"
            >
              Go outside to see!
            </motion.h1>
            <motion.div className={"rotate-90 mt-96"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="360"
                height="360"
                viewBox="0 0 128 128"
                fill="none"
              >
                <path
                  d="M58.667 106.666H69.3337V42.6663H80.0003V31.9997H69.3337V21.333H58.667V31.9997H48.0003V42.6663H58.667V106.666ZM37.3337 53.333V42.6663H48.0003V53.333H37.3337ZM37.3337 53.333V63.9997H26.667V53.333H37.3337ZM90.667 53.333V42.6663H80.0003V53.333H90.667ZM90.667 53.333V63.9997H101.334V53.333H90.667Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </BackgroundBlob>
    );
  }

  return (
    <BackgroundBlob>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="basic-font text-6xl text-white font-bold text-center mt-32 mb-4"
        >
          What would you like to add?
        </motion.h1>

        <div
          className={`glass mt-2 rounded-xl flex justify-center ${
            showKeyBoard ? "py-16 w-[90vw]" : "p-16 w-[90vw]"
          } `}
        >
          <div className={`${showKeyBoard ? "" : "w-4/5"}`}>
            <div className={"w-full mb-8"}>
              {!showKeyBoard ? (
                <button
                  className={
                    "secondary-font w-full h-20 bg-white bg-opacity-20 rounded-lg text-4xl text-left text-white px-8 text-opacity-50"
                  }
                  onClick={() => activateKeyBoard()}
                >
                  Click here to write your own idea...
                </button>
              ) : (
                <div className={"flex flex-col items-center"}>
                  <div className={"w-full flex justify-center px-10"}>
                    <div className={"absolute right-8 top-0 mt-16 w-20"}>
                      <button
                        className={
                          "flex justify-center items-center h-20 w-full focus:outline-none bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white"
                        }
                        onClick={() => {
                          setShowKeyBoard(false);
                        }}
                      >
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={
                        "flex flex-col justify-center items-center w-full"
                      }
                    >
                      <textarea
                        className={
                          "secondary-font transition-all ease-in-out delay-300 focus:outline-none w-4/5 h-40 bg-white bg-opacity-20 rounded-lg text-4xl text-left text-white px-8 pt-4 text-opacity-50" +
                          (error
                            ? " border-solid outline outline-offset-4 outline-4 outline-red-400"
                            : "")
                        }
                        readOnly={true}
                        placeholder={
                          "Use the keyboard to type your idea for example: 'A T-Rex on Roller Skates'"
                        }
                        value={customPrompt}
                      />
                      <div className={"  text-white text-4xl mt-4"}>
                        {error ? (
                          <div className={"flex"}>
                            <svg
                              height="2.5rem"
                              width="3.5rem"
                              version="1.1"
                              id="_x32_"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <style type="text/css"></style>{" "}
                                <g>
                                  {" "}
                                  <path
                                    className="st0"
                                    d="M505.095,407.125L300.77,53.208c-9.206-15.944-26.361-25.849-44.774-25.849 c-18.412,0-35.552,9.905-44.751,25.849L6.905,407.109c-9.206,15.944-9.206,35.746,0,51.69 c9.206,15.944,26.354,25.842,44.758,25.842h408.674c18.405,0,35.568-9.897,44.759-25.842 C514.302,442.855,514.302,423.053,505.095,407.125z M256.004,426.437c-17.668,0-32.013-14.33-32.013-32.004 c0-17.668,14.345-31.997,32.013-31.997c17.667,0,31.997,14.329,31.997,31.997C288.001,412.108,273.671,426.437,256.004,426.437z M275.72,324.011c0,10.89-8.834,19.709-19.716,19.709c-10.898,0-19.717-8.818-19.717-19.709l-12.296-144.724 c0-17.676,14.345-32.005,32.013-32.005c17.667,0,31.997,14.33,31.997,32.005L275.72,324.011z"
                                  ></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                            Error
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button
                    className={
                      "secondary-font glass h-20 mt-10 focus:outline-none bg-white bg-opacity-20 rounded-lg text-5xl text-left text-white px-14"
                    }
                    onClick={async () => {
                      if (customPrompt === "") return;
                      await handleClick(customPrompt, "text");
                    }}
                  >
                    CONFIRM
                  </button>
                </div>
              )}
            </div>
            <div>
              {showKeyBoard ? (
                <div className={""}>
                  <KeyboardComponent
                    onChangeValue={(val: string) => {
                      setCustomPrompt(val);
                      if (error) setError(false);
                    }}
                  />
                </div>
              ) : (
                <Carousel>{showCards()}</Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </BackgroundBlob>
  );
};
