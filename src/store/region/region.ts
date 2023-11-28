import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegion, IRegions } from '../../types/location';

const initialState: { lists: IRegions } = {
  lists: {
    originalList: [],
    filteredList: [],
    selected: {
      url: '',
      id: 0,
      locations: [
        {
          name: '',
          url: '',
        },
      ],
      main_generation: {
        name: '',
        url: '',
      },
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
      pokedexes: [
        {
          name: '',
          url: '',
        },
      ],
      version_groups: [
        {
          name: '',
          url: '',
        },
      ],
    },
  },
};

export const regionListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    originalRegionList: (state, action: PayloadAction<IRegion[]>) => {
      state.lists.originalList = action.payload;
    },

    filteredRegionList: (state, action: PayloadAction<IRegion[]>) => {
      state.lists.filteredList = action.payload;
    },

    selectRegion: (state, action: PayloadAction<IRegion>) => {
      state.lists.selected = action.payload;
    },
  },
});

export const { originalRegionList, filteredRegionList, selectRegion } =
  regionListSlice.actions;

const regionListReducer = regionListSlice.reducer;
export default regionListReducer;
