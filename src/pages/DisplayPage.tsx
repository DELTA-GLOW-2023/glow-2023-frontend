import { useEffect, useState } from "react";
import { DisplayImage } from "../services/displayImageService.ts";

type ImageDataType = {
  createdAt: string;
  displayed: boolean;
  image: string;
  imagePrompt: string;
  secondImage: string;
  secondImagePrompt: string;
  updatedAt: string;
};

export const DisplayPage = () => {
  const [imageData, setImageData] = useState<ImageDataType | null>(null);
  const [frameCounter, setFrameCounter] = useState<number>(0);
  const [ranOnce, setRanOnce] = useState<boolean>(false);

  const fetchImage = async () => {
    try {
      const data = await DisplayImage();
      setImageData(data);
      startCountdown();
    } catch (error) {
      // Handle error during image retrieval
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    if (!ranOnce) {
      fetchImage();
    }
    setRanOnce(true);
  }, []);

  const startCountdown = async () => {
    setFrameCounter(0);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setFrameCounter(1);
    await new Promise((resolve) => setTimeout(resolve, 7000));
    setFrameCounter(2);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setFrameCounter(3);
    await new Promise(() => setTimeout(fetchImage, 7000));
    setFrameCounter(4);
  };

  switch (frameCounter) {
    case 0:
      return (
        imageData && (
          <div className="absolute w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold  text-white text-6xl text-center">
              {imageData.imagePrompt}
            </h1>
            <h2 className="font-bold  text-white text-4xl text-center">
              Interesting one incoming!
            </h2>
          </div>
        )
      );
    case 1:
      return (
        imageData && (
          <div className="absolute w-screen h-screen">
            <img
              src={imageData.image}
              alt="Display Image"
              className="object-cover w-full h-full"
            />
          </div>
        )
      );
    case 2:
      return (
        imageData && (
          <div className="absolute w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold  text-white text-6xl text-center">
              {imageData.secondImagePrompt}
            </h1>
            <h2 className="font-bold  text-white text-4xl text-center">
              Wait wait wait! I thought of something!
            </h2>
          </div>
        )
      );
    case 3:
      return (
        imageData && (
          <div className="absolute w-screen h-screen">
            <img
              src={imageData.secondImage}
              alt="Display Image"
              className="object-cover w-full h-full"
            />
          </div>
        )
      );
  }
};

export default DisplayPage;
