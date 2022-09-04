import style from 'pages/LoginPage/LoginPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={style.formTitle}>Login form</h1>

      <form
        className={style.loginForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label style={style.LogLabel}>
          <span className={style.labelName}>|Your mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={style.LogLabel}>
          <span className={style.labelName}>|Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={style.formBtn}>
          log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
