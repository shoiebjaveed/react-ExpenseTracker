import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Expenses from '../../components/Layout/expenses/Expenses';
import AuthContext from '../../store/auth-context';
import classes from './Home.module.css';

const Home = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    console.log(authCtx)

    return (
        <>
        <section className={classes.starting}>
            <h1>Welcome to Expense Tracker</h1>
            {!isLoggedIn && (<Link to='/login'><button>Login</button></Link>)}
            {!isLoggedIn &&(<Link to='/signup'><button>signup</button></Link>)}
            {isLoggedIn && <Expenses />}
        </section>
        </>
    )
}

export default Home;