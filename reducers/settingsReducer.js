
const INITIAL_STATE = {
   settings: null,
 };
 
 function settingsReducer(state = INITIAL_STATE, action) {
   
   if(action.type === 'SET_SETTINGS'){
      const data = action.payload
      return {
         ...state,
         settings: data,
       }
   }

   return state;
 }
 
 export default settingsReducer;