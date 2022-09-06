import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'
import { PlanetContainer } from './styles'



const Planet = ({ planet }) => {

const {setIsOpenModal, setModalPlanet} = useContext(DashboardContext)

    return (

        <PlanetContainer>

            <figure className={planet.name} onClick={() => {

                setModalPlanet(planet)
                setIsOpenModal(true)
                console.log(planet)
                
            }}>

              <img src={planet.image} alt={planet.resume}/>

            </figure>

        </PlanetContainer>

    )
}

export default Planet;