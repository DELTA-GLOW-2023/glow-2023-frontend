import { FC } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "../../core/CardComponent";
import { OptionType } from "../../../types/OptionType.ts";

export const OptionStep: FC<{
  onSelected: (val: string) => void;
  onHandleNext: () => void;
  optionArray: OptionType[];
  title: string;
}> = ({ onHandleNext, onSelected, optionArray, title }) => {
  const handleOptionClick = (Option: string) => {
    onSelected(Option);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className=" bg-white/60 backdrop-blur-sm p-32 rounded-xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-7xl text-[#072837] font-bold text-center mb-16 "
        >
          {title}
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:space-x-24 space-y-8 md:space-y-0">
          <div className="grid grid-cols-4 grid-rows-2 gap-24 bg-clip-text">
            {optionArray.map((option) => (
              <CardComponent
                key={option.title}
                onClick={() => {
                  handleOptionClick(option.title);
                  onHandleNext();
                }}
                icon={option.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
