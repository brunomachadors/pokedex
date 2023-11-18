import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { selectedMenu: string } = {
  selectedMenu: 'photo',
};

export const infoMenuSlice = createSlice({
  name: 'infoMenu',
  initialState,
  reducers: {
    selectInfoMenu: (state, action: PayloadAction<string>) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const { selectInfoMenu } = infoMenuSlice.actions;

const infoMenuReducer = infoMenuSlice.reducer;
export default infoMenuReducer;
