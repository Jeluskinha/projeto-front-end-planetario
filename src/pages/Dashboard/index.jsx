import { v4 as uuid } from 'uuid'
import { useContext, useState } from 'react'

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

    const [count, setCount] = useState(-50)


    const { 
        planetsList, 
        planetOnFocus, setPlanetOnFocus, 
        isHeaderVisible, setIsHeaderVisible,
        planetOnFocusDesktop, setPlanetOnFocusDesktop
    } = useContext(DashboardContext)

    const planetInfo = planetsList[planetOnFocus]

    function handleScroll(e){
        console.log(window.scrollY)
        setCount(count+10)
    }

    return (
        <>
        <DashboardContainer count={count}>
            <main>
                <aside id='header'>
                    {isHeaderVisible ? '': 
                    <Header>        
                        <h3> Faça parte da nossa Comunidade </h3>
                        <IconRocket onClick={() =>{<Navigate to='/'/>}}/>
                        <span onClick={()=> setIsHeaderVisible(!isHeaderVisible)}> fechar</span>
                    </Header>}
                    {isHeaderVisible && <button onClick={() => setIsHeaderVisible(!isHeaderVisible)}><IconMenuBurger/></button>}
                </aside>

                <div id='sun__dashboard--box'>
                    <figure id='sun__dashboard'>
                        {planetsList.map(planet =>  planet.id === "0" &&
                        <img src={planet.image} key={planet.id} alt={planet.resume}/>
                        )}
                    </figure>
                </div>

                <ul onScroll={(handleScroll)}>
                    {
                    planetsList.map(planet => 
                    planet.id > 0 &&
                    <Planet 
                        key={planet.id} 
                        planet={planet} 
                        onClick={() => setPlanetOnFocusDesktop(planet)
                        }
                    />) 
                    }       
                </ul>                
            </main>
        </DashboardContainer>
        </>
    )
}

export default Dashboard

/* {
                    window.matchMedia('(min-width: 1024px)').matches && // ? substituido por && para poder comentar o section
                
                        // planetOnFocusDesktop && 
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
                }*/