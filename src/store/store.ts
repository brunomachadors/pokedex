import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon/pokemon';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
