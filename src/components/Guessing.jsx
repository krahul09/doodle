import React, { useState } from "react";

const Guessing = ({ handleGuess }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border border-gray-500 rounded px-3 py-2 mr-2"
        placeholder="Enter your guess"
      />
      <button
        type="submit"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Guess
      </button>
    </form>
  );
};

export default Guessing;
