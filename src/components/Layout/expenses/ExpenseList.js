import { useContext } from 'react';
import ExpenseContext from '../../../store/expense-context';
import classes from './ExpenseList.module.css';
import { RiDeleteBin5Fill } from "react-icons/ri";



const ExpenseList = () => {
    const expenseCtx = useContext(ExpenseContext);

    return (<>

    <ul>
        {expenseCtx.data.map((data => {
            return (
                <div className={classes.list}>
                        <input defaultValue={`category: ${data.category}`} />
                        <input defaultValue={`description: ${data.description}`} />
                        <input defaultValue={`amount: ${data.amount}`} />
                        <button><RiDeleteBin5Fill /></button>
                </div>)
        }))}
    </ul></>)
}

export default ExpenseList;