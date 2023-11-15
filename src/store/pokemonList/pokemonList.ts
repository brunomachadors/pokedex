import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tresult } from '../../types/pokemon';

const initialState: { pokemonList: Tresult[] } = {
  pokemonList: [],
};

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    originalList: (state, action: PayloadAction<Tresult[]>) => {
      state.pokemonList = action.payload;
    },

    filteredList: (state, action: PayloadAction<Tresult[]>) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { originalList, filteredList } = pokemonListSlice.actions;

const pokemonListReducer = pokemonListSlice.reducer;
export default pokemonListReducer;
