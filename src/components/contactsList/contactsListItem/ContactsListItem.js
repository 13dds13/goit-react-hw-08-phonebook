import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ContactsListItem = ({ contact, removeContact, styles, deleteBtn }) => {
  const dispatch = useDispatch();
  const removeContactItem = () => dispatch(removeContact(contact.id));

  const { listItem, name, number, btn } = styles;

  return (
    <li className={listItem}>
      {" "}
      <p className={name}>
        {contact.name}: <span className={number}>{contact.number}</span>
      </p>
      <button className={btn} type="button" onClick={removeContactItem}>
        {deleteBtn}
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  removeContact: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    listItem: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    btn: PropTypes.string,
  }),
};

export default ContactsListItem;
