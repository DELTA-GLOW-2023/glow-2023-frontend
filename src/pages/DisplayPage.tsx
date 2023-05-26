import { FC, useEffect, useState } from "react";
import { DisplayImage } from "../services/displayImageService.ts";
import { bigScreenDialogue } from "../config/dialogue";

type ImageDataType = {
  createdAt: string;
  displayed: boolean;
  image: string;
  imagePrompt: string;
  secondImage: string;
  secondImagePrompt: string;
  updatedAt: string;
};

export const DisplayPage: FC = () => {
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
      fetchImage().catch(console.log);
    }
    setRanOnce(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickRandomDialogue = (dialogueList: string[]): string => {
    return dialogueList[Math.floor(Math.random() * dialogueList.length)];
  };

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
          <div className="absolute w-screen h-screen flex flex-col gap-24 justify-center items-center">
            <h1 className="font-bold  text-white text-6xl text-center">
              {pickRandomDialogue(bigScreenDialogue["screen1"])}
            </h1>
            <h1 className="font-bold  text-white text-6xl text-center">
              {imageData.imagePrompt}
            </h1>
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
          <div className="absolute w-screen h-screen flex flex-col gap-24 justify-center items-center">
            <h1 className="font-bold  text-white text-6xl text-center">
              {pickRandomDialogue(bigScreenDialogue["screen2"])}
            </h1>
            <h1 className="font-bold  text-white text-6xl text-center">
              {imageData.secondImagePrompt}
            </h1>
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
    case 4:
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
    default:
      return <h1>Oops something went wrong!</h1>;
  }
};
