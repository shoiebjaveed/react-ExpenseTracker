import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Layout/Header";
import Profile from "./components/Layout/user/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from './pages/signup/Signup';
import CompleteProfile from "./components/Layout/user/CompleteProfile";
import AddExpense from "./components/Layout/expenses/AddExpense";
import EditExpense from "./components/Layout/expenses/EditExpense"

function App() {

  return (
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
  );
}

export default App;