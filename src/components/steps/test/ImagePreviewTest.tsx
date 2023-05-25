import { FC } from "react";
import { Spinner } from "../../core/Spinner.tsx";
import { motion } from "framer-motion";
import { Button } from "../../core/Button.tsx";
import { ImageMeta } from "../../../pages/PromptTestPage";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const ImagePreviewStepTest: FC<{
  handleDenyImage: () => void;
  handleApproveImage: () => void;
  counter: number;
  counterTotal: number;
  error?: string;
  images: ImageMeta[];
}> = ({ handleDenyImage, images, error, counter, counterTotal }) => {
  console.log(images);
  if (error) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="bg-white text-red-600 rounded-lg py-2 px-4 text-4xl shadow-md">
          <span>{error}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDenyImage}
            className="z-10 ml-4 bg-red-600 text-white py-2 px-4 rounded-md shadow-xl"
          >
            RESTART
          </motion.button>
        </div>
      </motion.div>
    );
  }
  if (images.length === 0) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div className="flex gap-24 flex-col">
          <motion.h1 className="m-auto p-2 font-bold font-color-white text-white">
            {counter + "/" + counterTotal}
          </motion.h1>
          <Spinner />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      className={"flex flex-col space-y-4"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-5 m-5 grid-rows-1 gap-10 overflow-auto"
      >
        {images.map(({ image, title }, index) => (
          <div className="z-10 rounded-lg">
            <motion.img
              key={index}
              src={image}
              alt="preview-image"
              className="rounded-lg shadow-lg"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.h2 className="p-2 font-bold font-color-white text-white">
              {title}
            </motion.h2>
          </div>
        ))}
      </motion.div>
      <div className={"flex flex-row w-screen justify-center"}>
        <Button onClick={handleDenyImage}>Restart</Button>
      </div>
    </motion.div>
  );
};
