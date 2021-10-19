import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

const FilterInputAndLabel = ({ filter, handleChange, inputSearch }) => {
  const onChange = (e) => {
    const { value } = e.target;
    handleChange(value);
  };
  const filterInputId = nanoid();
  return (
    <>
      <label htmlFor={filterInputId}>{inputSearch}</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        autoComplete="off"
        onChange={onChange}
        value={filter}
      />
    </>
  );
};

FilterInputAndLabel.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
  inputSearch: PropTypes.string,
};

export default FilterInputAndLabel;
