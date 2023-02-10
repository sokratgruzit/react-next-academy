import { combineReducers } from 'redux';

import settingsSlice from './settings/settingsSlice';
import modeSlice from './mode/modeSlice';
import commonDataSlice from './commonData/commonDataSlice';
import utilsSlice from './utils/utilsReducer';

export const rootReducer = combineReducers({
   settings: settingsSlice,
   mode: modeSlice,
   utils: utilsSlice,
   commonData: commonDataSlice
});
