import { Dispatch, Action } from 'redux';
import { Contact, addContact, ContactActionTypes, EditContactAction } from '../../store/types/type';



export const editContactAction = (contact: Contact): EditContactAction => ({
  type: ContactActionTypes.EDIT_CONTACT, // Assign the action type from the enum
  payload: contact, // Assign the contact data as payload
});

export const addContactAction = (contact: Contact) => (dispatch: Dispatch<{ type: ContactActionTypes; payload: Contact }>) => {
  dispatch(addContact(contact));
};

