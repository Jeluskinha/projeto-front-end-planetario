import { createContext, useEffect, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    
    const [ planetsList, setPlanetList ] = useState([])
    const [ planetOnFocus, setPlanetOnFocus ] = useState({})

    useEffect(() => {
        //requisição na api para pegar os dados dos planetas

        //setPlanetList(dados)
    }, [])

    return (
        <DashboardContext.Provider value={{ }}>
            {children}
        </DashboardContext.Provider>
    );
};