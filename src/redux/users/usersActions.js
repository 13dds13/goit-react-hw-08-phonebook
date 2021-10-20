import { createAction } from "@reduxjs/toolkit";

export const signupUsersRequest = createAction("users/signupUsersRequest");
export const signupUsersSuccess = createAction("users/signupUsersSuccess");
export const signupUsersError = createAction("users/signupUsersError");

export const loginUsersRequest = createAction("users/loginUsersRequest");
export const loginUsersSuccess = createAction("users/loginUsersSuccess");
export const loginUsersError = createAction("users/loginUsersError");

export const logoutUsersRequest = createAction("users/logoutUsersRequest");
export const logoutUsersSuccess = createAction("users/logoutUsersSuccess");
export const logoutUsersError = createAction("users/logoutUsersError");

export const refreshUsersRequest = createAction("users/refreshUsersRequest");
export const refreshUsersSuccess = createAction("users/refreshUsersSuccess");
export const refreshUsersError = createAction("users/refreshUsersError");
