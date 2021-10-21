import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
} from "./contactsActions";
import axios from "axios";
import { BASE_URL, contactsHandling } from "../../data/db.json";

export const getContacts = (token) => (dispatch) => {
  dispatch(getContactsRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios(BASE_URL + contactsHandling)
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (data) => (dispatch) => {
  const isAlreadyInContacts = dispatch(addContactRequest(data));
  if (isAlreadyInContacts) return;
  axios
    .post(BASE_URL + contactsHandling, data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`${BASE_URL}${contactsHandling}/${id}`)
    .then(dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export const editContact = (id, data) => (dispatch) => {
  const isAlreadyInContacts = dispatch(editContactsRequest({ id, ...data }));
  if (isAlreadyInContacts) return;
  axios
    .patch(`${BASE_URL}${contactsHandling}/${id}`, data)
    .then(({ data }) => dispatch(editContactsSuccess(data)))
    .catch((error) => dispatch(editContactsError(error)));
};
