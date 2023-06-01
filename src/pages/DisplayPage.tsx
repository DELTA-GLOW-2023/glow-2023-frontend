import { FC, useEffect, useState } from "react";
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

export const DisplayPage: FC = () => {
  const [imageData, setImageData] = useState<ImageDataType | null>(null);
  const [frameCounter, setFrameCounter] = useState<number>(0);
  const [ranOnce, setRanOnce] = useState<boolean>(false);

  const fetchImage = async () => {
    try {
      const data = await DisplayImage();
      setImageData(data);
      setFrameCounter(1)
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


  switch (frameCounter) {
    case 0:
      return (
        imageData && (
          <div className="absolute w-screen h-screen flex flex-col gap-24 justify-center items-center">
            <h1 className="font-bold  text-white text-6xl text-center">
              test
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
    default:
      return <h1>Oops something went wrong!</h1>;
  }
};
