import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

import React, { useState } from 'react';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const isContactEsist = addContact({ id: nanoid(6), name, number });
    if (!isContactEsist) {
      reset();
    }
  };
 

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formName}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formNumber}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
