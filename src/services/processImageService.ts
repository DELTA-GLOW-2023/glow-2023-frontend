import { ImageResponseType } from "../types/ImageResponseType.ts";
import axios from "axios";
import { API_URL } from "../config/config.ts";

export const ProcessImage = async (
  prompt: string,
): Promise<ImageResponseType> => {

  const json = {
    prompt: prompt,
  };
  const { data } = await axios.post<ImageResponseType>(
    `${API_URL}/process-image`,
    json
  );
  return data;
};
