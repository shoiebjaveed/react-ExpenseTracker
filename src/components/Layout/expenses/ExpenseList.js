import classes from './ExpenseList.module.css';
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { expenseAction } from '../../../store/expenseSlice';
import { Link } from 'react-router-dom';

const ExpenseList = (props) => {
    const dispatch = useDispatch()
   
    const deleteExpenseHandler = (id) => {
        dispatch(expenseAction.deleteExpense({id}))
    }

    return (
        <>
            <li className={classes.item}>
                <div className={classes.card}>
                        <h3>{props.category}</h3>
                        <div className={classes.price}>${props.amount}</div>
                    <p>{props.description}</p>
                    <div className={classes.actions}>
                    <button onClick={() => deleteExpenseHandler(props.id)}><RiDeleteBin5Fill /></button>
                    <Link to={`edit-expense/${props.id}`}><button><RiEditBoxLine /></button></Link>
                    </div>
                </div>
            </li>
        </>
    )




}

export default ExpenseList;