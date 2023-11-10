import { FC, useEffect, useState } from "react";
import { DisplayImageDelayed } from "../services/displayImageService.ts";

export const DisplayPageDelayed: FC = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const fetchImage = async () => {
    try {
      const data = await DisplayImageDelayed();
      setImageData(data);
    } catch (error) {
      // Handle error during image retrieval
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage().catch(console.log);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {imageData && (
        <div className="absolute w-screen h-screen">
          {/* Image */}
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="Display Image"
            className="object-contain w-full h-full"
          />

          {/* Fontys logo overlay */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "10px",
            }}
          >
            <img
              src="/logos/fontys.png"
              alt="Fontys"
              style={{
                height: "100px"
              }}
            />
          </div>

          {/* Second Image Overlay on the Right */}
          <div
            style={{
              position: "absolute",
              top: "65px",
              right: "10px",
            }}
          >
            <img
              src="/logos/delta.png"
              alt="Delta"
              style={{
                height: "30px"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ position: "relative" }}>
      {imageData && (
        <div className="absolute w-screen h-screen">
          {/* Image */}
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="Display Image"
            className="object-contain w-full h-full"
          />

          {/* Logo Overlay */}
          <div
            style={{
              position: "absolute",
              top: "10px", // Adjust the top position as needed
              left: "10px", // Adjust the left position as needed
            }}
          >
            <img
              src="/logos/fontys.png" // Replace with the path to your logo
              alt="Logo"
              className="logo-class" // Add any additional styling for your logo
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {imageData && (
        <div className="absolute w-screen h-screen">
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="Display Image"
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
