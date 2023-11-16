import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonList, Tresult } from '../../types/pokemon';

const initialState: { lists: PokemonList } = {
  lists: {
    originalList: [],
    filteredList: [],
  },
};

export const pokemonListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateOriginalList: (state, action: PayloadAction<Tresult[]>) => {
      state.lists.originalList = action.payload;
    },

    updateFilteredList: (state, action: PayloadAction<Tresult[]>) => {
      state.lists.filteredList = action.payload;
    },
  },
});

export const { updateOriginalList, updateFilteredList } =
  pokemonListSlice.actions;

const pokemonListReducer = pokemonListSlice.reducer;
export default pokemonListReducer;
