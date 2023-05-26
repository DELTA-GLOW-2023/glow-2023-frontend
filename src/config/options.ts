import {
  BsSnow3,
  DiDigitalOcean,
  FaHandHoldingMedical,
  FaHatWizard,
  FaOilCan,
  GiBlackKnightHelm,
  GiFarmer,
  GiMachineGunMagazine,
  GiModernCity,
  GiMusicalScore,
  GiPirateFlag,
  GiPuppet,
  HiOutlineLibrary,
  IoWaterOutline,
  MdOutlineForest,
  MdOutlineMuseum,
  MdOutlinePersonOutline,
  MdOutlineScience,
  MdOutlineStadium,
  RiPixelfedFill,
  SiMyanimelist,
  TbBeach,
  TbChefHat,
  TfiSpray,
} from "react-icons/all";
import { OptionType } from "../types/OptionType.ts";

export const options: Record<string, OptionType[]> = {
  settings: [
    {
      title: "In a forest",
      prompt: "forest, trees, pines, leaves, autumn",
      secondTitle: "In a burning forest",
      secondPrompt: "forest fire, charcoal wood, burning",
      icon: MdOutlineForest,
    },
    {
      title: "In a museum",
      prompt: "museum, marble, gallery, greek statues in the background",
      secondTitle: "A graveyard",
      secondPrompt: "Gravestones, dark, night, creepy church, ",
      icon: MdOutlineMuseum,
    },
    {
      title: "In a snowy landscape",
      prompt:
        "snowy landscape, snow, hills, cabin, winter, snowman, snowflakes",
      secondTitle: "At a volcano",
      secondPrompt: "Fire volcano, erupting, burning",
      icon: BsSnow3,
    },
    {
      title: "A concert hall",
      prompt:
        "concert hall, stage, audience, seats, lights, microphone, instruments",
      secondTitle: "",
      secondPrompt: "",
      icon: GiMusicalScore,
    },
    {
      title: "A library",
      prompt: "library, books, bookshelves",
      secondTitle: "",
      secondPrompt: "",
      icon: HiOutlineLibrary,
    },
    {
      title: "In a cityscape",
      prompt: "city, new york, taxi, skyscrapers, buildings, traffic, cars",
      secondTitle: "In a wasteland",
      secondPrompt: "wasteland, deserted, ruined buildings",
      icon: GiModernCity,
    },
    {
      title: "A sports stadium",
      prompt:
        "sports stadium, stadium, crowd, seats, lights, scoreboard, field, grass",
      secondTitle: "",
      secondPrompt: "",
      icon: MdOutlineStadium,
    },
    {
      title: "On a beach",
      prompt: "beach, sunny, summer, sand, ocean, waves, palm trees, seagulls",
      secondTitle: "",
      secondPrompt: "",
      icon: TbBeach,
    },
  ],
  actors: [
    {
      title: "A doctor",
      prompt:
        "doctor, surgeon, wearing white scrubs, white coat, stethoscope on neck, medical mask on mouth, wearing medical gloves",
      secondTitle: "A doctor",
      secondPrompt:
        "doctor, surgeon, wearing white scrubs, white coat, stethoscope on neck, medical mask on mouth, wearing medical gloves",
      icon: FaHandHoldingMedical,
    },
    {
      title: "A pirate",
      prompt:
        "pirate, eyepatch over one eye, parrot on shoulder, hook on hand, peg leg, pirate hat on head, treasure chest with gold coins on the background",
      secondTitle: "A pirate",
      secondPrompt:
        "pirate, eyepatch over one eye, parrot on shoulder, hook on hand, peg leg, pirate hat on head",
      icon: GiPirateFlag,
    },
    {
      title: "A farmer",
      prompt:
        "farmer, holding a pitchfork, wearing a straw hat, wearing overalls",
      secondTitle: "A farmer",
      secondPrompt:
        "farmer, holding a pitchfork, wearing a straw hat, wearing overalls",
      icon: GiFarmer,
    },
    {
      title: "A wizard",
      prompt:
        "wizard, mage, enchanter, wearing a wizard hat, holding a staff and a spellbook",
      secondTitle: "A wizard",
      secondPrompt:
        "wizard, mage, enchanter, wearing a wizard hat, holding a staff and a spellbook",
      icon: FaHatWizard,
    },
    {
      title: "A knight",
      prompt:
        "knight, wearing knight armor, holding a sword and a shield, knight helmet, medieval",
      secondTitle: "",
      secondPrompt: "",
      icon: GiBlackKnightHelm,
    },
    {
      title: "A soldier",
      prompt:
        "soldier, army, military, camouflage, soldier helmet, holding a rifle, dog tag",
      secondTitle: "",
      secondPrompt: "",
      icon: GiMachineGunMagazine,
    },
    {
      title: "A scientist",
      prompt:
        "scientist, lab coat, goggles, holding a test tube and a beaker, safety goggles",
      secondTitle: "",
      secondPrompt: "",
      icon: MdOutlineScience,
    },
    {
      title: "A chef",
      prompt:
        "chef, cook, wearing an apron and a chef's hat, holding a knife and a spatula, wearing oven mitts",
      secondTitle: "",
      secondPrompt: "",
      icon: TbChefHat,
    },
  ],
  styles: [
    {
      title: "Realistic",
      prompt:
        "photo, dslr, ultra quality, sharp focus, Fujifilm XT3, crystal clear, 8K UHD, high detailed",
      secondTitle: "Realistic",
      secondPrompt:
        "photo, dslr, ultra quality, sharp focus, Fujifilm XT3, crystal clear, 8K UHD, high detailed",
      icon: MdOutlinePersonOutline,
    },
    {
      title: "Cartoonish",
      prompt:
        "in the style of cartoon, cartoonish style, lines, bold, colorful, flat, simple, minimalistic, 2D",
      secondTitle: "Cartoonish",
      secondPrompt:
        "in the style of cartoon, cartoonish style, lines, bold, colorful, flat, simple, minimalistic, 2D",
      icon: GiPuppet,
    },
    {
      title: "Graffiti",
      prompt:
        "in the style of graffiti, graffiti style, colorful, spray paint, street art, urban",
      secondTitle: "Graffiti",
      secondPrompt:
        "in the style of graffiti, graffiti style, colorful, spray paint, street art, urban",
      icon: TfiSpray,
    },
    {
      title: "Watercolor",
      prompt:
        "in the style of a watercolor painting, watercolor style paint, brush, paper, dry, colorful",
      secondTitle: "Watercolor",
      secondPrompt:
        "in the style of a watercolor painting, watercolor style paint, brush, paper, dry, colorful",
      icon: IoWaterOutline,
    },
    {
      title: "Oil painting",
      prompt:
        "in the style of a oil painting, oil painting style, colorful, thick, textured",
      secondTitle: "Oil painting",
      secondPrompt:
        "in the style of a oil painting, oil painting style, colorful, thick, textured",
      icon: FaOilCan,
    },
    {
      title: "Digital Art",
      prompt:
        "in the style of digital art, digital art style, photoshop, illustrator, colorful, sharp, detailed",
      secondTitle: "Digital Art",
      secondPrompt:
        "in the style of digital art, digital art style, photoshop, illustrator, colorful, sharp, detailed",
      icon: DiDigitalOcean,
    },
    {
      title: "Anime",
      prompt:
        "in the style of anime, in the style of manga, lines, bold, colorful, flat, simple, minimalistic, 2D",
      secondTitle: "Anime",
      secondPrompt:
        "in the style of anime, in the style of manga, lines, bold, colorful, flat, simple, minimalistic, 2D",
      icon: SiMyanimelist,
    },
    {
      title: "Pixel Art",
      prompt: "in the style of pixel art, pixels, 16 bit",
      secondTitle: "Pixel Art",
      secondPrompt: "in the style of pixel art, pixels, 16 bit",
      icon: RiPixelfedFill,
    },
  ],
};
