import React, { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "../components/core/CardComponent.tsx";
import { options } from "../config/options.tsx";
import Cookies from "universal-cookie";
import { ProcessImage } from "../services/processImageService.ts";

export const InputPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();

  const handleClick = async (prompt: string) => {
    cookies.set("lastPrompt", prompt, { path: "/" })
    setLoading(true);
    await ProcessImage(prompt)
    setLoading(false);
  };

  const showCards = (): ReactNode => {
    return options.map((option) => {
      if (cookies.get("lastPrompt") === option.prompt) return null;
      return (
        <CardComponent
          key={option.prompt}
          onClick={() => {
            handleClick(option.prompt);
          }}
        >
          <img className={"h-20"} alt={"Emoji"} src={option.emoji} />
        </CardComponent>
      );
    });
  };
  
  if (loading){
    return(
      <div className={"flex flex-col items-center justify-center h-screen"}>
      <div className={"mt-32"}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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
      <div className="bg-white/60 backdrop-blur-sm p-32 m-8 rounded-xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-7xl text-[#072837] font-bold text-center mb-16"
        >
          What would you like to add?
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:space-x-24 space-y-8 md:space-y-0">
          <div className="grid grid-cols-4 grid-rows-2 gap-24 bg-clip-text">
            {showCards()}
          </div>
        </div>
      </div>
    </div>
  );
};
