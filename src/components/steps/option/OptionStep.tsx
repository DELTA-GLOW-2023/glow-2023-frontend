import { FC, useState } from "react";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CardComponent} from "../../core/CardComponent";

export const OptionStep: FC<{
  onSelected: (val: string) => void;
  onHandleNext: () => void;
  optionArray: {title: string, prompt: string}[];
  title: string

}> = ({ onHandleNext, onSelected, optionArray, title, }) => {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);

  const handleSettingClick = (setting: string) => {
    setSelectedSetting(setting);
    onSelected(setting);
  };
  const handleClick = () => {
    if (selectedSetting) {
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
            <CardComponent
              key={option.title}
              onClick={() => handleSettingClick(option.title)}
              selectedValue={selectedSetting}
              value={option.title}
            />
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center text-white bg-purple-600 w-48 h-48 rounded-full shadow-lg"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowRight} className="h-24" />
        </motion.button>
      </div>
    </div>
  );
};
