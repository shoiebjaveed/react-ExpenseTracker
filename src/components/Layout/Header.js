import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { BsFillPersonFill, BsExclamationTriangle } from "react-icons/bs";

const Header = () => {

  return (
    <header className={classes.header}>
      <Link to='/'><h1>Expense Tracker</h1></Link>
      <div className={classes.profile}>
        <Link to='/profile'>
          <h3><BsFillPersonFill /></h3>
        </Link>
      </div>
      <div className={classes.complete}>
        <Link to='/complete'>
          <h3><BsExclamationTriangle /></h3>
        </Link>
      </div>
    </header>
  )
}

export default Header;