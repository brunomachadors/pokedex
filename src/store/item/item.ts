import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IItem } from '../../types/item/item';

const initialState: { selectedItem: IItem } = {
  selectedItem: {
    attributes: [
      {
        name: '',
        url: '',
      },
    ],
    baby_trigger_for: null,
    category: {
      name: '',
      url: '',
    },
    cost: 0,
    effect_entries: [
      {
        effect: '',
        language: {
          name: '',
          url: '',
        },
        short_effect: '',
      },
    ],
    flavor_text_entries: [
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        text: 'The best BALL that\ncatches a POKéMON\nwithout fail.',
        version_group: {
          name: 'ruby-sapphire',
          url: 'https://pokeapi.co/api/v2/version-group/5/',
        },
      },
    ],
    fling_effect: null,
    fling_power: null,
    game_indices: [
      {
        game_index: 0,
        generation: {
          name: '',
          url: '',
        },
      },
    ],
    held_by_pokemon: [],
    id: 0,
    machines: [],
    name: '',
    names: [
      {
        language: {
          name: '',
          url: '',
        },
        name: '',
      },
    ],
    sprites: {
      default: '',
    },
    active: false,
  },
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<IItem>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectItem } = itemSlice.actions;

const itemReducer = itemSlice.reducer;
export default itemReducer;
