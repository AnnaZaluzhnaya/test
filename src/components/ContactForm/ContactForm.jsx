import { useState } from 'react';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === name)) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(contactsOperations.addContacts({ name, number }));
    Notiflix.Notify.info('Contact created');
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

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
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formBox}>
        <label htmlFor={nameInputId} className={style.contactLabel}>
          <p className={style.inputTitle}>Name</p>
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId} className={style.contactLabel}>
          <p className={style.inputTitle}>Number</p>
          <input
            className={style.input}
            type="tel"
            name="number"
            value={number}
            id={numberInputId}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={style.addBtn}>
          <span className={style.btnName}>Add contact</span>
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
