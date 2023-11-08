import axios from "axios";
import { API_URL, REMOTE_API_URL } from "../config/config";

export const DisplayImage = async () => {
  const { data } = await axios.get(`${API_URL}/view-image/display`);
  return data;
};

export const DisplayImageDelayed = async () => {
  const { data } = await axios.get(`${REMOTE_API_URL}/image`, {
    headers: {
      authorization: "delta-fhict",
    },
  });
  return data;
};
