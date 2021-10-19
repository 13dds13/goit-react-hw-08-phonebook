import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch } from "../../data/dataUI.json";
import { wrap } from "./Filter.module.css";
import { setFilter } from "../../redux/contacts/contactsActions/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors/contactsSelectors";
import FilterInputAndLabel from "../inputAndLabel/FilterInputAndLabel";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <div className={wrap}>
      <FilterInputAndLabel
        filter={filter}
        handleChange={handleChange}
        inputSearch={inputSearch}
      />
    </div>
  );
};

export default Filter;
