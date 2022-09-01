import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/Dashboard"

function RoutesMain(){
    return(
        <Routes>
            <Route path='/login'/>
            <Route path='/register'/>
            <Route path='/blog'/>
            <Route path='*' element={<Navigate replace to='/'/>}/>
        </Routes>
    )
}

export default RoutesMain