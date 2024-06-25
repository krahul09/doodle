import React from "react";

const SetupScreen = ({ customRounds, setCustomRounds, handleStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="mb-4 text-3xl text-gray-800">Enter Number of Rounds</h2>
        <div className="flex items-center mt-4">
          <input
            type="number"
            value={customRounds}
            onChange={(e) => setCustomRounds(e.target.value)}
            min="1"
            max="99"
            className="border border-gray-300 rounded px-3 py-2 mr-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-500"
            style={{ width: "80px" }}
          />
          <button
            onClick={handleStartGame}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupScreen;
