import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FormInputAndLabelName from "../../inputAndLabel/formInputAndLabel/FormInputAndLabelName";
import FormInputAndLabelNumber from "../../inputAndLabel/formInputAndLabel/FormInputAndLabelNumber";

const ContactsListItem = ({
  contact,
  editContactItem,
  removeContact,
  styles,
  deleteBtn,
}) => {
  const [editor, setEditor] = useState(false);
  const dispatch = useDispatch();
  const removeContactItem = () => dispatch(removeContact(contact.id));

  const onClick = () => {
    setEditor((prev) => !prev);
  };

  const { listItem, name, number, btn } = styles;

  return (
    <li className={listItem}>
      <p className={name}>
        {contact.name}: <span className={number}>{contact.number}</span>
      </p>
      {!editor && (
        <button className={btn} type="button" onClick={onClick}>
          Edit
        </button>
      )}
      <button className={btn} type="button" onClick={removeContactItem}>
        {deleteBtn}
      </button>
      {editor && (
        <>
          <FormInputAndLabelName />
          <FormInputAndLabelNumber />
          <button className={btn} type="button" onClick={onClick}>
            Save
          </button>
        </>
      )}
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
