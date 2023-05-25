import { FC, useState } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "../../core/CardComponent";

export const OptionStep: FC<{
  onSelected: (val: string) => void;
  onHandleNext: () => void;
  optionArray: { title: string; prompt: string }[];
  title: string;
}> = ({ onHandleNext, onSelected, optionArray, title }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (Option: string) => {
    setSelectedOption(Option);
    onSelected(Option);
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
            <CardComponent
              key={option.title}
              onClick={() => {
                handleOptionClick(option.title);
                onHandleNext();
              }}
              selectedValue={selectedOption}
              value={option.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
