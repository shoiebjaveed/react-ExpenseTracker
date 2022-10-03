import ExpenseList from "./ExpenseList";
import { Link } from "react-router-dom";
import classes from './Expenses.module.css'
import { useSelector } from "react-redux";

const Expenses = (props) => {
    const expenses = useSelector(state => state.expenses.expenseList)
    const totalAmount = useSelector(state => state.expenses.totalAmount)
    console.log(expenses)

    return(
        <>
        <div className={classes.expenses}>
            <h2>Total amount spend: ${totalAmount}</h2>
        <Link to='/add-expense'><button>AddExpense</button></Link>
        <ul>
        {expenses.map((item) => (
            <ExpenseList 
            key={item.id}
            id={item.id}
            category={item.category}
            amount={item.amount}
            description={item.description} />
        ))}
        </ul>
        </div>
        </>
    )
}

export default Expenses;