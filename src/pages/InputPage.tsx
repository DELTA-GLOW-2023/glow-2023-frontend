import React, {FC, ReactNode, useState} from "react";
import {motion} from "framer-motion";
import {CardComponent} from "../components/core/CardComponent.tsx";
import {options} from "../config/options.tsx";
import Cookies from "universal-cookie";
import {ProcessImage} from "../services/processImageService.ts";
import Carousel from "../components/core/Carousel.tsx";

export const InputPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();

  const handleClick = async (prompt: string) => {
    cookies.set("lastPrompt", prompt, {path: "/"})
    setLoading(true);
    await ProcessImage(prompt)
    setLoading(false);
  };

  const showCards = (): ReactNode => {

    let counter = 0;
    let currentSlide = 0;
    const slides: ReactNode[][] = [[]];

    options.map((option) => {
      if (cookies.get("lastPrompt") === option.prompt) return null;

      if (slides[currentSlide] === undefined)
        slides[currentSlide] = [];

      slides[currentSlide].push(<CardComponent
        key={option.prompt}
        onClick={() => {
          handleClick(option.prompt);
        }}
      >
        <img className={"h-20"} alt={"Emoji"} src={option.emoji}/>
      </CardComponent>)

      counter++;
      if (counter % 12 === 0) {
        currentSlide++;
      }
    });

    return slides.map((slide, i) => {
      return (
        <div
          className="flex-none w-full grid grid-cols-4 grid-rows-2 gap-8 bg-clip-text"
          key={i + 1}
        >
          {slide.map((card) =>
            <div className="flex items-center justify-center"> {/* This centers the content */}
              {card}
            </div>
          )}
        </div>
      );
    });



  };


  if (loading) {
    return (
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <div className={"flex flex-col justify-center items-center"}>
          <motion.h1
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            className="text-8xl text-white font-bold text-center"
          >
            Look up!
          </motion.h1>
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white/60 backdrop-blur-sm p-16 m-8 rounded-xl">
        <motion.h1
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.5}}
          className="text-7xl text-[#072837] font-bold text-center mt-16 mb-8"
        >
          What would you like to add?
        </motion.h1>
        <div className={'w-full mb-8'}>
          <input className={"w-full h-16 border-4 border-[rgb(7 40 55)]-600"} placeholder={"Fill your own prompt.."}
                 type={"text"}/>
        </div>
        <div>
          <Carousel>
            {showCards()}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
