import { checkIsDoublingContacts } from "../../service/contactsPrepations";
import {
  addContactRequest,
  editContactsRequest,
} from "../contacts/contactsActions";
import dataUI from "../../data/dataUI.json";

const middlewarePreventContactsDuplication = (store) => (next) => (action) => {
  if (
    action.type !== addContactRequest.type &&
    action.type !== editContactsRequest.type
  ) {
    next(action);
    return;
  }

  const { items: contacts } = store.getState().contacts;
  const { name } = action.payload;
  const isAlreadyInContacts = checkIsDoublingContacts(contacts, name);

  if (action.type === addContactRequest.type) {
    if (isAlreadyInContacts) {
      alert(`${name} ${dataUI.alertMsg}`);
      return isAlreadyInContacts;
    }
  }

  if (action.type === editContactsRequest.type) {
    if (!isAlreadyInContacts) return;

    if (isAlreadyInContacts.id !== action.payload.id) {
      alert(`${name} ${dataUI.alertMsg}`);
      return isAlreadyInContacts;
    }
  }
};

export default middlewarePreventContactsDuplication;
