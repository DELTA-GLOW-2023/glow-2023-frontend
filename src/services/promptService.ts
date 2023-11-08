import { ImageResponseType } from "../types/ImageResponseType.ts";
import axios from "axios";
import { API_URL } from "../config/config.ts";
import { promptType } from "../types/promptType.ts";

export const UploadPrompt = async (
  prompt: string,
  method: string
): Promise<ImageResponseType> => {
  const json = {
    prompt,
    method,
  };

  const { data } = await axios.post<ImageResponseType>(
    `${API_URL}/process-image`,
    json
  );
  return data;
};

export const UploadImage = async (
  base64Image: string
): Promise<ImageResponseType> => {
  const json = {
    image: base64Image,
  };

  const { data } = await axios.post<ImageResponseType>(
    `${API_URL}/process-image/upload`,
    json
  );
  return data;
}

export const ApprovePrompt = async (promptId: string): Promise<void> => {
  const json = {
    promptId,
  };

  await axios.post(`${API_URL}/prompts/approve`, json, {
    headers: {
      Authorization: localStorage.getItem("API_KEY"),
    },
  });
};

export const RejectPrompt = async (promptId: string): Promise<void> => {
  const json = {
    promptId,
  };

  await axios.post(`${API_URL}/prompts/reject`, json, {
    headers: {
      Authorization: localStorage.getItem("API_KEY"),
    },
  });
};

export const getPrompts = async (): Promise<promptType[]> => {
  const { data } = await axios.get<promptType[]>(`${API_URL}/prompts`, {
    headers: {
      Authorization: localStorage.getItem("API_KEY"),
    },
  });
  return data;
};
