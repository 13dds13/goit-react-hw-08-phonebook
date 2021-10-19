import React from "react";
import PropTypes from "prop-types";

const FormInputAndLabelName = ({
  name,
  handleChange,
  inputNameId,
  className,
  inputLable,
}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };
  return (
    <>
      <label htmlFor={inputNameId}>{inputLable}</label>
      <input
        className={className}
        id={inputNameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={onChange}
        value={name}
      />
    </>
  );
};

FormInputAndLabelName.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  inputNameId: PropTypes.string,
  className: PropTypes.string,
  inputLable: PropTypes.string,
};

export default FormInputAndLabelName;
