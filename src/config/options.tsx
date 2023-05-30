import {
  BsSnow3,
  DiDigitalOcean,
  FaHatWizard,
  FaOilCan,
  GiFarmer,
  GiMachineGunMagazine,
  GiPirateFlag,
  GiPuppet,
  IoWaterOutline,
  MdOutlinePersonOutline,
  MdOutlineScience,
  MdOutlineStadium,
  RiPixelfedFill,
  SiMyanimelist,
  TbBeach,
  TbChefHat,
  TfiSpray,
} from "react-icons/all";

import Artgallery from "../assets/Artgallery.svg";
import Chef from "../assets/Chef.svg";
import Cityskyline from "../assets/Cityskyline.svg";
import Doctor from "../assets/Doctor.svg";
import Concerthall from "../assets/Concerthall.svg";
import Forest from "../assets/Forest.svg";
import Knight from "../assets/Knight.svg";
import Library from "../assets/Library.svg";
import Scientist from "../assets/Scientist.svg";
import Soldier from "../assets/Soldier.svg";

import { OptionType } from "../types/OptionType.ts";

export const options: Record<string, OptionType[]> = {
  settings: [
    {
      title: "In a forest",
      prompt:
        "Red yellow trees path leaves (forest:1.4) fall autumn (photoreal:1.5) fullframe (outside:1.4)",
      secondTitle: "In a burning forest",
      icon: Forest,
      secondPrompt:
        "(forrest:1.5), trees, outside, (inferno:1.5), (forrest fire:1.8), (embers:1.7), (flames:1.3)",
    },
    {
      title: "In a museum",
      prompt:
        "Museum, hallway, symmetry, (marblewall:1.4), (redcarpet:1.4), modern, bright, whitelight",
      secondTitle: "A graveyard",

      icon: Artgallery,
      secondPrompt:
        "in a (hoarders den:1.6), hoarding, obsessive, (compulsive:1.8), stacked books, (depot:1.5), (spiders crawling over person:1.5), (cockroaches crawling over person:1.5), (insects:2.0)",
    },
    {
      title: "In a snowy landscape",
      prompt:
        "Snow, hills, (skiing:1.4), brightsun, panorama, morning, yellowlight, whitesnow, lightsnowing, (aurora:1.5), beautiful",
      secondTitle: "At a volcano",
      secondPrompt:
        "in a (volcano:1.4), (lava:1.4), disaster, smoke, fire, (embers:1.5), (outside:1.5), lavalake, darksky, ashes, screaming ",
      icon: BsSnow3,
    },
    {
      title: "A concert hall",
      prompt:
        "(viewing podium:1.4), stage, (concerthall:1.4), symmetry, (from audience:1.4), redcurtains, podium lights, dark, musicconcert, speakers",
      secondTitle: "In the yellow king performance",
      secondPrompt:
        "In a performance of (king in yellow:1.8), (yellow crown:1.4), (strange moons:1.5), occult, (manyfaces:1.5), (stage:1.4), (faces:1.5)",
      icon: Concerthall,
    },
    {
      title: "A library",
      prompt:
        "(viewing podium:1.4), stage, (concerthall:1.4), symmetry, (from audience:1.4), redcurtains, podium lights, dark, musicconcert, speakers",
      secondTitle: "In the yellow king performance",
      secondPrompt:
        "In a performance of (king in yellow:1.8), (yellow crown:1.4), (strange moons:1.5), occult, (manyfaces:1.5), (stage:1.4), (faces:1.5)",
      icon: Library,
    },
    {
      title: "A library",
      prompt:
        "Library, mansion, expensive, ancient, study, globe, (indoor:1.4), mahogany, (greencarpet:1.4), (whitecurtains:1.4)",
      secondTitle: "In a crypt",
      secondPrompt:
        "a crypt, (zombie:1.5), (scarred:1.3), (damaged-clothing:1.8), (injuries:1.5), (red eyes:1.9)",
      icon: Library,
    },
    {
      title: "In a cityscape",
      prompt:
        "Cityscape, (new York:1.4), manhattan, streetview, taxi, busy, sidewalk, concrete, heatwave sharp, high-quality",
      secondTitle: "In a wasteland",
      icon: Cityskyline,
      secondPrompt:
        "in a cityscape, street-view, (apocalypse:1.5), (atomic-cloud:1.4), (nuclearexplosion:1.5), (post-war:1.4), (scarred-face:1.6), (leather-armour:1.4), (bandages:1.5), overgrown",
    },
    {
      title: "A sports stadium",
      prompt:
        "sports stadium, stadium, crowd, seats, lights, scoreboard, field, grass",
      secondTitle: "In a riot",
      secondPrompt: "riot",
      icon: MdOutlineStadium,
    },
    {
      title: "On a beach",
      prompt:
        "Beach, ocean, waves, sand, panorama, palmtrees, bahama’s, fullframe, detailed, sharp, groundperspective",
      secondTitle: "In a desert",
      secondPrompt:
        "in a desert, outside, sanddunes, sand, (sandstorm:1.6), (sand-in-hair:1.3), (crying:1.5), (sand-in-face:1.6), sandblast, exhausted, (dehydrated:1.4), (gaunt:1.6)",
      icon: TbBeach,
    },
  ],
  actors: [
    {
      title: "A doctor",
      prompt: "(doctor:1.5) standing, fullframe, labcoat",
      secondTitle: "A doctor",
      icon: Doctor,
      secondPrompt: "(doctor:1.5) standing, fullframe, labcoat",
    },
    {
      title: "A pirate",
      prompt:
        "(Pirate:1.5) detailed, standing coat, leather boots, (pirate hat:1.5)",
      secondTitle: "A pirate",
      secondPrompt:
        "(Pirate:1.5) detailed, standing coat, leather boots, (pirate hat:1.5)",
      icon: GiPirateFlag,
    },
    {
      title: "A farmer",
      prompt: "(Farmer:1.5), standing straw-hat, denim",
      secondTitle: "A farmer",
      secondPrompt: "(Farmer:1.5), standing straw-hat, denim",
      icon: GiFarmer,
    },
    {
      title: "A wizard",
      prompt: "(WIzard:1.5) standing, (void-spell:1.2)",
      secondTitle: "A wizard",
      secondPrompt: "(WIzard:1.5) standing, (void-spell:1.2)",
      icon: FaHatWizard,
    },
    {
      title: "A knight",
      prompt:
        "(knightstanding:1.4), (detailed face:1.4), royalguard, bluecape, (metalplating:0.5), nose, mouth, hair, (freckles:0.5), embroided",
      secondTitle: "A knight",
      secondPrompt:
        "(knightstanding:1.4), (detailed face:1.4), royalguard, bluecape, (metalplating:0.5), nose, mouth, hair, (freckles:0.5), embroided",
      icon: Knight,
    },
    {
      title: "A soldier",
      prompt: "(soldier:1.5), camoflage-clothes, standing dog-tag",
      secondTitle: "A soldier",
      secondPrompt: "(soldier:1.5), camoflage-clothes, standing dog-tag",
      icon: Soldier,
    },
    {
      title: "A scientist",
      prompt: "(scientist:1.5) standing, doctor-robe",
      secondTitle: "A scientist",
      secondPrompt: "(scientist:1.5) standing, doctor-robe",
      icon: Scientist,
    },
    {
      title: "A chef",
      prompt:
        "(knightstanding:1.4), (detailed face:1.4), royalguard, bluecape, (metalplating:0.5), nose, mouth, hair, (freckles:0.5), embroided",
      secondTitle: "A knight",
      secondPrompt:
        "(knightstanding:1.4), (detailed face:1.4), royalguard, bluecape, (metalplating:0.5), nose, mouth, hair, (freckles:0.5), embroided",
      icon: Chef,
    },
    {
      title: "A soldier",
      prompt: "(soldier:1.5), camoflage-clothes, standing dog-tag",
      secondTitle: "A soldier",
      secondPrompt: "(soldier:1.5), camoflage-clothes, standing dog-tag",
      icon: GiMachineGunMagazine,
    },
    {
      title: "A scientist",
      prompt: "(scientist:1.5) standing, doctor-robe",
      secondTitle: "A scientist",
      secondPrompt: "(scientist:1.5) standing, doctor-robe",
      icon: MdOutlineScience,
    },
    {
      title: "A chef",
      prompt: "(chef:1.5), standing, (white-apron:1.5)",
      secondTitle: "A chef",
      secondPrompt: "(chef:1.5), standing, (white-apron:1.5)",
      icon: TbChefHat,
    },
  ],
  styles: [
    {
      title: "Realistic",
      prompt: "(photography:1.5), high-detail",
      secondTitle: "Realistic",
      secondPrompt: "(photography:1.5), 4k, uhd, sharp, high-detail",
      icon: MdOutlinePersonOutline,
    },
    {
      title: "Cartoonish",
      prompt:
        "(vector art:1.3), 1960, advertisement, poster, high contrast, action shot, redbacklight, bluedifusedlight",
      secondTitle: "Cartoonish",
      secondPrompt:
        "(vector art:1.3), 1960, advertisement, poster, high contrast, action shot, redbacklight, bluedifusedlight",
      icon: GiPuppet,
    },
    {
      title: "Graffiti",
      prompt: "(Grafitti:1.5), (mural:1.5), (brickwall:1.2), personmural",
      secondTitle: "Graffiti",
      secondPrompt: "(Grafitti:1.5), (mural:1.5), (brickwall:1.2), personmural",
      icon: TfiSpray,
    },
    {
      title: "Watercolor",
      prompt: "in the style of a (watercolor:1.5) painting, (wet-on-wet:1.5)",
      secondTitle: "Watercolor",
      secondPrompt:
        "in the style of a (watercolor:1.5) painting, (wet-on-wet:1.5)",
      icon: IoWaterOutline,
    },
    {
      title: "Oil painting",
      prompt:
        "(oilpainting:1.2), (renaissancepainting:1.3), (renaissance:1.6), (rembradt_painting:1.2), (brushstrokes:1.5)",
      secondTitle: "Oil painting",
      secondPrompt:
        "(oilpainting:1.2), (renaissancepainting:1.3), (renaissance:1.6), (rembradt_painting:1.2), (brushstrokes:1.5)",
      icon: FaOilCan,
    },
    {
      title: "Digital Art",
      prompt:
        "digitalart, 2100, hypermodern, (blacklight:1.3), tatoos, purple lighting, rave",
      secondTitle: "Digital Art",
      secondPrompt:
        "digitalart, 2100, hypermodern, (blacklight:1.3), tatoos, purple lighting, rave",
      icon: DiDigitalOcean,
    },
    {
      title: "Anime",
      prompt:
        "anime, akira, flat color, thicklines, blackhighlight, movieposter",
      secondTitle: "Anime",
      secondPrompt:
        "anime, akira, flat color, thicklines, blackhighlight, movieposter",
      icon: SiMyanimelist,
    },
    {
      title: "Pixel Art",
      prompt:
        "(Pixelart:1.6), (64bit:1.2), videogame character portrait, (dittering:1.4), (roleplayinggmae:1.4), (computergraphics:1.2), (commodore 64:1.2)",
      secondTitle: "Pixel Art",
      secondPrompt:
        "(Pixelart:1.6), (64bit:1.2), videogame character portrait, (dittering:1.4), (roleplayinggmae:1.4), (computergraphics:1.2), (commodore 64:1.2)",
      icon: RiPixelfedFill,
    },
  ],
};
