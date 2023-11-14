import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { selectedMainMenu: string } = {
  selectedMainMenu: '',
};

const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  reducers: {
    selectMainMenu: (state, action: PayloadAction<string>) => {
      state.selectedMainMenu = action.payload;
    },
  },
});

export const { selectMainMenu } = mainMenuSlice.actions;

const mainMenuReducer = mainMenuSlice.reducer;

export default mainMenuReducer;
