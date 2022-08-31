import { v4 as uuid } from 'uuid'
import { useContext } from 'react'

import IconRocket from '../../assets/IconRocket'

import IconArrowLeft from '../../assets/IconArrowLeft'
import IconArrowRight from '../../assets/IconArrowRight'
import IconMenuBurger from '../../assets/IconMenuBurger'

import Modal from '../../components/Modal'
import Header from '../../components/Header'
import Planet from '../../components/Planet'
import { DashboardContext } from '../../context/dashboard'
import { DashboardContainer } from './styles'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {

    const { 
        planetsList, 
        planetOnFocus, setPlanetOnFocus, 
        isHeaderVisible, setIsHeaderVisible,
        planetOnFocusDesktop, setPlanetOnFocusDesktop
    } = useContext(DashboardContext)

    const planetInfo = planetsList[planetOnFocus]

    function toLeft() {
        planetOnFocus !== 0 && setPlanetOnFocus(planetOnFocus - 1)
    }

    function toRight() {
        const lastPlanet = planetsList.length - 1
        planetOnFocus !== lastPlanet && setPlanetOnFocus(planetOnFocus + 1)
    }

    return (

        <DashboardContainer>

            {
                isHeaderVisible === false ? 

                    <header>

                        <button onClick={() => setIsHeaderVisible(true)}> <IconMenuBurger/> </button>

                    </header>
                :

                    <Header>

                        {
                            window.matchMedia('(min-width: 1024px)').matches ?

                                <>
                                    <h3> Faça parte da nossa Comunidade </h3>
                                    <IconRocket onClick={() => {<Navigate to='/'/>}}/>
                                </>
                               
                               :

                                <IconRocket/>
                            }

                    </Header>
            }

            <main onClick={() => setIsHeaderVisible(false)}>

                <ul>

                    {
                        planetsList.map(planet => <Planet 
                            key={uuid()} 
                            planet={planet} 
                            onClick={() => setPlanetOnFocusDesktop(planet)}
                        />) 
                    }       

                </ul>

                {
                    window.matchMedia('(min-width: 1024px)').matches ?

                    
                        planetOnFocusDesktop && 

                            <Modal>

                                <img src={planetOnFocusDesktop?.image} alt={planetOnFocusDesktop?.name} />

                                <div className='container_info'>

                                    <h1 className='info_title-desktop'> {planetOnFocusDesktop?.name} </h1>

                                    <p className='info_resume-desktop'> {planetOnFocusDesktop?.resume} </p>

                                    <span className='info_link-desktop'> {planetOnFocusDesktop?.link} </span>

                                </div>

                            </Modal>
        
                    : 

                        <section>

                            <div className='header_description'>

                                <IconArrowLeft onClick={() => {toLeft()}}/>

                                <h1 className='info_title'> {planetInfo?.name} </h1>

                                <IconArrowRight onClick={() => {toRight()}}/>

                            </div>

                            <div>

                                <p className='info_resume'> {planetInfo?.resume} </p>

                                <span className='info_link'> {planetInfo?.link} </span>

                            </div>

                        </section>
                }
               
            </main>

        </DashboardContainer>
        
    )
}

export default Dashboard