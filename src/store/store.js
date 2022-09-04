import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expenseSlice';
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        expenses: expenseReducer,
        theme: themeSlice.reducer
    }
});


export default store;