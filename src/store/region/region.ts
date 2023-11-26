import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegion, IRegions } from '../../types/location';

const initialState: { lists: IRegions } = {
  lists: {
    originalList: [],
    filteredList: [],
    selected: {
      name: 'kanto',
      url: 'https://pokeapi.co/api/v2/region/1/',
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
