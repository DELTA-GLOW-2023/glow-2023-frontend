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
    <div className={'relative pulsing-gradient overflow-hidden'}>
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

          {/* Marquee */}
          <div className="relative flex overflow-x-hidden" style={{ position: "absolute", bottom: '20px' }}>
            <div className="py-12 animate-marquee whitespace-nowrap">
              <span className="text-3xl text-white mx-4">Create your own GLOW art at Stationsplein Tourist information</span>
            </div>

            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
              <span className="text-3xl text-white mx-4">Create your own GLOW art at Stationsplein Tourist information</span>

              {/* <span className="text-4xl text-white mx-4">Like our project? Vote for us at gloweindhoven.nl/glow-talent-awards/</span> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
