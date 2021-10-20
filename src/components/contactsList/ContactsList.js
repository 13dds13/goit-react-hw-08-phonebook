import React from "react";
import { useSelector } from "react-redux";
import { getContactsData } from "../../redux/contacts/contactsSelectors";
import dataUI from "../../data/dataUI.json";
import styles from "./ContactsList.module.css";
import ContactsListItem from "./contactsListItem/ContactsListItem";
import { removeContact } from "../../redux/contacts/contactsOperations";
import Notification from "../notification/Notification";

const ContactsList = () => {
  const { title, contacts } = useSelector(getContactsData);
  const { deleteBtn, noDataToRender } = dataUI;

  return contacts.length ? (
    <>
      <Notification title={title} />
      <ul className={styles.listWrap}>
        {contacts.map((contact) => (
          <ContactsListItem
            contact={contact}
            removeContact={removeContact}
            styles={styles}
            deleteBtn={deleteBtn}
            key={contact.id}
          />
        ))}
      </ul>
    </>
  ) : (
    <p>{noDataToRender}</p>
  );
};

export default ContactsList;
