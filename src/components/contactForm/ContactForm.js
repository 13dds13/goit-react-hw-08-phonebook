import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { FORM_INITIAL_DATA } from "../../data/initialData.json";
import dataUI from "../../data/dataUI.json";
import { form, btn, input } from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import { addContact } from "../../redux/contacts/contactsOperations";
import { editContact } from "../../redux/contacts/contactsOperations";
import FormInputAndLabelName from "../inputAndLabel/formInputAndLabel/FormInputAndLabelName";
import FormInputAndLabelNumber from "../inputAndLabel/formInputAndLabel/FormInputAndLabelNumber";

const ContactForm = ({ editorData, isLoading, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const initData = editorData || FORM_INITIAL_DATA;
  const [state, setState] = useState(initData);

  useEffect(() => {
    !editorData && setState(FORM_INITIAL_DATA);
  }, [contacts, editorData]);

  const { name, number } = state;

  const handleChange = (data) => {
    const { name, value } = data;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editorData
      ? dispatch(editContact(id, { name, number }))
      : dispatch(addContact({ name, number }));
  };

  const { inputName, inputTel, editBtn, submitBtn } = dataUI;

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
        {editorData ? editBtn : submitBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  editorData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
  id: PropTypes.string,
};

export default ContactForm;
