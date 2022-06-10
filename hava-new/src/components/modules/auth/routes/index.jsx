import { Routes, Route, Link } from "react-router-dom"
import Login from './components/modules/auth/views/login';
import Register from "./components/modules/auth/views/register";
import ForgotPassword from "./components/modules/auth/views/forgot-password";
import ResetPassword from "./components/modules/auth/views/reset-password";
const AuthRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
        </Routes>

    )
}

export default AuthRoutes;

