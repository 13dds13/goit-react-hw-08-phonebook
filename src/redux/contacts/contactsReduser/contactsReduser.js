import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state = [], { payload }) => [...state, payload],
  [removeContactSuccess]: (state = [], { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter, isLoading });

export default contactsReduser;
