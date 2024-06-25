import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../src/features/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
