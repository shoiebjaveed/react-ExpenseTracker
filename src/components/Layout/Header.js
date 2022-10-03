import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useDispatch, useSelector } from 'react-redux';
import { themeAction } from '../../store/themeSlice';
import { BsFillSunFill } from "react-icons/bs";


const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useNavigate()
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.expenses.totalAmount)

  
  const toggleThemeHandler = () => {
    dispatch(themeAction.toggleTheme())
  }


  const logoutHandler = () => {
    authCtx.logout();
    history('/');
  }

  return (
    <header className={classes.header}>
      <div className={classes.logout}>
        {isLoggedIn && <h3 onClick={logoutHandler}><AiOutlineLogout /></h3>}
      </div>
      {totalAmount >= 1000 && <div className={classes.theme}>
        {isLoggedIn && <h3 onClick={toggleThemeHandler}><BsFillSunFill /></h3>}
      </div>}
      <div className={classes.title}>
        <Link to='/'>
          <h3>Expense Tracker</h3>
        </Link>
      </div>
      {isLoggedIn && <h2>Welcome, {authCtx.username}</h2>}
      <div className={classes.profile}>
        {isLoggedIn &&
          <Link to='/profile'>
            <h3><BsPersonLinesFill /></h3>
          </Link>}
      </div>

    </header>
  )
}

export default Header;