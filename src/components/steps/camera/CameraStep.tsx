import { motion } from "framer-motion";
import { CameraComponent } from "./CameraComponent.tsx";

export const CameraStep: React.FC<{
  onPhotoTaken: (photoData: string) => void;
  image: string | undefined;
}> = ({ onPhotoTaken, image }) => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <div className={"mt-12"}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl text-white font-bold text-center"
        >
          Hello Glow!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl text-white font-bold text-center"
        >
          Time to smile!
        </motion.p>
      </div>
      <CameraComponent onPhotoTaken={onPhotoTaken} image={image} />
    </div>
  );
};
