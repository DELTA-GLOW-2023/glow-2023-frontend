import { ImageResponseType } from "../types/ImageResponseType.ts";
import axios from "axios";
import { API_URL } from "../config/config.ts";
import { options } from "../config/options.ts";

export const ProcessImage = async (
  image: string,
  actor: string,
  setting: string,
  style: string
): Promise<ImageResponseType> => {
  const actorPrompt: string =
    options["actors"].find((x) => x.title === actor)?.prompt || "";
  const settingPrompt: string =
    options["settings"].find((x) => x.title === setting)?.prompt || "";
  const stylePrompt: string =
    options["styles"].find((x) => x.title === style)?.prompt || "";

  const prompt = `transform the person in the image into: ${actorPrompt}, change the background scenery into: ${settingPrompt}, ${stylePrompt}`;
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
