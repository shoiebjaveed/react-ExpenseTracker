import { expenseAction } from "./expenseSlice"



export const fetchExpenseData = () => {
    return async (dispatch) => {
        
        const fetchData = async () => {
            const response = await fetch('https://expenses-data-default-rtdb.firebaseio.com/expense.json')
            if (!response.ok) {
                throw new Error('failed to fetch data from database')
            }
            const data = await response.json();
            return data
        }
        try {
            const expenseData = await fetchData()
            dispatch(expenseAction.replaceExpense({
                expenseList: expenseData.expenseList || [],
                totalAmount: expenseData.totalAmount
            }))
        } catch (error) {
            alert(error)
        }
    }
}

export const sendExpenseData = (expenses) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('https://expenses-data-default-rtdb.firebaseio.com//expense.json', {
                method: 'PUT',
                body: JSON.stringify({
                    expenseList: expenses.expenseList,
                    totalAmount: expenses.totalAmount
                })
            })
            if (!response.ok) {
                throw new Error('something went wrong...')
            }
        }
        try {
            await sendRequest()
        } catch (error) {
            alert(error)
        }
    }
}