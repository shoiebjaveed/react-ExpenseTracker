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
import { useSelector } from 'react-redux';
import { darkTheme, GlobalStyles, lightTheme } from './components/UI/theme.js';
import { ThemeProvider } from 'styled-components';


function App() {
  const { theme } = useSelector(state => state.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/complete' element={<CompleteProfile />} />
          <Route path='/add-expense' element={<AddExpense />} />
          <Route path='/edit-expense/:id' element={<EditExpense />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;