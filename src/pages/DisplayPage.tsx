import {FC, useEffect, useState} from "react";
import {DisplayImage} from "../services/displayImageService.ts";


export const DisplayPage: FC = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const fetchImage = async () => {
    try {
      const data = await DisplayImage();
      setImageData(data);
    } catch (error) {
      // Handle error during image retrieval
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage().catch(console.log);
    }, 100);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);



  return (
    <div>
      {
        imageData && (
          <div className="absolute w-screen h-screen">
            <img
              src={imageData}
              alt="Display Image"
              className="object-cover w-full h-full"
            />
          </div>
        )
      }
    </div>
  );
};
