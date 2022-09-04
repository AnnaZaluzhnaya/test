import style from 'components/UserMenu/UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.userMenu}>
      <p className={style.userTitle}>
        Welcome, dear <span className={style.userName}>{userName}</span>
      </p>
      <br />
      <button className={style.outBtn} type="button" onClick={handleBtnClick}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
