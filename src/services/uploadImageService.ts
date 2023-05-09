import {ImageResponseType} from "../types/ImageResponseType.ts";
import axios from "axios";
import {API_URL} from "../config/config.ts";
import { actors, settings, styles } from "../assets/options.json";

export const UploadImage = async (
  image: string,
  actor: string,
  setting: string,
  style: string
): Promise<ImageResponseType> => {

  const actorPrompt: string = actors.find(x => x.title === actor)?.prompt || "";
  const settingPrompt: string = settings.find(x => x.title === setting)?.prompt || "";
  const stylePrompt: string = styles.find(x => x.title === style)?.prompt || "";

  const prompt = `a person standing, ${actorPrompt} ${settingPrompt} ${stylePrompt}`;
  const json = {
    image: image,
    prompt: prompt,
  };
  const {data} = await axios.post<ImageResponseType>(
    `${API_URL}/process-image`,
    json
  );
  return data;
};
