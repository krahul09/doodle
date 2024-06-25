import { useQuery } from "react-query";

const words = [
  "Apple",
  "Car",
  "House",
  "Tree",
  "Sun",
  "Dog",
  "Cat",
  "Chair",
  "Book",
  "Heart",
  "Star",
  "Clock",
  "Boat",
  "Fish",
  "Cake",
  "Bridge",
  "Key",
  "Hat",
  "Cloud",
  "Moon",
  "Pizza",
  "Guitar",
  "Butterfly",
  "Dragon",
  "Robot",
  "Unicorn",
  "Rocket",
  "Castle",
  "Whale",
  "Panda",
  "Snowman",
  "Rainbow",
  "Train",
  "Flower",
  "Spider",
  "Cupcake",
  "Jellyfish",
  "Volcano",
  "Ghost",
  "Beach",
  "Magnet",
  "Telescope",
  "Tornado",
  "Cactus",
  "Treasure",
  "Kangaroo",
  "Lighthouse",
  "Mermaid",
  "Hot air balloon",
  "Roller coaster",
];

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const useFetchPrompt = () => {
  const randomWord = getRandomWord();
  return { data: { word: randomWord }, isLoading: false, error: null };
};

export default useFetchPrompt;
