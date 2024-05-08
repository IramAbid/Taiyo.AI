// type.ts

import { Dispatch } from 'redux';

// Contact type includes firstName, lastName, status, and id properties
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: 'Active' | 'Inactive';
}

// Action types
export enum ContactActionTypes {
  ADD_CONTACT = 'ADD_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT', 
}

export interface ContactState {
  contacts: Contact[];
}

// Action creators

//Action for adding contacts
export const addContact = (contact: Contact) => ({
  type: ContactActionTypes.ADD_CONTACT, // Assign the action type from the enum
  payload: contact, // Assign the contact data as payload
});

//Action for editing contacts
export type EditContactAction = {
  type: typeof ContactActionTypes.EDIT_CONTACT; // Assign the action type from the enum
  payload: Contact; // Assign the contact data as payload
};

//Action for deleting contacts
export const deleteContact = (id: string) => ({
  type: ContactActionTypes.DELETE_CONTACT, // Assign the action type from the enum
  payload: id, // Assign the id data as payload
});

//Action for asynchronous deleting contacts
export const deleteContactAsync = (contactId: string) => (dispatch: Dispatch) => {
  dispatch(deleteContact(contactId));
};

