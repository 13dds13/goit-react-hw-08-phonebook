import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { FORM_INITIAL_DATA } from "../../data/initialData.json";
import dataUI from "../../data/dataUI.json";
import {
  addContact,
  editContact,
} from "../../redux/contacts/contactsOperations";
import { form, btn, input } from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import FormInputAndLabelName from "../inputAndLabel/formInputAndLabel/FormInputAndLabelName";
import FormInputAndLabelNumber from "../inputAndLabel/formInputAndLabel/FormInputAndLabelNumber";

const ContactForm = ({ dataForEditor, isLoading, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const initialData = dataForEditor || FORM_INITIAL_DATA;
  const [state, setState] = useState({ ...initialData });

  useEffect(() => {
    setState(initialData);
  }, [contacts, initialData]);

  const { name, number } = state;

  const handleChange = (data) => {
    const { name, value } = data;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataForEditor
      ? dispatch(editContact(id, { name, number }))
      : dispatch(addContact({ name, number }));
  };

  const { inputName, inputTel, submitBtn } = dataUI;

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <form className={form} onSubmit={handleSubmit}>
      <FormInputAndLabelName
        handleChange={handleChange}
        name={name}
        inputNameId={inputNameId}
        inputLable={inputName}
        className={input}
      />
      <FormInputAndLabelNumber
        handleChange={handleChange}
        number={number}
        inputNumberId={inputNumberId}
        inputLable={inputTel}
        className={input}
      />
      <button className={btn} type="submit" disabled={isLoading}>
        {dataForEditor ? "Edit" : submitBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  isLoading: PropTypes.bool,
};

export default ContactForm;

// ==========================================================

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
// import PropTypes from "prop-types";
// import { FORM_INITIAL_DATA } from "../../data/initialData.json";
// import dataUI from "../../data/dataUI.json";
// import {
//   addContact,
//   editContact,
// } from "../../redux/contacts/contactsOperations";
// import { form, btn, input } from "./ContactForm.module.css";
// import { getContacts } from "../../redux/contacts/contactsSelectors";
// import FormInputAndLabelName from "../inputAndLabel/formInputAndLabel/FormInputAndLabelName";
// import FormInputAndLabelNumber from "../inputAndLabel/formInputAndLabel/FormInputAndLabelNumber";

// const ContactForm = ({ dataForEditor, isLoading, id }) => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const initialData = dataForEditor || FORM_INITIAL_DATA;
//   const [state, setState] = useState({ initialData });

//   useEffect(() => {
//     setState(initialData);
//   }, [contacts, initialData]);

//   const { name, number } = state;

//   const inputNameId = nanoid();
//   const inputNumberId = nanoid();

//   const handleChange = (data) => {
//     const { name, value } = data;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dataForEditor
//       ? dispatch(editContact(id, { name, number }))
//       : dispatch(addContact({ name, number }));
//   };

//   const { inputName, inputTel, submitBtn } = dataUI;

//   return (
//     <form className={form} onSubmit={handleSubmit}>
//       <FormInputAndLabelName
//         handleChange={handleChange}
//         name={name}
//         inputNameId={inputNameId}
//         inputLable={inputName}
//         className={input}
//       />
//       <FormInputAndLabelNumber
//         handleChange={handleChange}
//         number={number}
//         inputNumberId={inputNumberId}
//         inputLable={inputTel}
//         className={input}
//       />
//       <button className={btn} type="submit" disabled={isLoading}>
//         {dataForEditor ? "Edit" : submitBtn}
//       </button>
//     </form>
//   );
// };

// ContactForm.propTypes = {
//   isLoading: PropTypes.bool,
// };

// export default ContactForm;
