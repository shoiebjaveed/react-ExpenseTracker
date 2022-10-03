import { createSlice } from '@reduxjs/toolkit';

const initialState = { expenseList: [], totalAmount: '0' }

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenseList.push(action.payload)
            state.totalAmount = parseInt(state.totalAmount) + parseInt(action.payload.amount) 
        },
        editExpense: (state, action) => {
            const { id, category, amount, description } = action.payload
            const existExpense = state.expenseList.find((item) => item.id === id);
            console.log(existExpense)
            if (existExpense) {
                existExpense.category = category
                existExpense.description = description
                existExpense.amount = amount
            }
            
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload
            const existExpense = state.expenseList.find((item) => item.id === id);
            if (existExpense) {
                state.expenseList = state.expenseList.filter(expense => expense.id !== id)
                state.totalAmount = state.totalAmount - existExpense.amount
            }

        },
        replaceExpense: (state, action) => {
            state.expenseList = action.payload.expenseList
            state.totalAmount = action.payload.totalAmount
        }

    }
})

export const expenseAction = expenseSlice.actions;
export default expenseSlice;