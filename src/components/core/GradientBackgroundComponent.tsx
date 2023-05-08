// GradientBackgroundComponent.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DotProps {
  x: number;
  y: number;
  z: number;
  size: number;
  delay: number;
}

const Dot: React.FC<DotProps> = ({ x, y, z, size, delay }) => {
  const [animationY, setAnimationY] = useState(y);
  const [animationZ, setAnimationZ] = useState(z);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationY(y + 5 * Math.sin(Date.now() / 1000 + delay));
      setAnimationZ(z + 5 * Math.cos(Date.now() / 1000 + delay));
    }, 16);

    return () => clearInterval(intervalId);
  }, [y, z, delay]);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${x}%`,
        top: `${animationY}%`,
        zIndex: animationZ,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 1.5}px rgba(255, 255, 255, 0.5)`,
        borderRadius: `${size / 2}px`,
      }}
      animate={{ rotateX: [0, -180, -180, 0], rotateY: [0, 0, -180, -180] }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeatDelay: 0,
        repeat: Infinity,
      }}
    />
  );
};

export const GradientBackgroundComponent: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const customStyle = {
    background:
      "linear-gradient(135deg, rgba(177, 13, 255, 1), rgba(123,30,183, 0.5))",
    backdropFilter: "blur(5px)",
    perspective: "1000px",
  };

  const numDots = 100;
  const dots = [];
  const dotSizeRange = { min: 2, max: 10 };
  for (let i = 0; i < numDots; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = Math.random() * 10 - 5;
    const size = Math.floor(
      Math.random() * (dotSizeRange.max - dotSizeRange.min + 1) +
        dotSizeRange.min
    );
    const delay = Math.random() * 2 * Math.PI;
    dots.push(<Dot key={i} x={x} y={y} z={z} size={size} delay={delay} />);
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={customStyle}
    >
      <div>{dots}</div>
      {children}
    </motion.div>
  );
};
