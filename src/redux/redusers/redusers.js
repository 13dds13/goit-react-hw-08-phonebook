import { createReducer } from "@reduxjs/toolkit";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from "../contacts/contactsActions";
import {
  signupUsersError,
  signupUsersRequest,
  signupUsersSuccess,
  loginUsersRequest,
  loginUsersSuccess,
  loginUsersError,
  logoutUsersRequest,
  logoutUsersSuccess,
  logoutUsersError,
  refreshUsersRequest,
  refreshUsersSuccess,
  refreshUsersError,
} from "../users/usersActions";

const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
  [signupUsersRequest]: () => true,
  [signupUsersSuccess]: () => false,
  [signupUsersError]: () => false,
  [loginUsersRequest]: () => true,
  [loginUsersSuccess]: () => false,
  [loginUsersError]: () => false,
  [logoutUsersRequest]: () => true,
  [logoutUsersSuccess]: () => false,
  [logoutUsersError]: () => false,
  [refreshUsersRequest]: () => true,
  [refreshUsersSuccess]: () => false,
  [refreshUsersError]: () => false,
});

export default isLoadingReducer;
