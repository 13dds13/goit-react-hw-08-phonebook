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
import { errorMsg } from "../../data/dataUI.json";

export const usersSignup = (userData) => (dispatch) => {
  dispatch(signupUsersRequest());
  axios
    .post(BASE_URL + users.signup, userData)
    .then(({ data }) => {
      const {
        user: { name, email },
        token,
      } = data;
      dispatch(signupUsersSuccess({ name, email, token }));
      axios.defaults.headers.common["Authorization"] = token;
    })
    .catch((error) => error && dispatch(signupUsersError(errorMsg.badSignup)));
};

export const usersLogin = (userData) => (dispatch) => {
  dispatch(loginUsersRequest());
  axios
    .post(BASE_URL + users.login, userData)
    .then(({ data }) => {
      const {
        user: { name, email },
        token,
      } = data;
      dispatch(loginUsersSuccess({ name, email, token }));
      axios.defaults.headers.common["Authorization"] = token;
    })
    .catch((error) => error && dispatch(loginUsersError(errorMsg.badLogin)));
};

export const usersRefresh = (token) => (dispatch) => {
  dispatch(refreshUsersRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios(BASE_URL + users.refresh)
    .then(({ data }) => {
      return dispatch(refreshUsersSuccess(data));
    })
    .catch(
      (error) => error && dispatch(refreshUsersError(errorMsg.fatalError))
    );
};

export const usersLogout = () => (dispatch) => {
  dispatch(logoutUsersRequest());

  axios
    .post(BASE_URL + users.logout)
    .then(() => {
      axios.defaults.headers.common["Authorization"] = "";
      return dispatch(logoutUsersSuccess());
    })
    .catch((error) => error && dispatch(logoutUsersError(errorMsg.fatalError)));
};
