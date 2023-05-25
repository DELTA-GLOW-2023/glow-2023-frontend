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

  const prompt = `transform the person in the image into: ${selectedActor?.prompt}, change the background scenery into: ${selectedSetting?.prompt}, ${selectedStyle}`;
  const promptDescription = `${selectedActor.title} ${selectedSetting.title}`;
  const secondPrompt = `transform the person in the image into: ${selectedActor?.secondPrompt}, change the background scenery into: ${selectedSetting?.secondPrompt}, ${selectedStyle}`;
  const secondPromptDescription = `${selectedActor?.secondTitle} ${selectedSetting?.secondTitle}`;
  const json = {
    image: image,
    prompt: prompt,
    promptDescription: promptDescription,
    secondPrompt: secondPrompt,
    secondPromptDescription: secondPromptDescription,
  };
  const { data } = await axios.post<ImageResponseType>(
    `${API_URL}/process-image`,
    json
  );
  return data;
};
