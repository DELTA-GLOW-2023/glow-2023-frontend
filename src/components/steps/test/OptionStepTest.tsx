import { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/all";
import { CardTestComponent } from "./CardTestComponent.tsx";
import { OptionType } from "../../../types/OptionType.ts";

export const OptionStepTest: FC<{
  onSelected: (val: string[]) => void;
  onHandleNext: () => void;
  optionArray: OptionType[];
  title: string;
}> = ({ onHandleNext, onSelected, optionArray, title }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
    onSelected([...selectedOptions, option]);
  };
  const handleClick = () => {
    if (selectedOptions) {
      setSelectedOptions([]);
      onHandleNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-6xl text-white font-bold text-center mb-16"
      >
        {title}
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:space-x-24 space-y-8 md:space-y-0">
        <div className="grid grid-cols-4 grid-rows-2 gap-24">
          {optionArray.map((option) => (
            <CardTestComponent
              key={option.title}
              icon={option.icon}
              onClick={() => handleOptionClick(option.title)}
              selectedValue={
                selectedOptions.includes(option.title) ? option.title : ""
              }
              value={option.title}
            />
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center text-white w-48 h-48 rounded-full shadow-lg border-4 border-white"
          onClick={handleClick}
        >
          <FaArrowRight className={"text-8xl"} />
        </motion.button>
      </div>
    </div>
  );
};
