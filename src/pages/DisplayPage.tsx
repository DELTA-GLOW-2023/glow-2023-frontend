import { useEffect, useState } from "react";
import { DisplayImage } from "../services/displayImageService.ts";

type ImageDataType = {
  createdAt: string;
  displayed: boolean;
  image: string;
  updatedAt: string;
};

export const DisplayPage = () => {
  const [imageData, setImageData] = useState<ImageDataType | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await DisplayImage();
        setImageData(data);
      } catch (error) {
        // Handle error during image retrieval
        console.error("Error fetching image:", error);
      }
    };

    const interval = setInterval(fetchImage, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {imageData && (
        <img
          src={imageData.image}
          alt="Display Image"
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default DisplayPage;
