// actions.ts
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './ActionTypes';
import { Contact } from "../types/type";
export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id: string) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const editContact = (id: string, updatedContact: Contact) => ({
  type: EDIT_CONTACT,
  payload: { id, updatedContact },
});
