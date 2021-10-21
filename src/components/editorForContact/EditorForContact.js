import React from "react";
import ContactForm from "../contactForm/ContactForm";

const EditorForContact = ({ id, nameInitial, numberInitial }) => {
  return (
    <ContactForm
      id={id}
      dataForEditor={{ id, name: nameInitial, number: numberInitial }}
    />
  );
};

export default EditorForContact;
