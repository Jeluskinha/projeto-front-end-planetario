import { createContext, useEffect, useState } from 'react';
import Api from '../../services/api';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {

    const [userIsLog, setUserIsLog] = useState(false)
    
    const [ planetsList, setPlanetList ] = useState([])
    const [ planetOnFocusDesktop, setPlanetOnFocusDesktop ] = useState({})
    const [ isHeaderVisible, setIsHeaderVisible ] = useState(true)
    const [ isOpenModal, setIsOpenModal ] = useState(false)
    const [ modalPlanet, setModalPlanet ] = useState({})

    useEffect(() => {
        Api.get('planets')
        .then(res => setPlanetList(res.data))
    }, []) 

    const closeModal = (e) => {
        e.preventDefault()
        setIsOpenModal(!isOpenModal)
    }

    return (
        <DashboardContext.Provider value={{ 
            userIsLog, setUserIsLog,
            planetsList, setPlanetList, 
            // planetOnFocus, setPlanetOnFocus,
            isHeaderVisible, setIsHeaderVisible,
            planetOnFocusDesktop, setPlanetOnFocusDesktop,
            isOpenModal, setIsOpenModal, closeModal,
            modalPlanet, setModalPlanet,
        }}>
            {children}
        </DashboardContext.Provider>
    );
};