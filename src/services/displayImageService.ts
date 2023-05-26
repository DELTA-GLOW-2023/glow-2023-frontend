import axios from "axios";
import { API_URL } from "../config/config";

export const DisplayImage = async () => {
  const { data } = await axios.get(`${API_URL}/view-image/display`);
  return data;
};
