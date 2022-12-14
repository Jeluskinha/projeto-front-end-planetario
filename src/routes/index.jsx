import { Routes, Route, Navigate } from "react-router-dom"
import Blog from "../pages/Blog"
import Dashboard from "../pages/Dashboard"
import Register from "../pages/Register/index.jsx"
import Login from "../pages/Login/index.jsx"

function RoutesMain(){
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='*' element={<Navigate replace to='/'/>}/>
        </Routes>
    )
}

export default RoutesMain