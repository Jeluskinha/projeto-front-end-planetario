import {Routes, Route, Navigate} from "react-router-dom"

function RoutesMain(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Login/>}/>
            <Route path='/forum' element={<Login/>}/>
            {/* ↧ ↧ em caso de digitar rota errada ele redireciona para a página de dashboard*/}
            <Route path='*' element={<Navigate replace to='/'/>}/>
        </Routes>
    )
}

export default RoutesMain