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
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
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

export const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
  [editContactsRequest]: () => true,
  [editContactsSuccess]: () => false,
  [editContactsError]: () => false,
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

export const errorReducer = createReducer("", {
  [getContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [removeContactError]: (_, { payload }) => payload,
  [editContactsError]: (_, { payload }) => payload,
  [signupUsersError]: (_, { payload }) => payload,
  [loginUsersError]: (_, { payload }) => payload,
  [logoutUsersError]: (_, { payload }) => payload,
  [refreshUsersError]: (_, { payload }) => payload,
  [getContactsSuccess]: () => "",
  [addContactSuccess]: () => "",
  [removeContactSuccess]: () => "",
  [editContactsSuccess]: () => "",
  [signupUsersSuccess]: () => "",
  [loginUsersSuccess]: () => "",
  [logoutUsersSuccess]: () => "",
  [refreshUsersSuccess]: () => "",
});
