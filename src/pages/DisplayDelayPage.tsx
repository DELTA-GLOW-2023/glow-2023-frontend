import { FC, useEffect, useState } from "react";
import { DisplayDelayImage } from "../services/displayImageService.ts";

export const DisplayDelayPage: FC = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const fetchImage = async () => {
    try {
      const data = await DisplayDelayImage();
      setImageData(data);
    } catch (error) {
      // Handle error during image retrieval
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage().catch(console.log);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      {imageData && (
        <div className="absolute w-screen h-screen">
          <img
            src={imageData}
            alt="Display Image"
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
