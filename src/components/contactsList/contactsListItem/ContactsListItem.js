import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import EditorForContact from "../../editorForContact/EditorForContact";
import stylesE from "./ContactsListItem.module.css";

const ContactsListItem = ({ contact, removeContact, styles, deleteBtn }) => {
  const [editor, setEditor] = useState(false);
  const dispatch = useDispatch();
  const removeContactItem = () => dispatch(removeContact(contact.id));

  const onClick = () => {
    setEditor(true);
  };

  useEffect(() => {
    setEditor(false);
  }, [contact]);

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
        <div className={stylesE.editor}>
          <EditorForContact
            id={contact.id}
            nameInitial={contact.name}
            numberInitial={contact.number}
            className={btn}
            onClick={onClick}
          />
        </div>
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
