import { CameraComponent } from "./CameraComponent.tsx";

export const CameraStep: React.FC<{
  onPhotoTaken: (photoData: string) => void;
  image: string | undefined;
}> = ({ onPhotoTaken, image }) => {
  return <CameraComponent onPhotoTaken={onPhotoTaken} image={image} />;
};
