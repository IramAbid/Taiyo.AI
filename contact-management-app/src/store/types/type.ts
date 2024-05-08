// ../../store/types/type.ts

import { Dispatch } from 'redux';

// Assuming your Contact type includes firstName, lastName, status, and id properties
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

// Action types
export enum ContactActionTypes {
  ADD_CONTACT = 'ADD_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT', // Add EDIT_CONTACT enum value
}

export type EditContactAction = {
  type: typeof ContactActionTypes.EDIT_CONTACT; // Assign the action type from the enum
  payload: Contact; // Assign the contact data as payload
};

export interface ContactState {
  contacts: Contact[];
}

// Action creators
export const addContact = (contact: Contact) => ({
  type: ContactActionTypes.ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id: string) => ({
  type: ContactActionTypes.DELETE_CONTACT,
  payload: id,
});

export const deleteContactAsync = (contactId: string) => (dispatch: Dispatch) => {
  dispatch(deleteContact(contactId));
};

export const EditContactAction = (contact: Contact) => ({
  type: ContactActionTypes.EDIT_CONTACT, // Assign the action type from the enum
  payload: contact, // Assign the contact data as payload
});
