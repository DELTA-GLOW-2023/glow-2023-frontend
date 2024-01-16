import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import blobVideo from "../../assets/blob_horizontal.mp4"; // Import the MP4 video

export const BackgroundBlob: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      className="relative overflow-x-hidden inset-0 container-background"
      style={{ height: "100vh" }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Set a lower z-index to place it behind the children
        }}
      >
        <source src={blobVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </motion.div>
  );
};
