import classes from './AddExpense.module.css';

const AddExpense = () => {

    return (
        <>
            <div className={classes.AddExpense}>
                <h2>Add Expense</h2>
                <form>
                    <input type='number' placeholder='₹ enter amount' required />
                    <input type='text' placeholder='enter description' required />
                    <select>
                        <option value="">choose category</option>
                        <option value="Rent">Rent</option>
                        <option value="Food">Food</option>
                        <option value="Clothes">Clothes</option>
                        <option value='Feul'>Fuel</option>
                        <option value="Medical">Medical</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <button>New Expense</button>
                </form>
            </div>
        </>
    )
}

export default AddExpense;