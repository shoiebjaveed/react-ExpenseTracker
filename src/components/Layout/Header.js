import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';


const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useNavigate()

  const logoutHandler = () => {
    authCtx.logout();
    history('/');
  }

  return (
    <header className={classes.header}>
      <div className={classes.logout}>
        {isLoggedIn && <h3 onClick={logoutHandler}><AiOutlineLogout /></h3>}
      </div>
      {isLoggedIn && <h2>Welcome, {authCtx.username}</h2>}
      <div className={classes.title}>
        <Link to='/'>
        <h3>Expense Tracker</h3>
        </Link>
      </div>
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