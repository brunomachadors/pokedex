import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon/pokemon';
import infoMenuReducer from './info/info';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    infoMenu: infoMenuReducer,
  },
});
