import { FC, useEffect, useState } from "react";

export const TestDisplayPage: FC = () => {
  const [imageData, setImageData] = useState<string | null>("test1");


  useEffect(() => {
    const interval = setInterval(() => {
        if (imageData === "test1") {
            setImageData("test2")
        } else if (imageData === "test2") {
            setImageData("test3")
        } else {
            setImageData("test1")
        }
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [imageData]);

  return (
    <div>
      {imageData && (
        <div className="absolute w-screen h-screen">
          <img
            src={imageData + ".png"}
            alt="Display Image"
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
