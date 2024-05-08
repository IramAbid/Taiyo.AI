
import { combineReducers } from 'redux';
import contactReducer from '../reducers/contactReducers'; // Import the contactReducer

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  contact: contactReducer, // Assign the contactReducer to the 'contact' slice of the state
});

// Define the RootState type by using ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
