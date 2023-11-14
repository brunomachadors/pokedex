import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// create initial state
const initialState: { selectedMenu: string } = {
  selectedMenu: 'photo',
};

//Create slice

export const infoMenuSlice = createSlice({
  name: 'infoMenu',
  initialState,
  reducers: {
    selectInfoMenu: (state, action: PayloadAction<string>) => {
      state.selectedMenu = action.payload;
    },
  },
});

// export actions

export const { selectInfoMenu } = infoMenuSlice.actions;

// export redecer
const infoMenuReducer = infoMenuSlice.reducer;
export default infoMenuReducer;
