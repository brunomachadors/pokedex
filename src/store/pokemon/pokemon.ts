import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tresult } from '../../types/pokemon';

const initialState: { selectedPokemon: Tresult } = {
  selectedPokemon: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    id: 1,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
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
