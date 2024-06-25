import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prompt: "",
  guesses: [],
  drawing: false,
  score: 0,
  rounds: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    addGuess: (state, action) => {
      state.guesses.push(action.payload);
    },
    toggleDrawing: (state) => {
      state.drawing = !state.drawing;
    },
    incrementScore: (state) => {
      state.score += 100;
    },
    startGame: (state, action) => {
      state.rounds = action.payload;
      state.score = 0;
    },
  },
});

export const { setPrompt, addGuess, toggleDrawing, incrementScore, startGame } =
  gameSlice.actions;
export default gameSlice.reducer;
