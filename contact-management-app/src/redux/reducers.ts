// reducers.ts
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './ActionTypes';
import { Contact } from '../types/type';

const initialState: Contact[] = [];

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);
    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload.updatedContact : contact
      );
    default:
      return state;
  }
};

export default contactReducer;
