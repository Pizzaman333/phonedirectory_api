import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
  type: 'contacts/ADD_CONTACT',
  payload: { id: nanoid(), name, number },
});

export const deleteContact = (id) => ({
  type: 'contacts/DELETE_CONTACT',
  payload: id,
});