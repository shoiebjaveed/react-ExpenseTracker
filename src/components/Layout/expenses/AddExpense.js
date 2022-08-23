import { useContext, useRef } from 'react';
import ExpenseContext from '../../../store/expense-context';
import classes from './AddExpense.module.css';
import ExpenseList from './ExpenseList';

const AddExpense = () => {
    const expenseCtx = useContext(ExpenseContext)
    const amountRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()
        const expense = {
            amount: amountRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value
        }
        expenseCtx.getData(expense);
    }

    


    return (
        <>
            <div className={classes.AddExpense}>
                <h2>Add Expense</h2>
                <form onSubmit={submitHandler}>
                    <input type='number' placeholder='₹ enter amount' required ref={amountRef} />
                    <input type='text' placeholder='enter description' required ref={descriptionRef} />
                    <select ref={categoryRef}>
                        <option value="">choose category</option>
                        <option value="Rent">Rent</option>
                        <option value="Food">Food</option>
                        <option value="Clothes">Clothes</option>
                        <option value='Feul'>Fuel</option>
                        <option value="Medical">Medical</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <button type='submit'>New Expense</button>
                </form>
            </div>
            <div className={classes.expenseList}>
                <ExpenseList />
            </div>
        </>
    )
}

export default AddExpense;