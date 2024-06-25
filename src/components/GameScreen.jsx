import React from "react";
import Guessing from "./Guessing";
import Canvas from "./Canvas";

const GameScreen = ({
  currentRound,
  rounds,
  prompt,
  timer,
  score,
  handleGuess,
  handleNextRound,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500 text-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-200">
        Round {currentRound}
      </h1>
      <p className="text-2xl mb-10 text-gray-200">
        Draw this: <span className="text-yellow-400">{prompt}</span>
      </p>

      <Guessing handleGuess={handleGuess} />
      <p className="text-lg text-gray-300">Time left: {timer} seconds</p>
      <p className="text-lg text-gray-300 mb-4">Score: {score}</p>
      <Canvas />

      {timer === 0 && (
        <button
          onClick={handleNextRound}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next Round
        </button>
      )}
    </div>
  );
};

export default GameScreen;
