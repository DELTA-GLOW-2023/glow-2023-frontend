import { FC } from "react";
import { Spinner } from "../../core/Spinner.tsx";
import { motion } from "framer-motion";
import { Button } from "../../core/Button.tsx";

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

export const ImagePreviewStep: FC<{
  handleDenyImage: () => void;
  handleApproveImage: () => void;
  error?: string;
  image?: string;
}> = ({ handleDenyImage, image, error }) => {
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
  if (!image) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-full flex items-center justify-center"
      >
        <Spinner />
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
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.img
          src={`data:image/png;base64,${image}`}
          alt="preview-image"
          className="rounded-lg shadow-lg"
          variants={imageVariants}
        />
      </motion.div>
      <Button onClick={handleDenyImage}>Restart</Button>
    </motion.div>
  );
};
