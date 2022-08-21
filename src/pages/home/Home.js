import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {

    return (
        <>
        <section className={classes.starting}>
            <h1>Welcome to Expense Tracker</h1>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>signup</button></Link>
        </section>
        </>
    )
}

export default Home;