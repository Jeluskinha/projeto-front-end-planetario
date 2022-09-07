import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'
import { PlanetContainer } from './styles'



const Planet = ({ planet, easterEgg }) => {

const {setIsOpenModal, setModalPlanet} = useContext(DashboardContext)

    return (

        <PlanetContainer>

            <figure className={planet.name} onClick={() => {

                setModalPlanet(planet)
                setIsOpenModal(true)
                console.log(planet)
                
            }}>
                
            {/* {easterEgg && planet.name === 'Terra' ? <img src="./planets/EasterEgg.jpeg" alt='gabi'/> : <img src={planet.image} alt={planet.resume}/>} */}
            <img src={planet.image} alt={planet.resume}/>
            </figure>

        </PlanetContainer>

    )
}

export default Planet;