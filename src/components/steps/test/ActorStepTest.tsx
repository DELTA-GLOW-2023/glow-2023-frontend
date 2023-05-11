import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { actors } from "../../../assets/options.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardComponent } from "../../core/CardComponent.tsx";

export const ActorStepTest: FC<{
  onActorSelected: (val: string[]) => void;
  onHandleNext: () => void;
}> = ({ onHandleNext, onActorSelected }) => {
  const [selectedActors, setSelectedActors] = useState<string[]>([]);

  const handleSettingClick = (setting: string) => {
    if (selectedActors.includes(setting))
    {
      setSelectedActors(prev => prev.filter(item => item !== setting))
    }
    else{
      setSelectedActors(prev=> [...prev, setting]);
    }
    onActorSelected(selectedActors);
  };
  const handleClick = () => {
    if (selectedActors) {
      onActorSelected(selectedActors);
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
        Who are you?
      </motion.h1>
      <div className="flex flex-col justify-center md:justify-end items-center gap-24">
        <div className="grid grid-cols-4 grid-rows-2 gap-24">
          {actors.map((actor) => (
            <CardComponent
              key={actor.title}
              onClick={() => handleSettingClick(actor.title)}
              selectedValue={selectedActors.includes(actor.title) ? actor.title : ""}
              value={actor.title}
            />
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-10 flex items-center justify-center text-white bg-purple-600 w-48 h-48 rounded-full shadow-lg"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowRight} className="h-24" />
        </motion.button>
      </div>
    </div>
  );
};
