import React from 'react';
import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  return (
    <div>
      <input
        className={css.filter}
        type="text"
        value={filter}
        onChange={ev => dispatch(changeFilter(ev.target.value))}
        name="filter"
        placeholder="Search by name"
      />
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
