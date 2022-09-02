import { PlanetContainer } from './styles'

const Planet = ({ planet }) => {
    console.log(planet.id)
    return (

        <PlanetContainer>
            <figure>

              <img src={planet.image} alt={ planet.name} />

            </figure>
            
        </PlanetContainer>

    )
}

export default Planet