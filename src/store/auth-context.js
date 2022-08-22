import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    username: '',
    email: '',
    imageUrl: '',
    isLoggedIn: false,
    userdata: (token) => {},
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const initialUserName = localStorage.getItem('username');
    const [username, setUsername] = useState(initialUserName);
    const initialImageUrl = localStorage.getItem('imageUrl')
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const initialEmail = localStorage.getItem('email');
    const [email, setEmail] = useState(initialEmail);
    const userIsLoggedIn = !!token;

    const userDataHandler = (email, username, imageUrl) => {
        setEmail(email);
        setUsername(username);
        setImageUrl(imageUrl);
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('imageUrl', imageUrl);
    }

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        setEmail('');
        setUsername('');
        setImageUrl('');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        localStorage.removeItem('imageUrl');
    }

    const contextValue = {
        token: token,
        username: username,
        email: email,
        imageUrl: imageUrl,
        isLoggedIn: userIsLoggedIn,
        userdata: userDataHandler,
        login: loginHandler,
        logout: logoutHandler
    }



    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
