import React from "react";
import PropTypes from "prop-types";

const FormInputAndLabelNumber = ({
  number,
  handleChange,
  inputNumberId,
  className,
  inputLable,
}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };
  return (
    <>
      <label htmlFor={inputNumberId}>{inputLable}</label>
      <input
        className={className}
        id={inputNumberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        autoComplete="off"
        onChange={onChange}
        value={number}
      />
    </>
  );
};

FormInputAndLabelNumber.propTypes = {
  number: PropTypes.string,
  handleChange: PropTypes.func,
  inputNumberId: PropTypes.string,
  className: PropTypes.string,
  inputLable: PropTypes.string,
};

export default FormInputAndLabelNumber;
