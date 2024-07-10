import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem, IItems } from '../../types/item/item';

const initialState: { lists: IItems } = {
  lists: {
    originalList: [],
    filteredList: [],
  },
};

export const fossilListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateOriginalFossilList: (state, action: PayloadAction<IItem[]>) => {
      state.lists.originalList = action.payload;
    },

    updateFilteredFossilList: (state, action: PayloadAction<IItem[]>) => {
      state.lists.filteredList = action.payload;
    },
  },
});

export const { updateOriginalFossilList, updateFilteredFossilList } =
  fossilListSlice.actions;

const fossilListReducer = fossilListSlice.reducer;
export default fossilListReducer;
