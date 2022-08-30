import { PlanetContainer } from './styles'

const Planet = ({ planet }) => {

    return (

        <PlanetContainer>

            <img src={planet.image} alt={ planet.name} />

        </PlanetContainer>

    )
}

export default Planet