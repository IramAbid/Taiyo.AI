import { ContactActionTypes, ContactState,Contact } from '../types/type'; // Importing ContactActionTypes and ContactState

const initialState: ContactState = {
  contacts: [],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ContactActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case ContactActionTypes.EDIT_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact: Contact) =>
            contact.id === action.payload.id ? action.payload : contact
          ),
      };
    case ContactActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;

