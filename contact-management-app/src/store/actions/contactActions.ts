import { Dispatch } from 'redux';
import { Contact, addContact, ContactActionTypes, EditContactAction } from '../../store/types/type';

// Defined the addContactAction function which dispatches an action to add a contact
export const addContactAction = (contact: Contact) => (dispatch: Dispatch<{ type: ContactActionTypes; payload: Contact }>) => {
  // Dispatch the addContact action with the contact data
  dispatch(addContact(contact));
};

// Defined the editContactAction function which creates an action to edit a contact
export const editContactAction = (contact: Contact): EditContactAction => ({
  type: ContactActionTypes.EDIT_CONTACT, // Assign the action type from the enum
  payload: contact, // Assign the contact data as payload
});


