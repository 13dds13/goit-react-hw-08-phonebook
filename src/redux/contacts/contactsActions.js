import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsError = createAction("contacts/getContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const removeContactRequest = createAction(
  "contacts/removeContactRequest"
);
export const removeContactSuccess = createAction(
  "contacts/removeContactSuccess"
);
export const removeContactError = createAction("contacts/removeContactError");

export const editContactsRequest = createAction("contacts/editContactsRequest");
export const editContactsSuccess = createAction("contacts/editContactsSuccess");
export const editContactsError = createAction("contacts/editContactsError");

export const setFilter = createAction("contacts/setFilter");
