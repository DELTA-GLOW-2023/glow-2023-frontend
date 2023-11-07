import axios from "axios";
import { API_URL } from "../config/config.ts";

export const DeleteImage = async (): Promise<{ message: string }> => {
  const { data } = await axios.post<{ message: string }>(
    `${API_URL}/delete-image/`,
    {},
    {
      headers: {
        Authorization: localStorage.getItem("API_KEY"),
      },
    }
  );
  return data;
};
