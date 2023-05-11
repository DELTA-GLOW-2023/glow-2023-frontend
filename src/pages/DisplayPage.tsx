import { useImageContext } from "../context/ImageContext.tsx";

export const DisplayPage = () => {
  const { image } = useImageContext();
  return (
    <div className="relative w-screen h-screen">
      <img
        src={`data:image/png;base64,${image}`}
        className="w-full h-full object-cover"
        alt={""}
      />
    </div>
  );
};

export default DisplayPage;
