import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './pokemon/pokemon';
import infoMenuReducer from './info/info';
import mainMenuReducer from './mainMenu/mainMenu';
import pokemonListReducer from './pokemonList/pokemonList';
import pokemonListTypeReducer from './pokemonTypes/pokemonTypeList';
import typeReducer from './type/pokemonType';
import itemListReducer from './itemList/itemList';
import itemReducer from './item/item';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    infoMenu: infoMenuReducer,
    mainMenu: mainMenuReducer,
    pokemonList: pokemonListReducer,
    typeList: pokemonListTypeReducer,
    itemList: itemListReducer,
    type: typeReducer,
    item: itemReducer,
  },
});
