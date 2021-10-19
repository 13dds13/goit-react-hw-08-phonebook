import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "../contactsActions/contactsActions";
import axios from "axios";
import { BASE_URL } from "../../../data/firebase.json";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios(`${BASE_URL}.json`)
    .then(({ data }) => {
      if (!data) return;
      const preparadeData = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      dispatch(fetchContactsSuccess(preparadeData));
    })
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact = (data) => (dispatch) => {
  const isAlreadyInContacts = dispatch(addContactRequest(data));
  if (isAlreadyInContacts) return;
  axios
    .post(`${BASE_URL}.json`, data)
    .then((res) => {
      const id = res.data.name;
      dispatch(addContactSuccess({ ...data, id }));
    })
    .catch((error) => dispatch(addContactError(error)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`${BASE_URL}/${id}.json`)
    .then(dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};
