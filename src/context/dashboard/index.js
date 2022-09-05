import { createContext, useEffect, useState } from 'react';
import Api from '../../services/api';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    
    const [ planetsList, setPlanetList ] = useState([])
    const [ planetOnFocus, setPlanetOnFocus ] = useState(0)
    const [ planetOnFocusDesktop, setPlanetOnFocusDesktop ] = useState({})
    const [ isHeaderVisible, setIsHeaderVisible ] = useState(false)

    useEffect(() => {
        Api.get('planets')
        .then(res => setPlanetList(res.data))
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