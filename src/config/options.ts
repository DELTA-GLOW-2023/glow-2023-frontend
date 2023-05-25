import { optionType } from "../components/steps/option/OptionStep.tsx";
import { FaCamera } from "react-icons/all";

export const options: Record<string, optionType[]> = {
  settings: [
    {
      title: "In a forest",
      prompt: "forest, trees, pines, leaves, autumn",
      icon: FaCamera,
    },
    {
      title: "A museum",
      prompt: "museum, marble, gallery, greek statues in the background",
      icon: FaCamera,
    },
    {
      title: "A snowy landscape",
      prompt:
        "snowy landscape, snow, hills, cabin, winter, snowman, snowflakes",
      icon: FaCamera,
    },
    {
      title: "A concert hall",
      prompt:
        "concert hall, stage, audience, seats, lights, microphone, instruments",
      icon: FaCamera,
    },
    {
      title: "A library",
      prompt: "library, books, bookshelves",
      icon: FaCamera,
    },
    {
      title: "In a cityscape",
      prompt: "city, new york, taxi, skyscrapers, buildings, traffic, cars",
      icon: FaCamera,
    },
    {
      title: "A sports stadium",
      prompt:
        "sports stadium, stadium, crowd, seats, lights, scoreboard, field, grass",
      icon: FaCamera,
    },
    {
      title: "On a beach",
      prompt: "beach, sunny, summer, sand, ocean, waves, palm trees, seagulls",
      icon: FaCamera,
    },
  ],
  actors: [
    {
      title: "A doctor",
      prompt:
        "doctor, surgeon, wearing white scrubs, white coat, stethoscope on neck, medical mask on mouth, wearing medical gloves",
      icon: FaCamera,
    },
    {
      title: "A pirate",
      prompt:
        "pirate, eyepatch over one eye, parrot on shoulder, hook on hand, peg leg, pirate hat on head, treasure chest with gold coins on the background",
      icon: FaCamera,
    },
    {
      title: "A farmer",
      prompt:
        "farmer, holding a pitchfork, wearing a straw hat, wearing overalls",
      icon: FaCamera,
    },
    {
      title: "A wizard",
      prompt:
        "wizard, mage, enchanter, wearing a wizard hat, holding a staff and a spellbook",
      icon: FaCamera,
    },
    {
      title: "A knight",
      prompt:
        "knight, wearing knight armor, holding a sword and a shield, knight helmet, medieval",
      icon: FaCamera,
    },
    {
      title: "A soldier",
      prompt:
        "soldier, army, military, camouflage, soldier helmet, holding a rifle, dog tag",
      icon: FaCamera,
    },
    {
      title: "A scientist",
      prompt:
        "scientist, lab coat, goggles, holding a test tube and a beaker, safety goggles",
      icon: FaCamera,
    },
    {
      title: "A chef",
      prompt:
        "chef, cook, wearing an apron and a chef's hat, holding a knife and a spatula, wearing oven mitts",
      icon: FaCamera,
    },
  ],
  styles: [
    {
      title: "Realistic",
      prompt:
        "photo, dslr, ultra quality, sharp focus, Fujifilm XT3, crystal clear, 8K UHD, high detailed",
      icon: FaCamera,
    },
    {
      title: "Cartoonish",
      prompt:
        "in the style of cartoon, cartoonish style, lines, bold, colorful, flat, simple, minimalistic, 2D",
      icon: FaCamera,
    },
    {
      title: "Graffiti",
      prompt:
        "in the style of graffiti, graffiti style, colorful, spray paint, street art, urban",
      icon: FaCamera,
    },
    {
      title: "Watercolor",
      prompt:
        "in the style of a watercolor painting, watercolor style paint, brush, paper, dry, colorful",
      icon: FaCamera,
    },
    {
      title: "Oil painting",
      prompt:
        "in the style of a oil painting, oil painting style, colorful, thick, textured",
      icon: FaCamera,
    },
    {
      title: "Digital Art",
      prompt:
        "in the style of digital art, digital art style, photoshop, illustrator, colorful, sharp, detailed",
      icon: FaCamera,
    },
    {
      title: "Anime",
      prompt:
        "in the style of anime, in the style of manga, lines, bold, colorful, flat, simple, minimalistic, 2D",
      icon: FaCamera,
    },
    {
      title: "Pixel Art",
      prompt: "in the style of pixel art, pixels, 16 bit",
      icon: FaCamera,
    },
  ],
};
