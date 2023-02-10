import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  settings: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings(state, action) {
      state.settings = action.payload.data
    },
  },
});
  
export const {
  setSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
