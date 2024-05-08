import { ContactActionTypes, ContactState, Contact } from '../types/type';

// Defined initial state for the contact reducer
const initialState: ContactState = {
  contacts: [], // Initial contacts list is empty
};

// Defined the contact reducer function
const contactReducer = (state = initialState, action: any) => {

  switch (action.type) {

    // Action type for adding a new contact
    case ContactActionTypes.ADD_CONTACT:
      return {
        ...state,
        // Add the new contact to the contacts list
        contacts: [...state.contacts, action.payload],
      };
      
    // Action type for editing an existing contact
    case ContactActionTypes.EDIT_CONTACT:
      return {
        ...state,
        // Map over the contacts list, if the contact ID matches the edited contact's ID,
        // replace it with the edited contact, otherwise keep the contact unchanged
        contacts: state.contacts.map((contact: Contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    // Action type for deleting a contact
    case ContactActionTypes.DELETE_CONTACT:
      return {
        ...state,
        // Filter out the contact with the matching ID from the contacts list
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
      
    // Default case: return the current state unchanged
    default:
      return state;
  }
};

export default contactReducer;
