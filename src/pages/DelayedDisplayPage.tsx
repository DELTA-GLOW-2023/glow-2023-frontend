import {FC, useEffect, useState} from "react";
import {DisplayImageDelayed} from "../services/displayImageService.ts";
import {Marguee} from "../components/core/Marguee.tsx";

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
        <div className={"relative pulsing-gradient overflow-hidden"}>
            {imageData && (
                <div className="absolute w-screen h-screen">
                    {/* Image */}
                    <img
                        src={`data:image/png;base64,${imageData}`}
                        alt="Display Image"
                        className="object-contain w-full h-full"
                    />

                    {/* Fontys logo overlay */}
                    <div className={"absolute bottom-10 flex justify-between items-center w-full px-4"}>
                        <img
                            src="/logos/fontys.png"
                            alt="Fontys"
                            style={{
                                height: "100px",
                            }}
                        />

                        {/* Second Image Overlay on the Right */}
                        <img
                            src="/logos/delta.png"
                            alt="Delta"
                            style={{
                                height: "30px",
                            }}
                        />
                    </div>

                    <Marguee/>
                </div>
            )}
        </div>
    );
};
