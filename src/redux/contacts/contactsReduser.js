import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  setFilter,
} from "./contactsActions";

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state = [], { payload }) => [...state, payload],
  [removeContactSuccess]: (state = [], { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter });

export default contactsReduser;
