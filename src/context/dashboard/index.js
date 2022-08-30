import { createContext, useEffect, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    
    const [ planetsList, setPlanetList ] = useState([])
    const [ planetOnFocus, setPlanetOnFocus ] = useState(0)
    const [ planetOnFocusDesktop, setPlanetOnFocusDesktop ] = useState({})
    const [ isHeaderVisible, setIsHeaderVisible ] = useState(false)

    useEffect(() => {
        //requisição na api para pegar os dados dos planetas

        //setPlanetList(dados)
    }, [])

    return (

        <DashboardContext.Provider value={{ 
                planetsList, setPlanetList, 
                planetOnFocus, setPlanetOnFocus,
                isHeaderVisible, setIsHeaderVisible,
                planetOnFocusDesktop, setPlanetOnFocusDesktop
            }}>

            {children}

        </DashboardContext.Provider>
    );
};