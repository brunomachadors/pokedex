import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon/pokemon';
import infoMenuReducer from './info/info';
import mainMenuReducer from './mainMenu/mainMenu';
import pokemonListReducer from './pokemon/pokemonList';
import pokemonListTypeReducer from './type/pokemonTypeList';
import typeReducer from './type/pokemonType';
import itemListReducer from './item/itemList';
import itemReducer from './item/item';
import regionListReducer from './region/region';
import fossilListReducer from './fossil/fossil';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    infoMenu: infoMenuReducer,
    mainMenu: mainMenuReducer,
    pokemonList: pokemonListReducer,
    typeList: pokemonListTypeReducer,
    itemList: itemListReducer,
    fossilList: fossilListReducer,
    type: typeReducer,
    item: itemReducer,
    regions: regionListReducer,
  },
});
