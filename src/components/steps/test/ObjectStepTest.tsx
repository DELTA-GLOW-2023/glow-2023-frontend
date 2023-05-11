import { FC, useState } from "react";
import { motion } from "framer-motion";
import { objects } from "../../../assets/options.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardComponent } from "../../core/CardComponent.tsx";

export const ObjectStepTest: FC<{
  onObjectSelected: (val: string) => void;
  onHandleNext: () => void;
}> = ({ onHandleNext, onObjectSelected }) => {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  const handleObjectClick = (setting: string) => {
    setSelectedObject(setting);
    onObjectSelected(setting);
  };
  const handleClick = () => {
    if (selectedObject) {
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
        What are you wearing?
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:space-x-24 space-y-8 md:space-y-0">
        <div className="grid grid-cols-4 grid-rows-2 gap-24">
          {objects.map((object) => (
            <CardComponent
              key={object}
              onClick={() => handleObjectClick(object)}
              selectedValue={selectedObject}
              value={object}
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
