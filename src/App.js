import './App.js';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Layout/Header";
import Profile from "./components/Layout/user/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from './pages/signup/Signup';
import CompleteProfile from "./components/Layout/user/CompleteProfile";
import AddExpense from "./components/Layout/expenses/AddExpense";
import EditExpense from "./components/Layout/expenses/EditExpense"
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, GlobalStyles, lightTheme } from './components/UI/theme.js';
import { ThemeProvider } from 'styled-components';
import { useContext, useEffect } from 'react';
import { fetchExpenseData, sendExpenseData } from './store/expense-actions.js';
import AuthContext from './store/auth-context.js';

let initial = true;

function App() {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme);
  const expenses = useSelector(state => state.expenses)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(fetchExpenseData())
  }, [dispatch])

  useEffect(() => {
    if (initial) {
      initial = false
      return;
    }
    dispatch(sendExpenseData(expenses))
  }, [expenses, dispatch])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Home />} />
          {isLoggedIn && <>
            <Route path='/profile' element={<Profile />} />
            <Route path='/complete' element={<CompleteProfile />} />
            <Route path='/add-expense' element={<AddExpense />} />
            <Route path='/edit-expense/:id' element={<EditExpense />} />
          </>}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;