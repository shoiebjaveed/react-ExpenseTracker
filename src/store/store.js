import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        expenses: expenseSlice.reducer,
        theme: themeSlice.reducer
    }
});


export default store;