import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

interface CameraComponentProps {
  image: string | undefined;
  onPhotoTaken: (photoData: string) => void;
}

export const CameraComponent = ({
  image,
  onPhotoTaken,
}: CameraComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [counter, setCounter] = useState<number | null>(null);

  const countdownVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };
  const startCountdown = async () => {
    setCounter(3);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCounter(2);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCounter(1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCounter(null);
  };
  const handleStartCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 512 * 1.5, height: 512 * 1.5 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStopCapture = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleTakePhoto = async () => {
    await startCountdown();
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        const photoData = canvas.toDataURL("image/png");
        onPhotoTaken(photoData);
      }
    }

    handleStopCapture();
  };

  useEffect(() => {
    handleStartCapture().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        {image ? (
          <img
            src={image}
            alt="Camera Capture"
            className="w-full h-full"
            style={{ transform: "scaleX(-1)" }}
          />
        ) : (
          <div className="relative">
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ref={videoRef}
              className="h-full w-full"
              style={{ transform: "scaleX(-1)" }}
            />
            {counter !== null && (
              <motion.div
                key={counter}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-9xl font-bold text-white"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={countdownVariants}
              >
                {counter}
              </motion.div>
            )}
          </div>
        )}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      <div className="flex space-x-4 mt-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-10 flex items-center justify-center text-white bg-purple-600 w-48 h-48 rounded-full shadow-lg"
          onClick={handleTakePhoto}
        >
          <FontAwesomeIcon icon={faCamera} className="h-24" />
        </motion.button>
      </div>
    </div>
  );
};
