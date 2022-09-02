import { PlanetContainer } from './styles'

const Planet = ({ planet }) => {
    console.log(planet.name)
    return (

        <PlanetContainer>
            <figure className={planet.name}>

              <img src={planet.image} alt={ planet.resume}/>

            </figure>
            
        </PlanetContainer>

    )
}

export default Planet