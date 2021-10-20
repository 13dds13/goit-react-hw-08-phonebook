import {
  getContactsRequest,
  // getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsActions";
import axios from "axios";
import { BASE_URL, contactsHandling } from "../../data/db.json";

export const getContacts = (token) => (dispatch) => {
  dispatch(getContactsRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios(BASE_URL + contactsHandling)
    .then((res) => {
      console.log(res);
      // if (!data) return;
      // const preparadedData = Object.keys(data).map((key) => ({
      //   ...data[key],
      //   id: key,
      // }));
      // dispatch(getContactsSuccess(preparadedData));
    })
    .catch((error) => dispatch(getContactsError(error)));
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
