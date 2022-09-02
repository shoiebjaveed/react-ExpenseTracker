import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    
]

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state,action) => {
            state.push(action.payload)
        },
        editExpense: (state,action) => {
            const { id,category,description,amount } = action.payload;
            const existExpense = state.find(expense => expense.id === id);
            if(existExpense) {
                existExpense.category = category;
                existExpense.description = description;
                existExpense.amount = amount
            }
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload;
            const existExpense = state.find(expense => expense.id === id);
            if(existExpense) {
                return state.filter(expense => expense.id !== id)
            }
            
        }

    }
})

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;