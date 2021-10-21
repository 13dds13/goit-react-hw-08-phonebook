import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  editContactsSuccess,
  setFilter,
} from "./contactsActions";

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state = [], { payload }) => [...state, payload],
  [removeContactSuccess]: (state = [], { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [editContactsSuccess]: (state = [], { payload }) =>
    state.map((contact) => (contact.id !== payload.id ? contact : payload)),
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter });

export default contactsReduser;
