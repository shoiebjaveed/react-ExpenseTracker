import { useRef } from 'react';
import classes from './AddExpense.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editExpense } from '../../../store/expenseSlice';


const EditExpense = () => {

    const dispatch = useDispatch()
    const params = useParams();
    const history = useNavigate();
    const amountRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    


    const submitHandler = (event) => {
        event.preventDefault();
            dispatch(editExpense({
                id: params.id,
                category: categoryRef.current.value,
                description: descriptionRef.current.value,
                amount: amountRef.current.value
            }))
        history('/');
    }

    return (
        <>
            <div className={classes.AddExpense}>
                <h2>Update Expense</h2>
                <form>
                    <input type='number' placeholder='amount' required ref={amountRef} />
                    <input type='text' placeholder='description' required ref={descriptionRef} />
                    <select required ref={categoryRef}>
                        <option value=''>Choose a category</option>
                        <option value="Rent">Rent</option>
                        <option value="Food">Food</option>
                        <option value="Clothes">Clothes</option>
                        <option value='Feul'>Fuel</option>
                        <option value="Medical">Medical</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <button onClick={submitHandler}>Update Expense</button>
                </form>
            </div>
            
        </>
    )
}

export default EditExpense;