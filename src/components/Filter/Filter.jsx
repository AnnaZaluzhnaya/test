import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { filter } from 'redux/contacts/contactsActions';
import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilteredContacts);
  const userName = useSelector(authSelectors.getUsername);

  const inputChange = event => {
    const changeValue = event.target.value;
    dispatch(filter(changeValue));
  };

  return (
    <div className={style.filter}>
      <h2 className={style.contactsTitle}>
        {' '}
        Dear
        <span className={style.userNameStyle}>{userName},</span> <br /> this is
        your unique phonebook 🕮 Let's start!
      </h2>
      <label className={style.filterLabel}>
        <p className={style.filterName}>| Find contacts by name |</p>
        <input
          className={style.input}
          type="text"
          name="number"
          value={value}
          onChange={inputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func,
};

export default Filter;
