import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem, IItems } from '../../types/item/item';

const initialState: { lists: IItems } = {
  lists: {
    originalList: [],
    filteredList: [],
  },
};

export const itemListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateOriginalItemList: (state, action: PayloadAction<IItem[]>) => {
      state.lists.originalList = action.payload;
    },

    updateFilteredItemList: (state, action: PayloadAction<IItem[]>) => {
      state.lists.filteredList = action.payload;
    },
  },
});

export const { updateOriginalItemList, updateFilteredItemList } =
  itemListSlice.actions;

const itemListReducer = itemListSlice.reducer;
export default itemListReducer;
