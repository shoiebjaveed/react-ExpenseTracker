import ExpenseList from "./ExpenseList";
import { Link } from "react-router-dom";
import classes from './Expenses.module.css'
import { useSelector } from "react-redux";


const Expenses = () => {
    const expenses = useSelector(store => store.expenses)
    let sum = 0;
    if(expenses.length > 0){
        const getsum = expenses.map(datum => datum.amount)
        sum =  getsum.reduce((result,number)=> result+number);
       
    }

    return(
        <>
        <div className={classes.expenses}>
            <h2>Total amount spend: ${sum}</h2>
        <Link to='/add-expense'><button>AddExpense</button></Link>
        <ExpenseList />
        </div>
        </>
    )
}

export default Expenses;