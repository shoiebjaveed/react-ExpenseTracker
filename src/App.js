import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from './pages/signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;