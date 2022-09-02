import {Routes, Route, Navigate} from "react-router-dom"
import Blog from "../pages/Blog"
import Dashboard from "../pages/Dashboard"

function RoutesMain(){
    return(
        <Routes>
            <Route path='/login'/>
            <Route path='/register'/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='*' element={<Navigate replace to='/'/>}/>
        </Routes>
    )
}

export default RoutesMain