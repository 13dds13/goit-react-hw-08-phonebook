import { createSelector } from "@reduxjs/toolkit";
import { contactsToRender } from "../../../service/contactsPrepations";

const getFilter = (state) => state.contacts.filter;
const getContacts = (state) => state.contacts.items;
const getIsLoading = (state) => state.contacts.isLoading;

const getContactsData = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => contactsToRender(contacts, filter)
);

export { getContacts, getFilter, getIsLoading, getContactsData };
