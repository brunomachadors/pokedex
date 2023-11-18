import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPokemonType, IPokemonTypes } from '../../types/pokemonTypes';

const initialState: { lists: IPokemonTypes } = {
  lists: {
    originalList: [],
    filteredList: [],
  },
};

export const pokemonTypeListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateOriginalTypeList: (state, action: PayloadAction<IPokemonType[]>) => {
      state.lists.originalList = action.payload;
    },

    updateFilteredTypeList: (state, action: PayloadAction<IPokemonType[]>) => {
      state.lists.filteredList = action.payload;
    },
  },
});

export const { updateOriginalTypeList, updateFilteredTypeList } =
  pokemonTypeListSlice.actions;

const pokemonListTypeReducer = pokemonTypeListSlice.reducer;
export default pokemonListTypeReducer;
