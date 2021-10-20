import { createReducer, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  signupUsersSuccess,
  loginUsersSuccess,
  logoutUsersSuccess,
  refreshUsersSuccess,
} from "./usersActions";

const persistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: "token",
};

const usersData = createReducer(
  {},
  {
    [signupUsersSuccess]: (_, { payload }) => payload,
    [loginUsersSuccess]: (_, { payload }) => payload,
    [logoutUsersSuccess]: () => ({}),
    [refreshUsersSuccess]: (state, { payload }) => ({ ...payload, ...state }),
  }
);

const isLogged = createReducer(false, {
  [signupUsersSuccess]: () => true,
  [loginUsersSuccess]: () => true,
  [logoutUsersSuccess]: () => false,
  [refreshUsersSuccess]: () => true,
});

const persistedUsersData = persistReducer(persistConfig, usersData);

const usersRedusers = combineReducers({
  usersData: persistedUsersData,
  isLogged,
});

export default usersRedusers;
