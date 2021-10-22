import React from "react";
import PropTypes from "prop-types";
import ContactForm from "../contactForm/ContactForm";

const EditorForContact = ({ id, nameInitial, numberInitial }) => {
  return (
    <ContactForm
      id={id}
      editorData={{ name: nameInitial, number: numberInitial }}
    />
  );
};

EditorForContact.propTypes = {
  id: PropTypes.string,
  nameInitial: PropTypes.string,
  numberInitial: PropTypes.string,
};

export default EditorForContact;
