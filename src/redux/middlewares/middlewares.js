import { checkIsDoublingContacts } from "../../service/contactsPrepations";
import { addContactRequest } from "../contacts/contactsActions/contactsActions";
import dataUI from "../../data/dataUI.json";

const middlewarePreventContactsDuplication = (store) => (next) => (action) => {
  if (action.type !== addContactRequest.type) {
    next(action);
    return;
  }
  const { items: contacts } = store.getState().contacts;
  const { name } = action.payload;
  const isAlreadyInContacts = checkIsDoublingContacts(contacts, name);
  if (isAlreadyInContacts) {
    alert(`${name} ${dataUI.alertMsg}`);
    return isAlreadyInContacts;
  }
  next(action);
};

export default middlewarePreventContactsDuplication;
