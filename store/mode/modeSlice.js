import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    mode: false
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode(state, action) {
      state.mode = !state.mode
    },
  },
});
  
export const {
  toggleMode,
} = modeSlice.actions;

export default modeSlice.reducer;
