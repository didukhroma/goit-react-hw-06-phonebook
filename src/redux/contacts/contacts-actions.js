import { v4 as genId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: genId(),
    name,
    number,
  },
}));
const deleteContact = createAction('contact/delete');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact };
