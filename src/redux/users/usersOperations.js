import {
  signupUsersRequest,
  signupUsersSuccess,
  signupUsersError,
  loginUsersRequest,
  loginUsersSuccess,
  loginUsersError,
  logoutUsersRequest,
  logoutUsersSuccess,
  logoutUsersError,
  refreshUsersRequest,
  refreshUsersSuccess,
  refreshUsersError,
} from "./usersActions";
import axios from "axios";
import { BASE_URL, users } from "../../data/db.json";

export const usersSignup = (userData) => (dispatch) => {
  dispatch(signupUsersRequest());
  axios
    .post(BASE_URL + users.signup, userData)
    .then(({ data }) => {
      dispatch(signupUsersSuccess(data));
    })
    .catch((error) => dispatch(signupUsersError(error)));
};

export const usersLogin = (userData) => (dispatch) => {
  dispatch(loginUsersRequest());
  axios
    .post(BASE_URL + users.login, userData)
    .then(({ data }) => {
      dispatch(loginUsersSuccess(data));
    })
    .catch((error) => dispatch(loginUsersError(error)));
};

export const usersRefresh = (token) => (dispatch) => {
  dispatch(refreshUsersRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios(BASE_URL + users.refresh)
    .then(({ data }) => {
      dispatch(refreshUsersSuccess(data));
    })
    .catch((error) => dispatch(refreshUsersError(error)));
};

export const usersLogout = (token) => (dispatch) => {
  dispatch(logoutUsersRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .post(BASE_URL + users.logout)
    .then(({ data }) => {
      dispatch(logoutUsersSuccess(data));
    })
    .catch((error) => dispatch(logoutUsersError(error)));
};
