import React, { useState } from "react";

const ExpenseContext = React.createContext({
    data: [],
    getData: () => { }
});


export const ExpenseContextProvider = (props) => {
    const [getData, setData] = useState([])

    const submitHandler = (expense) => {
        setData([...getData, expense])
    }

    const contextValue = {
        data: getData,
        getData: submitHandler
    }
    return <ExpenseContext.Provider value={contextValue}>{props.children}</ExpenseContext.Provider>
}

export default ExpenseContext;