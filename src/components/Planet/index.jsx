import { PlanetContainer } from './styles'

const Planet = ({ planet }) => {
    console.log(planet.id)
    return (

        <PlanetContainer>
            
            <img src={planet.image} alt={ planet.name} />
            
        </PlanetContainer>

    )
}

export default Planet