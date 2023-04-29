import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    mode: false,
    newBooleanState: false,
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode(state, action) {
      state.mode = !state.mode
    },
    toggleNewBooleanState(state) {
      state.newBooleanState = true;
    },
    makeStateFalse(state) {
      state.newBooleanState = false;
    }
  },
});
  
export const {
  toggleMode,
  toggleNewBooleanState,
  makeStateFalse
} = modeSlice.actions;

export default modeSlice.reducer;
