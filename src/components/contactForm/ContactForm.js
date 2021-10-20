import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { FORM_INITIAL_DATA } from "../../data/initialData.json";
import dataUI from "../../data/dataUI.json";
import { addContact } from "../../redux/contacts/contactsOperations";
import { form, btn, input } from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import FormInputAndLabelName from "../inputAndLabel/formInputAndLabel/FormInputAndLabelName";
import FormInputAndLabelNumber from "../inputAndLabel/formInputAndLabel/FormInputAndLabelNumber";

const ContactForm = ({ isLoading }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [state, setState] = useState({ ...FORM_INITIAL_DATA });

  useEffect(() => {
    setState({ ...FORM_INITIAL_DATA });
  }, [contacts]);

  const { name, number } = state;

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChange = (data) => {
    const { name, value } = data;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
  };

  const { inputName, inputTel, submitBtn } = dataUI;

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
        {submitBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  isLoading: PropTypes.bool,
};

export default ContactForm;
