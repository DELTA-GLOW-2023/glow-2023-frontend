import { ImageResponseType } from "../types/ImageResponseType.ts";
import axios from "axios";
import { API_URL } from "../config/config.ts";

export const UploadImage = async (
  image: string,
  prompt: string
): Promise<ImageResponseType> => {
  const json = {
    image: image,
    prompt: prompt,
  };
  const { data } = await axios.post<ImageResponseType>(
    `${API_URL}/process-image`,
    json
  );
  return data;
};
