import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Layout/Header";
import Profile from "./components/Layout/user/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from './pages/signup/Signup';
import CompleteProfile from "./components/Layout/user/CompleteProfile";
import { ExpenseContextProvider } from "./store/expense-context";

function App() {

  return (
    <ExpenseContextProvider>
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/complete' element={<CompleteProfile />} />
    </Routes>
    </BrowserRouter>
    </ExpenseContextProvider>    
  );
}

export default App;