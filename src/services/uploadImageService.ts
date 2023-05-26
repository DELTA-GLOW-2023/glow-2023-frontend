import { ImageResponseType } from "../types/ImageResponseType.ts";
import axios from "axios";
import { API_URL } from "../config/config.ts";

export const UploadImage = async (
    image: string,
): Promise<ImageResponseType> => {
    const json = {
      image: image
    }
    const { data } = await axios.post<ImageResponseType>(
      `${API_URL}/upload-image`,
      json
    );
    return data;
};
