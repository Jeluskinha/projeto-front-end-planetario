import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'
import { ModalContainer } from './styles'
import IconClose from '../../assets/IconClose'


const ModalPlanet = () => {
    
    const {closeModal, modalPlanet} = useContext(DashboardContext)

    return (

        <ModalContainer>  

        <div className='planet-modal-box'>
            <button onClick={closeModal}><IconClose/></button>

            <figure>

                <img src={modalPlanet.image} alt="" />

            </figure>

            <div className='planet-modal-text'>

                <h2>Planeta {modalPlanet.name}</h2>

                <p>{modalPlanet.resume}</p>

            </div>
 
        </div>

        </ModalContainer>
    )
}

export default ModalPlanet;