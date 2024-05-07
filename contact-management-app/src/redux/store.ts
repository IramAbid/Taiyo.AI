import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers';

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add other reducers if you have them
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;
