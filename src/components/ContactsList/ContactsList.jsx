import React from 'react';
import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/createSlise';

export function ContactsList() {
  const filteredContact = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {filteredContact.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button
              className={css.contactListBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};
