import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tresult } from '../../types/pokemon';

const initialState: { selectedPokemon: Tresult } = {
  selectedPokemon: {
    name: '',
    url: '',
    id: 0,
    image: '',
    types: [],
  },
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<Tresult>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { selectPokemon } = pokemonSlice.actions;

const pokemonReducer = pokemonSlice.reducer;
export default pokemonReducer;
