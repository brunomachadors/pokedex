import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './pokemon/pokemon';
import infoMenuReducer from './info/info';
import mainMenuReducer from './mainMenu/mainMenu';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    infoMenu: infoMenuReducer,
    mainMenu: mainMenuReducer,
  },
});
