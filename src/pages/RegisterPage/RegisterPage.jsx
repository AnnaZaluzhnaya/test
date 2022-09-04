import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import style from 'pages/RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={style.formTitle}>Registration form</h1>

      <form
        className={style.registerForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>
          <span className={style.labelName}>|Name</span>
          <input
            className={style.registerInput}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          <span className={style.labelName}>|Your mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span className={style.labelName}>|Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={style.formBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
