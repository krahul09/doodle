import React from "react";

const GameOverScreen = ({ score, handleRestartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-8">Game Over!</h1>
        <p className="text-2xl mb-4">
          Your final score: <span className="text-yellow-400">{score}</span>
        </p>
        <button
          onClick={handleRestartGame}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
