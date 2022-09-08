// import { v4 as uuid } from 'uuid'
import { useContext } from 'react' //useState
import { motion } from 'framer-motion'

import IconRocket from '../../assets/IconRocket'

import IconMenuBurger from '../../assets/IconMenuBurger'

import Header from '../../components/HeaderDash'
import Planet from '../../components/Planet'
import { DashboardContext } from '../../context/dashboard'
import { DashboardContainer } from './styles'

import {  useNavigate } from "react-router-dom";

import Modal from '../../components/Modal'
import ModalPlanet from '../../components/ModalPlanet'
import {AiOutlineArrowUp} from 'react-icons/ai'



const Dashboard = () => {
    
    const easterEgg = localStorage.getItem('@plantaryM3:nickname')
    console.log(easterEgg)

    const navigate = useNavigate()

    const { 
        planetsList, 
        isHeaderVisible, setIsHeaderVisible,
        setPlanetOnFocusDesktop, isOpenModal
    } = useContext(DashboardContext)

    const nameUser = localStorage.getItem('@plantaryM3:nickname')

    return (
        <>
        <DashboardContainer>
        <main>
                
                    {isHeaderVisible ? '': 
                        <Header>  
                            
                                {
                                    nameUser === null? 
                                    <h3>Faça parte da nossa Comunidade</h3> 
                                    : <h3>{nameUser}</h3>
                                } 
                                
                                <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileFocus={{ scale: 1.2 }} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0, 0.71, 0.2, 1.01] }} 
                                onClick={() => 
                                    nameUser === null? 
                                    navigate('/login') 
                                    : navigate('/blog')}
                                    ><IconRocket/></motion.button>

                                <motion.button 
                                whileHover={{ scale: 1.2 }}
                                whileFocus={{ scale: 1.2 }} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0, 0.71, 0.2, 1.01] }}
                                onClick={()=> setIsHeaderVisible(!isHeaderVisible)}><AiOutlineArrowUp size='100%' fill='white'/></motion.button>
                                
                        </Header>}
                    
                    {isHeaderVisible && <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileFocus={{ scale: 1.2 }} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01] }} 
                    id='burger_menu' onClick={() => setIsHeaderVisible(!isHeaderVisible)}><IconMenuBurger/></motion.button>}
                
                <div id='sun__dashboard--box'>
                    <figure id='sun__dashboard'>
                        {planetsList.map(planet =>  planet.id === "0" &&
                        <img src={planet.image} key={planet.id} alt={planet.resume}/>
                        )}
                    </figure>
                </div>

                <ul>
                {easterEgg  === 'Jeluskinha' ?    
                    planetsList.map(planet => 
                    planet.id > 0 &&
                    <Planet 
                        key={planet.id} 
                        planet={planet} 
                        onClick={() => setPlanetOnFocusDesktop(planet)}
                    />)
                    :   
                    planetsList.map(planet => 
                        planet.id > 0 &&
                        <Planet 
                            key={planet.id} 
                            planet={planet} 
                            onClick={() => setPlanetOnFocusDesktop(planet)}
                            easterEgg={easterEgg}
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
