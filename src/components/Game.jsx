import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrompt, startGame, incrementScore } from "../features/gameSlice";
import SetupScreen from "./SetupScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";

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

const Game = () => {
  const dispatch = useDispatch();
  const prompt = useSelector((state) => state.game.prompt);
  const score = useSelector((state) => state.game.score);
  const rounds = useSelector((state) => state.game.rounds);

  const [timer, setTimer] = useState(30);
  const [currentRound, setCurrentRound] = useState(0);
  const [customRounds, setCustomRounds] = useState("");

  useEffect(() => {
    if (currentRound > 0 && currentRound <= rounds) {
      dispatch(setPrompt(getRandomWord()));
      setTimer(30);
    }
  }, [currentRound, rounds, dispatch]);

  useEffect(() => {
    let interval;
    if (timer > 0 && timer <= 30) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      handleNextRound(); // Automatically move to the next round when timer reaches 0
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleGuess = (guess) => {
    if (guess.toLowerCase() === prompt.toLowerCase()) {
      dispatch(incrementScore());
      setTimer(0); // End round immediately upon correct guess
    }
  };

  const handleStartGame = () => {
    const numRounds = customRounds ? parseInt(customRounds) : 0;
    dispatch(startGame(numRounds));
    setCurrentRound(1); // Start the first round
  };

  const handleNextRound = () => {
    setCurrentRound((prevRound) => prevRound + 1);
    dispatch(setPrompt("")); // Clear prompt for the next round
    setTimer(30); // Reset timer for the next round
  };

  const handleRestartGame = () => {
    setCurrentRound(0);
    setCustomRounds("");
    dispatch(setPrompt(""));
  };

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {currentRound === 0 && (
        <SetupScreen
          customRounds={customRounds}
          setCustomRounds={setCustomRounds}
          handleStartGame={handleStartGame}
        />
      )}

      {currentRound > 0 && currentRound <= rounds && (
        <GameScreen
          currentRound={currentRound}
          rounds={rounds}
          prompt={prompt}
          timer={timer}
          score={score}
          handleGuess={handleGuess}
          handleNextRound={handleNextRound}
        />
      )}

      {currentRound > rounds && (
        <GameOverScreen score={score} handleRestartGame={handleRestartGame} />
      )}
    </div>
  );
};

export default Game;
