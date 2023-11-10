import { OptionType } from "../types/OptionType.ts";
import Alien from "../assets/emoji/alien.png";
import AlienMonster from "../assets/emoji/alien-monster.png";
import Robot from "../assets/emoji/robot.png";
import AngelFace from "../assets/emoji/angel-face.png";
import Rocket from "../assets/emoji/rocket.png";
import Umbrella from "../assets/emoji/umbrella.png";
import Yarn from "../assets/emoji/yarn.png";
import Crown from "../assets/emoji/crown.png";
import LightBulb from "../assets/emoji/light-bulb.png";
import Planet from "../assets/emoji/planet.png";
import DogFace from "../assets/emoji/dog-face.png";
import CatFace from "../assets/emoji/cat-face.png";
import FerrisWheel from "../assets/emoji/ferris-wheel.png";
import Lion from "../assets/emoji/lion.png";
import Unicorn from "../assets/emoji/unicorn.png";
import Butterfly from "../assets/emoji/butterfly.png";
import TReX from "../assets/emoji/t-rex.png";
import Coral from "../assets/emoji/coral.png";
import Dragon from "../assets/emoji/dragon.png";
import Confetti from "../assets/emoji/confetti.png"
import DesertIsland from "../assets/emoji/desert-island.png";
import Bubbles from "../assets/emoji/bubbles.png";
import Snowflake from "../assets/emoji/snowflake.png";
import Candy from "../assets/emoji/candy.png";
import Castle from "../assets/emoji/castle.png";
import Volcano from "../assets/emoji/volcano.png";
import ClassicalBuilding from "../assets/emoji/classical-building.png";
import CircusTent from "../assets/emoji/circus-tent.png";
import ArtistPalette from "../assets/emoji/artist-palette.png";
import MusicalNotes from "../assets/emoji/musical-notes.png";
import RollerSkate from "../assets/emoji/roller-skate.png";
import MirrorBall from "../assets/emoji/mirror-ball.png";
import Doughnut from "../assets/emoji/doughnut.png";
import Cloud from "../assets/emoji/cloud.png";
import Fireworks from "../assets/emoji/fireworks.png";
import Lightning from "../assets/emoji/lightning.png";
import Books from "../assets/emoji/books.png";
import Cityscape from "../assets/emoji/cityscape.png";
import Milkyway from "../assets/emoji/milkyway.png";
import Car from "../assets/emoji/car.png"
import Cinema from "../assets/emoji/cinema.png"
import Magic from "../assets/emoji/magic.png"
import Statue from "../assets/emoji/statue.png"
import Science from "../assets/emoji/science.png"
import Devil from "../assets/emoji/devil.png"
import Illusion from "../assets/emoji/magician.png"
import Plug from "../assets/emoji/plug.png"
import Laser from "../assets/emoji/laser.png"

export const options: OptionType[] = [
  {
    emoji: Alien,
    prompt: "Alien"
  },
  {
    emoji: AlienMonster,
    prompt: "Pixel Art"
  },
  {
    text: "Health",
    prompt: "Jogging people" // TODO Works fine for now. Check more times
  },
  {
    emoji: Robot,
    prompt: "Robot"
  },
  {
    emoji: Lightning,
    prompt: "Lightning"
  },
  {
    emoji: Car,
    prompt: "Neon Car"
  },
  {
    emoji: Magic,
    prompt: "Magic mana"
  },
  {
    emoji: AngelFace, // TODO add Angel Wing emoji
    prompt: "White wings"
  },
  {
    emoji: Rocket,
    prompt: "Spaceship"
  },
  {
    emoji: Umbrella, // TODO
                    //   1. Change to Rainy cloud
                    //   2. Make a prompt for umbrella
    prompt: "Rainy day"
  },
  {
    text: "Public Transport",
    prompt: "Tram"
  },
  {
    emoji: Yarn,
    prompt: "Yarn"
  },
  {
    emoji: Crown,
    prompt: "Royalty" // TODO Reconsider
  },
  {
    emoji: LightBulb,
    prompt: "Light bulb"
  },
  {
    emoji: Planet,
    prompt: "Space Globe"
  },
  {
    text: "Walking",
    prompt: "Walking Park" // TODO Works alright. Verify
  },
  {
    emoji: Books,
    prompt: "Books" // TODO Change it
  },
  {
    emoji: DogFace,
    prompt: "Dog"
  },
  {
    emoji: CatFace,
    prompt: "Cat"
  },
  {
    emoji: Confetti,
    prompt: "LED Confetti" // TODO consider
  },
  {
    text: "Cycling",
    prompt: "Neon Bicycle"
  },
  {
    emoji: FerrisWheel,
    prompt: "Ferris Wheel"
  },
  {
    emoji: Lion,
    prompt: "Lion"
  },
  {
    emoji: Cityscape,
    prompt: "Cityscape"
  },
  {
    emoji: Laser,
    prompt: "Laser Show"
  },
  {
    emoji: Science,
    prompt: "Science"
  },
  {
    emoji: Unicorn,
    prompt: "Unicorn"
  },
  {
    emoji: Butterfly,
    prompt: "Butterfly"
  },
  {
    emoji: TReX,
    prompt: "Dinosaur"
  },
  {
    emoji: Coral,
    prompt: "Ocean"
  },
  {
    text: "Live, work, stay",
    prompt: "Mundane Lifestyle" // TODO Test
  },
  {
    emoji: Plug,
    prompt: "Light beacon"
  },
  {
    emoji: Dragon,
    prompt: "Dragon"
  },
  {
    emoji: Cinema,
    prompt: "Cinematic" // TODO consider
  },
  {
    emoji: Statue,
    prompt: "Sculpture"
  },
  {
    emoji: DesertIsland,
    prompt: "Tropical island"
  },
  {
    text: "Stone now, Green later",
    prompt: "Building Overgrown vegetation"
  },
  {
    emoji: Milkyway,
    prompt: "Aurora borealis" // TODO double check
  },
  {
    emoji: Bubbles,
    prompt: "Bubbles" // TODO change
  },
  {
    emoji: Snowflake,
    prompt: "Snowflakes"
  },
  {
    emoji: Devil,
    prompt: "God Devil"
  },
  {
    text: "Mobility",
    prompt: "Flying cars"
  },
  {
    emoji: Illusion,
    prompt: "Illusion"
  },
  {
    emoji: Candy,
    prompt: "Candyland"
  },
  {
    emoji: Castle,
    prompt: "Castle"
  },
  {
    emoji: Volcano,
    prompt: "Volcano"
  },
  {
    emoji: ClassicalBuilding,
    prompt: "Ancient Greece"
  },
  {
    emoji: CircusTent,
    prompt: "Cirque Du Soleil"
  },
  {
    text: "Innovation",
    prompt: "Future Technology"
  },
  {
    emoji: ArtistPalette,
    prompt: "Colorful"
  },
  {
    emoji: MusicalNotes,
    prompt: "Musical notes"
  },
  {
    emoji: RollerSkate,
    prompt: "Roller skate"
  },
  {
    emoji: MirrorBall,
    prompt: "Disco"
  },
  {
    emoji: Doughnut,
    prompt: "Donut"
  },
  {
    emoji: Cloud,
    prompt: "Cloud"
  },
  {
    emoji: Fireworks,
    prompt: "Fireworks"
  },
  {
    text: "Accessibility",
    prompt: "Barrier-free"
  },
];
