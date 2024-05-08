import { configureStore } from '@reduxjs/toolkit'; // Import configureStore function from Redux Toolkit
import rootReducer from './reducers'; // Import the rootReducer

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

export default store; 
