import React, {FC, useState} from "react";
import {motion} from "framer-motion";
import {CardComponent} from "../../core/CardComponent";
import {options} from "../../../config/options.tsx";
import {MdOutlineNavigateNext} from "react-icons/all";
import {ProcessImage} from "../../../services/processImageService.ts";

export const OptionStep: FC<{
  onHandleNext: () => void;
  variant: 'text' | 'icon';
}> = ({onHandleNext, variant}) => {
  const handleClick = async (prompt: string) => {
    onHandleNext();
    await ProcessImage(prompt)
  };

  const [value, setValue] = useState("")
  const title = "What would you like to add?"

  switch (variant) {
    case 'text':
      return (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="bg-white/60 backdrop-blur-sm p-32 rounded-xl">
            <motion.h1
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
              className="text-7xl text-[#072837] font-bold text-center mb-16 "
            >
              {title}
            </motion.h1>
            <div className={"flex flex-col items-center justify-center w-full"}>
              <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus={true} className={"w-full h-16 rounded-xl bg-[#F2F2F2] text-[#072837] font-bold text-2xl px-8"}/>
              <motion.button
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="mt-7 z-10 flex items-center justify-center text-[#072837] bg-transparent w-36 h-36 rounded-full backdrop-blur-sm"
                onClick={() => handleClick(value)}
              >
                <MdOutlineNavigateNext className={"text-8xl"}/>
              </motion.button>
            </div>
          </div>
        </div>
      );
    case 'icon':
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white/60 backdrop-blur-sm p-32 rounded-xl">
            <motion.h1
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
              className="text-7xl text-[#072837] font-bold text-center mb-16 "
            >
              {title}
            </motion.h1>
            <div
              className="flex flex-col md:flex-row justify-center md:justify-end items-center md:space-x-24 space-y-8 md:space-y-0">
              <div className="grid grid-cols-4 grid-rows-2 gap-24 bg-clip-text">
                {options.map((option) => (
                  <CardComponent
                    key={option.title}
                    onClick={() => {handleClick(option.prompt)}}
                    icon={option.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
  }
};
