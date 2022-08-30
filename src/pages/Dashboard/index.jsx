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

        <body>

            {
                isHeaderVisible === false ? 

                    <header>

                        <button onClick={() => setIsHeaderVisible(true)}> <IconMenuBurger/> </button>

                    </header>
                :

                    <Header>

                        {
                            window.matchMedia('(max-width: 1024px)').matches ?

                                <IconRocket/>
                               
                            :
                                <>
                                    <h3> Faça parte da nossa Comunidade </h3>
                                    <IconRocket/>
                                </>
                        }

                    </Header>
            }

            <main>

                <ul>

                    <li className='sun_container'> 
                        sol
                    </li>

                    {
                        planetsList.map(planet => <Planet 
                            key={uuid()} 
                            planet={planet} 
                            onClick={() => setPlanetOnFocusDesktop(planet)}
                        />) 
                    }       

                </ul>

                {
                    window.matchMedia('(max-width: 1024px)').matches ?

                        <section>

                            <div>

                                <IconArrowLeft onClick={() => {toLeft()}}/>

                                <h1 className='info_title'> {planetInfo.name} </h1>

                                <IconArrowRight onClick={() => {toRight()}}/>

                            </div>

                            <p className='info_description'> {planetInfo.data} </p>

                        </section>
        
                    : 

                    planetOnFocusDesktop && 

                        <Modal>

                            <img src={planetOnFocusDesktop.image} alt={planetOnFocusDesktop.name} />

                            <div className='container_info'>

                                <h1 className='info_title-desktop'> {planetOnFocusDesktop.name} </h1>

                                <p className='info_description-desktop'> {planetOnFocusDesktop.data} </p>

                            </div>

                        </Modal>
                }
               
            </main>

        </body>
        
    )
}

export default Dashboard