import classes from './ExpenseList.module.css';
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteExpense } from '../../../store/expenseSlice';




const ExpenseList = (props) => {
    const dispatch = useDispatch()
    const expenses = useSelector(store => store.expenses)

    const deleteHandler = (id) => {
        dispatch(deleteExpense({id}))
    }

    return (
        <>
            <ul>
                {expenses.map((data => {
                    return (
                        <div className={classes.list} key={data.id}>
                            <h2>{data.category}</h2>
                            <p>{data.description}</p>
                            <h5>{data.amount}</h5>
                            <div >
                            <button onClick={() => deleteHandler(data.id)}><RiDeleteBin5Fill /></button>
                            <Link to={`edit-expense/${data.id}`}><button><RiEditBoxLine /></button></Link>
                            </div>
                            
                        </div>)
                }))}
            </ul>
        </>
    )



   
}

export default ExpenseList;