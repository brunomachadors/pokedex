import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { selectedType: string } = {
  selectedType: '',
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    selectType: (state, action: PayloadAction<string>) => {
      state.selectedType = action.payload;
    },
  },
});

export const { selectType } = typeSlice.actions;

const typeReducer = typeSlice.reducer;

export default typeReducer;
