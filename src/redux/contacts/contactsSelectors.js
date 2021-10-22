import { createSelector } from "@reduxjs/toolkit";
import { contactsToRender } from "../../service/contactsPrepations";

const getFilter = (state) => state.contacts.filter;
const getContacts = (state) => state.contacts.items;

const getContactsData = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => contactsToRender(contacts, filter)
);

export { getContacts, getFilter, getContactsData };
