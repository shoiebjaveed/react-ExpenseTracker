import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    email: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        setEmail(email)
    }

    const logoutHandler = () => {
        setToken(null);
        setEmail('');
    }

    const contextValue = {
        token: token,
        email: email,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }



    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
