// import { v4 as uuid } from 'uuid'
import { useContext, useEffect } from 'react' //useState

import IconRocket from '../../assets/IconRocket'

// import IconArrowLeft from '../../assets/IconArrowLeft'
// import IconArrowRight from '../../assets/IconArrowRight'
import IconMenuBurger from '../../assets/IconMenuBurger'

import Header from '../../components/HeaderDash'
import Planet from '../../components/Planet'
import { DashboardContext } from '../../context/dashboard'
import { DashboardContainer } from './styles'


import { Link } from 'react-router-dom'
import {  useNavigate } from "react-router-dom";

import { Navigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import ModalPlanet from '../../components/ModalPlanet'
import Api from '../../services/api'
import {AiOutlineArrowUp} from 'react-icons/ai'



const Dashboard = () => {
    
    const navigate = useNavigate()

 
    const { 
        userIsLog,//aqui
        planetsList, 
        isHeaderVisible, setIsHeaderVisible,
        setPlanetOnFocusDesktop, isOpenModal
    } = useContext(DashboardContext)

    const nameUser = localStorage.getItem('@plantaryM3:nickname')
    console.log(nameUser)

    return (
        <>
        <DashboardContainer>
            <main>
                <aside id='header'>
                    {isHeaderVisible ? '': 
                    <Header>   
                        {nameUser === null? <h3> Faça parte da nossa Comunidade</h3> : <h3>{nameUser}</h3>}     
                        <span onClick={() => nameUser === null? navigate('/login') : navigate('/blog')}><IconRocket/></span>
                        <span onClick={()=> setIsHeaderVisible(!isHeaderVisible)}><AiOutlineArrowUp/></span>
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

                <ul>
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
            {isOpenModal && (
                <Modal>
                    <ModalPlanet/>
                </Modal>
            )}
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