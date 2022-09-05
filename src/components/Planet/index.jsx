import { PlanetContainer } from './styles'

const Planet = ({ planet }) => {
    return (

        <PlanetContainer>
            <figure className={planet.name} onClick={()=>console.log(planet.name)}>

              <img src={planet.image} alt={ planet.resume}/>

            </figure>
            
        </PlanetContainer>

    )
}

export default Planet